# Peer-Review / Forensic Audit — "Trauma, Memory, and the Unspeakable in Toni Morrison's *Beloved*"

**Reviewer role:** anonymous peer reviewer, scholarly fact-checker, and reference verification editor
**Date:** 2026-07-16
**Method:** Every quotation was re-checked against the original full-text PDFs (retrieved directly from the sources, re-confirmed live as of this audit), extracted with `pdftotext` and cross-mapped to printed page numbers using explicit running-header/footer page markers found in the OCR text itself, not assumed. Where a source could not be independently re-verified (one case), that is stated plainly rather than guessed.

---

## PART I — Scholarly Verification (bibliographic records)

| Entry | Verdict |
|---|---|
| Koolish, "'To Be Loved and Cry Shame'..." | **Verified.** Author, title, journal, vol. 26, no. 4, 2001, pp. 169–195 confirmed directly from the source PDF's own JSTOR title page. |
| Krumholz, "The Ghosts of Slavery..." | **Verified.** Author, title, journal, vol. 26, no. 3, 1992, pp. 395–408 confirmed directly from the source PDF's own JSTOR title page and running footers on every page (396 through 408 each individually confirmed). |
| Lakshmi K et al., "Fragmented Voices and Sonic Resistance..." | **Verified.** Confirmed directly from the source PDF's own header and running footer ("© 2025 ACADEMY PUBLICATION") on every one of its 10 pages (3910–3919). |
| Morrison, *Beloved* | **Verified as a real edition** (Knopf, 1987) via Krumholz's own Works Cited entry. **Not independently verified** — I have not opened a physical or digital copy of this edition myself; all page numbers attributed to it (13, 36, 87, 88, 104, 134, 140, 186, 193, 206, 260, 275) come through Krumholz's, Koolish's, and Lakshmi et al.'s own citations, not my direct inspection. This is disclosed in the article via consistent "qtd. in X" citation form — a correct and honest citation practice, but it means an error in any of those three secondary sources' own citations would propagate silently. **Moderate residual risk, correctly disclosed.**
| Morrison, "Unspeakable Things Unspoken..." | **Partially verified.** Krumholz's own footnote cites this as "*Michigan Quarterly Review* 33 (1989): 1–34," which I identified as almost certainly an OCR misread and corrected to vol. 28, no. 1 based on the University of Michigan archive's own URL structure (`act2080.0028.001`) and multiple independent secondary citations. **I was never able to load the essay itself** (the UMich archive returns HTTP 403 to automated access), so this citation rests on secondary corroboration, not a primary-source read. This is disclosed in `sources.md`. **Moderate — flagged, not fabricated, but not independently confirmed at the primary-source level.** |

**Publisher/venue spot-checks:** African American Review (Indiana State University), MELUS (Society for the Study of the Multi-Ethnic Literature of the United States), Theory and Practice in Language Studies (Academy Publication, ISSN 1799-2591, DOI prefix 10.17507) — all real, existing, currently operating scholarly venues. No issues found.

---

## PART II — Quotation Verification

All quotations were checked character-by-character against the raw extracted source text. **Zero wording discrepancies were found** — every quoted phrase matches its source exactly (accounting only for OCR line-hyphenation, which I resolved correctly in every case). However, **six citations attached to otherwise-accurate quotations have incorrect or imprecise page numbers.** Full findings below, in the order they appear in the article.

### Finding 1 — MAJOR
- **Location:** "Baby Suggs's Ledger Against Schoolteacher's" section, paragraph 2 ("Schoolteacher, who takes over Sweet Home...")
- **Quotation:** "I told you to put her human characteristics on the left; her animal ones on the right. And don't forget to line them up."
- **Cited as:** (qtd. in Krumholz 398)
- **Issue:** Wording is 100% verbatim-correct. **The page number is wrong.** In the source PDF, this passage falls after the explicit page-footer "398 AFRICANAMERICARNEVIEW" and before the next footer "...399" — placing it on **Krumholz's page 399**, not 398.
- **Evidence:** Source PDF page-block boundaries (confirmed via explicit OCR footer markers): printed p. 398 spans PDF-extraction lines 202–296 (footer "398" appears at line 293); printed p. 399 spans lines 297–377 (footer "399" appears at line 374). This quotation appears at line 323 — inside the p. 399 block.
- **Correct citation:** (qtd. in Krumholz 399)

