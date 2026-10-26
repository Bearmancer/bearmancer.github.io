role: discovery
step: verify.c1.r1.discover
fresh subagent: no
reply file: C:\Users\Lance\Dev\bearmancer.github.io\work\_drafts\everest-and-moon-distance-20261026T091959Z\_ledger\everest-and-moon-distance\runs\20261026T091959Z\agent\verify.c1.r1.discover-00b108e429.reply.md

---

Role discovery. One round, one claim. You are given the claim, the round number, the paradigm to use, the query variant (supporting, opposing, primary, other-language) and the surfaces of that paradigm with their routes (MCP tool, then vendor CLI, then POST script). Use only those surfaces. Rewrite the query for the variant; other-language means search in the source language of the topic. Report every attempt, any route, in `attempts` (format in the payload; the driver logs them).
Return raw findings, no judgement. Save each page's text to a file under the given inbox directory and return its path in `file` (or inline `text` for short pages). List sources that could not be read, with the reason. Report vendor errors you hit with status and code.

```yaml
sources:
  - {
      url: "...",
      title: "...",
      publisher: "...",
      kind: established-outlet,
      language: en,
      file: "<inbox>/1.txt",
    }
failed:
  - { url: "...", reason: "403" }
errors:
  - { surface: "tavily.search", status: 402, code: "...", url: "..." }
attempts:
  - {
      surface: "tavily.search",
      route: mcp,
      url: "...",
      status: ok,
      query_variant: supporting,
    }
```

`kind` is one of the source kinds in the payload.

---

claim: c1
claim text: Mount Everest is the highest point above global mean sea level.
round: 1
query_variant: supporting
paradigm: keyword
inbox: C:\Users\Lance\Dev\bearmancer.github.io\work\everest-and-moon-distance\inbox
source kinds: rulebook, official-data, original-document, peer-reviewed, designer-post, publisher-post, direct-record, established-outlet, reference-work, quality-journalism, forum, blog, social, unknown
domain: general

# General: source order

Default for non-music research. Order: primaries -> records -> press -> scholarship -> wikis; a distributor-run wiki is a second source beside a primary.

- Microsoft / Azure / .NET: Microsoft Learn MCP before web search.
- Library or SDK behaviour: Context7 or cloned source, never blog posts alone.
- Papers: `firecrawl_research_*` or Exa, then publisher page for citation URL.

# General: exclusions

none

Domain source order replaces the default preference order; domain bans always apply.
surfaces of this paradigm (use only these):
- tavily.search (cost low) mcp: tavily_search; cli: tvly search
- firecrawl.search (cost low) mcp: firecrawl_search; cli: firecrawl search
- scrapegraph.search (cost med) mcp: search; cli: just-scrape search
- microsoft-learn.docs (cost low) mcp: microsoft_docs_search, microsoft_docs_fetch
- wikipedia.search (cost low) http: GET wikipedia.org/w/api.php
report every attempt, any route, in `attempts` (the driver logs them): {surface: <surface id>, route: <mcp|cli|post|http>, url: <url>, status: <ok|error|blocked|empty>, error_class: <bad_key|out_of_credit|blocked|rate_limit|unknown, only with error or blocked>, query_variant: <supporting|opposing|primary|other-language>}

