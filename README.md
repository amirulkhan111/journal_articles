# Journal Articles — English Literature & Language

A working repository of original academic articles on English Literature, English Language, and allied subjects (linguistics, literary theory, applied linguistics, comparative literature, etc.), written for journal submission in current **MLA style (9th edition)**.

## Integrity policy

Every article in this repository must follow these non-negotiable rules:

1. **No fabricated data, statistics, quotations, or citations.** Every factual claim, quotation, or statistic must be traceable to a real, verifiable academic source (peer-reviewed journal article, scholarly monograph, or other reputable academic publication).
2. **In-text (parenthetical) citations must be verbatim.** Quoted material is reproduced exactly as it appears in the source — spelling, punctuation, and wording unchanged — with the author and page/paragraph number cited in current MLA parenthetical format (Author page). No paraphrase is ever presented inside quotation marks.
3. **Works Cited / Bibliography / References entries must be verbatim and accurate.** Every publication detail in an end-of-article entry — author name(s), exact title, container (journal/book), volume, issue, year, page range, publisher, and DOI/URL — is copied exactly as it appears on the actual source or its official database/publisher record, not reconstructed from memory or approximated. These terms (Works Cited, Bibliography, References) are used interchangeably in this repo; current MLA style calls the list **Works Cited**, and that is the heading used in every article.
4. **Works Cited lists are exhaustive and exactly matched to in-text citations.** Every source cited in-text appears in the Works Cited list, and every Works Cited entry is cited at least once in-text — no orphans on either side.
5. **No invented sources.** If a claim cannot be backed by a real, checkable source, it is either dropped, rephrased as the author's own analysis (clearly not presented as fact), or flagged as needing further research — never filled in with a plausible-sounding fake citation or fake bibliographic details.
6. **Uncertainty is stated, not hidden.** Where scholarly consensus is unsettled or evidence is thin, the article says so rather than smoothing it over.

## Length requirement

Every article must be **2,500–3,000 words minimum** of substantive body text (Introduction through Conclusion; abstract and Works Cited are not counted toward this minimum). No compromise: an article that falls short is not finished, and is not committed until it clears the floor with real analysis, not padding.

## Research ethics

Beyond the integrity policy above, every article must observe standard research-ethics practice for humanities scholarship:

- **Attribution before argument.** Every idea, framework, or reading drawn from a source — not just direct quotations — is credited to that source, even when paraphrased.
- **Fair representation of sources.** Sources are represented accurately, in the spirit the original author intended; no quoting out of context to manufacture support for a claim the source doesn't actually make.
- **Respect for copyright.** Quotations are kept to the minimum needed to support analysis (short excerpts under fair-use/fair-dealing norms for criticism and scholarship), not wholesale reproduction of a source's text.
- **No conflicts of interest hidden from the reader.** If an article draws heavily on one scholar's framework, that intellectual debt is stated plainly rather than diffused into vague general claims.
- **Original analysis is original.** The connective argument between sources — the article's actual thesis and reasoning — is the author's own synthesis, not a stitched-together paraphrase of the secondary literature.

## Plagiarism ceiling

Every article must come in **under 7% text-matching similarity** against external sources, as measured by a standard plagiarism-detection tool (e.g., Turnitin, iThenticate) before submission.

How this is achieved during drafting (since this repository has no access to a plagiarism-detection service itself, and the 7% figure cannot be verified from inside a drafting session):

- Direct quotations are kept short, are always inside quotation marks, and are always cited — collectively, quoted material should stay well under 7% of an article's total word count, since most similarity-checkers still flag quoted text unless a paper is under an academic-use exemption.
- All connecting analysis, transitions, and argument are written fresh, not lightly reworded ("patchwriting") from a source's sentence structure.
- **Before an article is treated as submission-ready, run it through an actual plagiarism checker and record the result** (tool used, date, similarity score) in that topic's `sources.md`. An article without a recorded, verified score under 7% is a draft, not a finished article.

## Output formats

Every article is produced in two forms, kept in sync:

- **`article.md`** — the editable Markdown source, MLA-formatted, and the version tracked for diffs/history.
- **`article.docx`** — a print-ready Word document generated from `article.md`: MLA manuscript formatting (Times New Roman 12pt, double-spaced throughout, 1-inch margins, header with author surname and page number, hanging-indent Works Cited page). Generated fresh whenever `article.md` changes — the two must never drift out of sync.

## Repository structure

```
articles/
  <topic-slug>/
    article.md        # the article itself (MLA-formatted Markdown) — editable source
    article.docx       # print-ready Word version generated from article.md
    sources.md         # working bibliography / research notes for this article
  _template/
    ARTICLE_TEMPLATE.md
    SOURCES_TEMPLATE.md
```

- One subfolder per topic under `articles/`, named with a short kebab-case slug (e.g. `articles/eco-criticism-hardy/`, `articles/politeness-theory-pragmatics/`).
- Each topic folder holds the article draft (`.md` and `.docx`) plus a `sources.md` tracking the real academic sources consulted, their key claims/quotations, and (once run) the recorded plagiarism-check result, so citations can always be traced back and audited.
- `articles/_template/` contains blank templates to copy when starting a new topic.

## Workflow for a new article

1. Agree on a specific topic / research question / thesis.
2. Research using real academic sources (journal databases, publisher archives, etc.) — no source is cited until it has actually been found and read.
3. Log each source in `sources.md` with its exact bibliographic details (copied verbatim from the source/publisher record) and the exact quotations/claims it supports, as research proceeds.
4. Draft the article in `article.md`, using the template in `articles/_template/ARTICLE_TEMPLATE.md`, with verbatim in-text MLA citations tied to entries in `sources.md`, until it clears **2,500–3,000 words** of substantive body text.
5. Compile the Works Cited list from the verbatim bibliographic details in `sources.md`, formatted per current MLA style — cross-check every entry against `sources.md` field by field.
6. Review against the integrity policy, research-ethics practices, and plagiarism ceiling above.
7. Generate `article.docx` from the finished `article.md` in MLA manuscript format, and regenerate it any time `article.md` changes.
8. Before calling the article submission-ready, run it through a plagiarism checker and record the tool, date, and score in `sources.md`; confirm the score is under 7%.

## Status

- [`articles/trauma-memory-beloved/`](articles/trauma-memory-beloved/) — "Trauma, Memory, and the Unspeakable in Toni Morrison's *Beloved*," drawing on Krumholz (*African American Review* 1992), Koolish (*MELUS* 2001), and Lakshmi K et al. (*Theory and Practice in Language Studies* 2025). Author name is a placeholder — fill in before submission. **Predates the length/docx/plagiarism-check requirements above** — needs expansion to 2,500–3,000 words, a generated `.docx`, and a recorded plagiarism-check score before it counts as submission-ready under current policy.

Further topics will be added one at a time as subfolders under `articles/`.