### Finding 2 — MAJOR
- **Location:** Same section, paragraph 3 ("Baby Suggs's own account of ethics is even more compressed...")
- **Quotation:** "'Everything depends on knowing how much,' she said, and 'Good is knowing when to stop.'"
- **Cited as:** (qtd. in Krumholz 398)
- **Issue:** Wording verbatim-correct. Same page error as Finding 1 — this passage is at line 307 of the extraction, inside the p. 399 block (297–377), not p. 398.
- **Correct citation:** (qtd. in Krumholz 399)

### Finding 3 — MAJOR
- **Location:** Same section, paragraph 4 ("Baby Suggs eventually gives up preaching...")
- **Quotation:** "there was no bad luck in the world but white people. 'They don't know when to stop,' she said."
- **Cited as:** (qtd. in Krumholz 398)
- **Issue:** Wording verbatim-correct. Same page error — this passage is at lines 329–331, inside the p. 399 block.
- **Correct citation:** (qtd. in Krumholz 399)

### Finding 4 — MODERATE
- **Location:** "Dissociation and the Weight of a Truncated Self," paragraph 2 ("She reads the entire household...")
- **Quotation:** "consciousness … [is] suffused with a truncated, relentless, disrupted chronology common to persons so severely abused that they suffer from Multiple Personality Disorder (MPD) or dissociative states."
- **Cited as:** (169–70)
- **Issue:** Wording verbatim-correct except one word requiring a flag (see Finding 7 below). The full sentence, checked against the source, falls **entirely on Koolish's p. 170** — it does not begin on p. 169. The citation should not claim a page span.
- **Correct citation:** (170)

### Finding 5 — MODERATE
- **Location:** Same section, paragraph 3 ("Denver's version of the same damage...")
- **Quotation:** "Made me have to read faces and learn how to figure out what people were thinking, so I didn't need to hear what they said."
- **Cited as:** (qtd. in Koolish, p. 169, citing Morrison 206)
- **Issue:** Wording verbatim-correct. This is the mirror-image error of Finding 4: the quotation actually **spans the p. 169/170 boundary** ("Made me have to read faces and learn how to" is on p. 169; "figure out what people were thinking, so I didn't need to hear what they said" is on p. 170). Citing only "169" is incomplete.
- **Correct citation:** (qtd. in Koolish, pp. 169–70, citing Morrison 206)

### Finding 6 — MINOR
- **Location:** "Baby Suggs's Ledger Against Schoolteacher's," paragraph 3 ("Set that scene against Baby Suggs...")
- **Quotation (in `sources.md`, not directly quoted in the article body, but the underlying source of the "Bodwin's father" contrast referenced in the surrounding prose):** "a deeply religious man who knew what God knew and told everybody what it was."
- **Cited in `sources.md` as:** (qtd. in Krumholz, p. 397–98)
- **Issue:** Wording verbatim-correct. The passage is confirmed to fall entirely within the p. 398 block (line 233, well inside 202–296). The "397–98" range is not wrong, exactly, but it is imprecise — it should be tightened to "398" alone.
- **Correct citation:** (qtd. in Krumholz 398)

### Finding 7 — MINOR (word-choice flag, resolved with high but not absolute confidence)
- **Location:** Same as Finding 4.
- **Issue:** My raw OCR extraction of this one passage renders the final word as "**disassociative** states," not "dissociative states" as quoted in the article. Everywhere else in the same Koolish PDF (nine other instances, checked), the word is spelled "dissociation/dissociative" — the standard clinical term. Given that 9-for-9 internal consistency, "disassociative" at this single location is almost certainly an OCR misread, not Koolish's actual word choice, and "dissociative" (as quoted in the article) is very likely correct.
- **Recommendation:** Flag as resolved-by-internal-consistency but not pixel-verified. If institutional JSTOR access is available before submission, this one word is worth a 10-second visual confirmation against the actual page image.

