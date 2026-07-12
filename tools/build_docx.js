#!/usr/bin/env node
// Generate a print-ready MLA-manuscript .docx from an article.md.
// Usage: node tools/build_docx.js articles/<topic-slug>/article.md
// Writes article.docx next to the source .md (or override with a 2nd argv).
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun,
  AlignmentType, Header, PageNumber, convertInchesToTwip,
} = require("docx");

const mdPath = process.argv[2];
if (!mdPath) {
  console.error("Usage: node tools/build_docx.js <path/to/article.md> [output.docx]");
  process.exit(1);
}
const outPath = process.argv[3] || mdPath.replace(/\.md$/, ".docx");
const md = fs.readFileSync(mdPath, "utf8");
const lines = md.split(/\r?\n/);

// ---- inline markdown (**bold**, *italic*) -> TextRun[] ----
function parseInline(text) {
  const runs = [];
  const re = /\*\*(.+?)\*\*|\*(.+?)\*/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) runs.push({ text: text.slice(last, m.index) });
    if (m[1] !== undefined) runs.push({ text: m[1], bold: true });
    else runs.push({ text: m[2], italics: true });
    last = re.lastIndex;
  }
  if (last < text.length) runs.push({ text: text.slice(last) });
  return runs.map(r => new TextRun({
    text: r.text, bold: !!r.bold, italics: !!r.italics,
    font: "Times New Roman", size: 24, // 12pt
  }));
}

function bodyPara(text, extra = {}) {
  return new Paragraph({
    children: parseInline(text),
    spacing: { line: 480, lineRule: "auto" }, // double-spaced
    ...extra,
  });
}

// ---- parse markdown into blocks ----
let title = "";
let authorLine = "";
let i = 0;
if (lines[i] && lines[i].startsWith("# ")) { title = lines[i].slice(2).trim(); i++; }

const children = [];
let inWorksCited = false;

for (; i < lines.length; i++) {
  const line = lines[i];
  if (line.trim() === "") continue;

  if (line.startsWith("**Author:**")) authorLine = line;

  if (line.startsWith("## ")) {
    const heading = line.slice(3).trim();
    inWorksCited = heading === "Works Cited";
    children.push(new Paragraph({
      children: inWorksCited
        ? [new TextRun({ text: "Works Cited", font: "Times New Roman", size: 24 })]
        : [new TextRun({ text: heading, bold: true, font: "Times New Roman", size: 24 })],
      alignment: inWorksCited ? AlignmentType.CENTER : AlignmentType.LEFT,
      spacing: { line: 480, lineRule: "auto", before: 240 },
    }));
    continue;
  }

  if (inWorksCited) {
    // MLA hanging indent for each Works Cited entry
    children.push(new Paragraph({
      children: parseInline(line),
      spacing: { line: 480, lineRule: "auto" },
      indent: { left: convertInchesToTwip(0.5), hanging: convertInchesToTwip(0.5) },
    }));
    continue;
  }

  children.push(bodyPara(line));
}

// Derive a header surname from "**Author:** Name" — falls back to a
// placeholder if the author field is itself still a bracketed placeholder.
let headerSurname = "[Author Surname]";
const authorMatch = authorLine.match(/\*\*Author:\*\*\s*(.+)/);
if (authorMatch) {
  const name = authorMatch[1].trim();
  if (!name.startsWith("[")) {
    const parts = name.split(/\s+/);
    headerSurname = parts[parts.length - 1];
  }
}

const doc = new Document({
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 }, // US Letter
        margin: {
          top: convertInchesToTwip(1),
          bottom: convertInchesToTwip(1),
          left: convertInchesToTwip(1),
          right: convertInchesToTwip(1),
        },
      },
    },
    headers: {
      default: new Header({
        children: [
          new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [
              new TextRun({ text: `${headerSurname}  `, font: "Times New Roman", size: 24 }),
              new TextRun({ children: [PageNumber.CURRENT], font: "Times New Roman", size: 24 }),
            ],
          }),
        ],
      }),
    },
    children: [
      new Paragraph({
        children: parseInline(title),
        alignment: AlignmentType.CENTER,
        spacing: { line: 480, lineRule: "auto", before: 240, after: 240 },
      }),
      ...children,
    ],
  }],
  styles: {
    default: { document: { run: { font: "Times New Roman", size: 24 } } },
  },
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync(outPath, buf);
  console.log(`Wrote ${outPath} (${buf.length} bytes)`);
});
