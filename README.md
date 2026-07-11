# Journal Articles — English Literature & Language

A working repository of original academic articles on English Literature, English Language, and allied subjects (linguistics, literary theory, applied linguistics, comparative literature, etc.), written for journal submission in current **MLA style (9th edition)**.

## Integrity policy

Every article in this repository must follow these non-negotiable rules:

1. **No fabricated data, statistics, quotations, or citations.** Every factual claim, quotation, or statistic must be traceable to a real, verifiable academic source (peer-reviewed journal article, scholarly monograph, or other reputable academic publication).
2. **In-text citations must be verbatim.** Quoted material is reproduced exactly as it appears in the source, with page/paragraph numbers cited in MLA parenthetical format (Author page).
3. **Works Cited lists are exhaustive and accurate.** Every source cited in-text appears in the Works Cited list, formatted per current MLA style, and vice versa.
4. **No invented sources.** If a claim cannot be backed by a real, checkable source, it is either dropped, rephrased as the author's own analysis (clearly not presented as fact), or flagged as needing further research — never filled in with a plausible-sounding fake citation.
5. **Uncertainty is stated, not hidden.** Where scholarly consensus is unsettled or evidence is thin, the article says so rather than smoothing it over.

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
3. Log sources and the exact quotations/claims they support in `sources.md` as research proceeds.
4. Draft the article in `article.md`, using the template in `articles/_template/ARTICLE_TEMPLATE.md`, with verbatim in-text MLA citations tied to entries in `sources.md`.
5. Compile the Works Cited list from `sources.md`, formatted per current MLA style.
6. Review for the integrity policy above before committing.

## Status

Scaffolding only — no articles have been written yet. Topics will be added one at a time as subfolders under `articles/`.