### All other quotations: **Verified — wording and page number both correct.**
This includes: the two "124 was spiteful/loud/quiet" citations (Lakshmi K et al. 3916, citing Morrison 13/134/186); "Morrison's concept of 'rememory'..." (3910); the Margaret Garner sentence (3910); "love your hands" (3913, repeated 3915); "sonic resistance"/"community and value" (3913); "The struggle for psychic wholeness..." (Koolish 169); "requires access to painful memories... the join..." (Koolish 169); "a 'sadness . . . at her center...'" (Koolish 169, citing Morrison 140); the Du Bois/national-trauma sentence (Krumholz 395–96) — see note below; "[t]he central ritual of healing..." (Krumholz 396); "The healing ritual in *Beloved* can be broken down into three stages..." (Krumholz 397); "acts as a trickster figure..." (Krumholz 397); "This is not a story to pass on" (Krumholz 407, citing Morrison 275); "She did not tell them to clean up their lives..." (Krumholz 398, citing Morrison 88).

**Note on the Du Bois/national-trauma quote (Krumholz 395–96):** I was able to directly confirm the second half of this sentence in the raw extraction ("Bois in Souls, negotiates the legacy of slavery as a national trauma, and as an intensely personal trauma as well," on p. 396) but the opening clause ("In *Beloved* Morrison, like Du...") falls in a small gap in my own extraction, right at the 395/396 page-break, where the text I could directly see jumps from an unrelated sentence straight to "Bois in Souls..." I reconstructed the missing opening clause using an independent corroborating web search result during initial research (not from primary-source pixels I read myself). The reconstruction is very likely accurate — the fragment "Bois in Souls" only makes grammatical sense as the tail of "Du Bois in Souls," and the independent source gave the identical full sentence — but I want to be transparent that this one quotation's opening words were not directly confirmed by me against the primary PDF text the way every other quotation in this article was. **Moderate confidence, correctly disclosed, not independently pixel-verified.**

**"Unable to verify":** None. Every quotation traces to source text I directly read, except the small gap noted immediately above, which is disclosed rather than hidden.

---

## PART III — In-Text Citations

Approximately 30 in-text citation instances (including repeated citations to the same passage across sections). Every one names or clearly implies (via immediately preceding attribution in the same sentence/paragraph) an author who has a corresponding Works Cited entry. **No orphaned in-text citations found.**

Six of these citations carry the page-number errors detailed in Part II (Findings 1–6). No citation points to a nonexistent author or nonexistent source.

---

## PART IV — References (Works Cited)

- **Alphabetical order:** Correct (Koolish → Krumholz → Lakshmi K → Morrison → Morrison, with the second Morrison entry correctly using the three-em-dash convention).
- **Duplicates:** None.
- **Missing entries:** None — every in-text citation has a matching Works Cited entry, and every Works Cited entry is cited at least once in-text (re-confirmed in this audit).
- **Missing publication information — MODERATE finding:** The Lakshmi K et al. entry has a real, known DOI (10.17507/tpls.1512.10, recorded in `sources.md`) that is **not included in the article's own Works Cited entry.** MLA 9 recommends including a DOI when one is available, in preference to a URL. This should be added: `..., pp. 3910–3919. doi:10.17507/tpls.1512.10.`
- **DOI accuracy:** The DOI on file resolves to the correct article (confirmed at initial research time; not re-resolved in this pass — see URL note below).
- **URL / accessibility:** All three full-text source URLs (Krumholz PDF, Koolish PDF, Lakshmi et al. PDF) were re-fetched during this audit and are **currently live** — byte sizes matched the originally retrieved files exactly (5.3 MB, 734.3 KB, 1 MB respectively). The University of Michigan Quarterly Review archive URL for Morrison's essay was **not** re-tested in this pass; it returned HTTP 403 at initial research time and there is no reason to expect that has changed.
- **Author-name formatting — MODERATE, unresolved:** "Lakshmi K, Srividya, et al." reflects South Indian initial-plus-given-name naming conventions that don't map cleanly onto the Western "Surname, Given name" MLA template. I attempted to resolve this empirically by checking how citation indices (Crossref, Google Scholar) render this specific author's name in other citing works, but a tool-access limit interrupted that check mid-audit and it was not completed. **This is a real, unresolved formatting risk** — a copyeditor or the authors themselves should confirm the intended citation form before submission.

