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

## Repository structure

```
articles/
  <topic-slug>/
    article.md        # the article itself (MLA-formatted Markdown)
    sources.md         # working bibliography / research notes for this article
  _template/
    ARTICLE_TEMPLATE.md
    SOURCES_TEMPLATE.md
```

- One subfolder per topic under `articles/`, named with a short kebab-case slug (e.g. `articles/eco-criticism-hardy/`, `articles/politeness-theory-pragmatics/`).
- Each topic folder holds the article draft plus a `sources.md` tracking the real academic sources consulted and their key claims/quotations, so citations can always be traced back and audited.
- `articles/_template/` contains blank templates to copy when starting a new topic.

## Workflow for a new article

1. Agree on a specific topic / research question / thesis.
2. Research using real academic sources (journal databases, publisher archives, etc.) — no source is cited until it has actually been found and read.
3. Log each source in `sources.md` with its exact bibliographic details (copied verbatim from the source/publisher record) and the exact quotations/claims it supports, as research proceeds.
4. Draft the article in `article.md`, using the template in `articles/_template/ARTICLE_TEMPLATE.md`, with verbatim in-text MLA citations tied to entries in `sources.md`.
5. Compile the Works Cited list from the verbatim bibliographic details in `sources.md`, formatted per current MLA style — cross-check every entry against `sources.md` field by field.
6. Review for the integrity policy above before committing.

## Status

- [`articles/trauma-memory-beloved/`](articles/trauma-memory-beloved/) — "Trauma, Memory, and the Unspeakable in Toni Morrison's *Beloved*," drawing on Krumholz (*African American Review* 1992), Koolish (*MELUS* 2001), and Lakshmi K et al. (*Theory and Practice in Language Studies* 2025). Author name is a placeholder — fill in before submission.

Further topics will be added one at a time as subfolders under `articles/`.