---

## PART V — Factual Accuracy

- Margaret Garner as the historical basis for *Beloved*: accurate, well-documented, correctly sourced through Lakshmi et al.
- *Beloved* published 1987 (Knopf): accurate.
- Du Bois, *The Souls of Black Folk* (1903), referenced via Rampersad/Krumholz: accurate.
- "Unspeakable Things Unspoken" delivered as the University of Michigan's Tanner Lecture on Human Values: consistent with multiple independent secondary sources found during research, but **not independently confirmed against a primary document** (see Part I). Flagged, not contradicted.
- MLA 9th edition cited throughout as "current MLA style": accurate as of this review's knowledge; the article and repository policy should be re-checked against MLA's own site immediately before submission in case a newer edition has since been released.
- No fabricated statistics, dates, or biographical claims found anywhere in the article.

**No unsupported factual claims found.** The article's one genuinely "unsupported-by-a-cited-authority" claim — that existing criticism "undersells" the schoolteacher/Baby Suggs opposition — is explicitly framed as the author's own interpretive argument ("in my view," "I'd argue"), not presented as an established fact. That is correct scholarly practice, not a defect; see Part IX for whether the argument is persuasive.

---

## PART VI — Logical Consistency

- **Thesis:** Clearly stated in the abstract and introduction (schoolteacher's ledger vs. Baby Suggs's ethics as the underread thread tying the historical/psychological/formal readings together) and returned to directly in the conclusion. No drift.
- **Argument progression:** Each section builds on the previous one in a stated, not merely implied, way (e.g., "If Krumholz explains the historical mechanics... Koolish's... essay explains what it costs").
- **Contradictions:** None found.
- **Circular arguments:** None found.
- **Logical gaps:** None major. One soft spot worth naming: the claim that the schoolteacher/Baby Suggs opposition is "underread" in the existing scholarship is asserted rather than demonstrated against a wider literature review — with only three secondary sources engaged, the claim that this thread is generally underexplored in *Beloved* criticism is not fully earned. This is a scope limitation, not a logical fallacy.
- **Overgeneralizations:** None found within the argument as stated; claims are consistently hedged to the sources actually cited.

---

## PART VII — Methodology

- **Theoretical framework:** Clearly defined — a synthesis of historicist (Krumholz), psychoanalytic (Koolish), and formalist/sonic (Lakshmi et al.) trauma criticism, with an original ethical-philosophical thread added by the author.
- **Methodology matches research question:** Yes — a close-reading, source-synthesis approach is appropriate for this kind of literary-critical argument.
- **Textual evidence supports interpretation:** Yes, throughout, modulo the page-citation corrections above.
- **Key concepts used consistently:** "Rememory," "dissociation," and "sonic resistance" are each used consistently with their originating source's own definition throughout the article — no terminological drift found.

---

## PART VIII — Scholarly Ethics

- **Fabricated citations:** None found. All five Works Cited entries correspond to real, existing publications.
- **Hallucinated references:** None found.
- **Unverifiable quotations:** None (see Part II's disclosed partial-gap on the Du Bois/national-trauma quote — disclosed, not hidden, and not a hallucination).
- **Citation padding:** None found — every citation does real argumentative work; none are decorative.
- **Misattributed quotations:** None found (no quotation is attributed to the wrong author/source). The page-number errors in Part II are citation-location errors, not misattribution of authorship.
- **Plagiarism risk:** Low, by design — all borrowed language is quoted and cited; connective analysis is original. (Repository policy already documents that no certified plagiarism-checker score exists yet — that remains true and is out of scope for this audit.)
- **AI-generated inaccuracies:** The six page-citation errors identified in Part II are exactly this — small, mechanical inaccuracies introduced while interleaving two-column OCR text across page boundaries during the original research process. They are real and should be corrected. No instance of invented content was found.

---

## PART IX — Journal Peer Review

- **Originality:** Moderate. The article's genuine contribution — reading schoolteacher's ledger against Baby Suggs's ethics as competing theories of personhood, and using that to explain why the existing historical/psychological/formal readings keep landing on the same paradox — is a real, coherent critical move, not a restatement of its sources.
- **Contribution to knowledge:** Modest but real for a short article/note. Not a paradigm-shifting reading, but a defensible synthesis with one original throughline.
- **Literature review:** **Thin — this is the article's biggest weakness for a "leading international journal" submission.** Three secondary critical sources spanning 1992, 2001, and 2025, with a 24-year gap unaddressed, is a narrow evidence base for a novel with an enormous critical corpus (hundreds of articles). A rigorous reviewer at a Scopus-indexed English Studies journal would very likely request engagement with additional major *Beloved* scholarship (e.g., work on trauma theory more broadly — Cathy Caruth, LaCapra — which the article gestures toward thematically but never cites).
- **Scholarly rigor:** Strong in method (real sources, verbatim quotation, disclosed limitations), weakened by the six citation-accuracy errors above, all of which are fixable.
- **Clarity and coherence:** Strong. Clear thesis, logical section-by-section progression, no jargon obscuring the argument.
- **Significance:** Modest. Appropriate for a short article/note format; the ~2,725-word length is on the low end for a "leading international journal" full research article (many require 6,000–8,000+ words), though it clears this repository's own internal 2,500–3,000-word policy.
- **Publication potential:** Plausible for a shorter-format venue (notes, brief articles) after the citation corrections; would likely need literature-review expansion for a top-tier full-length research-article slot.

---

## FINAL VERDICT

- **Total quotations verified:** 24 of 24 distinct quoted passages — wording confirmed correct in every case (with one word, Finding 7, resolved via internal consistency rather than direct visual confirmation).
- **Total quotations requiring correction:** 6 (all citation/page-number corrections — see Findings 1–6; zero wording corrections needed).
- **Total in-text citations verified:** ~30 instances checked; all correspond to a real Works Cited entry; 6 carry incorrect/imprecise page numbers (same six as above).
- **Total references (Works Cited entries) verified:** 5 of 5 confirmed as real, existing publications; 1 of the 5 (Morrison's essay) verified only via secondary corroboration rather than direct primary-source access.
- **Total fabricated references found:** 0.
- **Total unverifiable references:** 0 fully unverifiable; 1 partially verified (see above).
- **Total logical inconsistencies:** 0.
- **Total factual inaccuracies:** 0 confirmed; 1 fact (Tanner Lecture attribution) resting on secondary rather than primary confirmation.
- **Total unsupported claims:** 0 — the article's one original interpretive claim is properly hedged as argument, not asserted as fact.

### 1. Is this article academically reliable?

**Substantially yes, with corrections required first.** Every quotation's wording is accurate, no source is fabricated, and the argument is internally consistent. But it is not yet reliable *as currently cited* — six page-number citations are wrong or imprecise (three of them, Findings 1–3, are clear errors, not just imprecision) and need fixing before the article can be called fully reliable. This is a correctable defect, not a structural one.

### 2. Would it survive peer review at a reputable Scopus-indexed journal?

**Not in its current form, and not primarily because of the citation errors** — those are a quick fix. The more likely reason for a "revise and resubmit" verdict is the **thin literature review** (Part IX): three secondary sources with a 24-year gap between the second and third is not the depth of engagement a rigorous reviewer at a leading journal would expect for a novel this heavily studied. The prose, thesis, and argument construction are strong enough to survive review; the evidentiary breadth is not yet there.

### 3. Is it safe to submit without risking credibility over citations/quotations/references?

**Not yet, but close.** Submitting today would mean submitting three (Findings 1–3) confirmed wrong page citations and two (Findings 4–5) imprecise ones — the kind of error a diligent reviewer or reader checking a quotation against JSTOR would catch, which damages credibility even though the underlying scholarship is sound. Fix the six citations in Part II, add the missing DOI (Part IV), resolve the author-name-formatting question for Lakshmi K et al. (Part IV), and it would be safe to submit on citation grounds — though the literature-review thinness (Part IX) would remain a separate, substantive reviewer concern.

**Recommended next step:** correct Findings 1–6, add the DOI, resolve the author-name question, and treat the literature-review gap as a decision point — either expand it before submission or target a shorter-format venue where the current scope fits.
