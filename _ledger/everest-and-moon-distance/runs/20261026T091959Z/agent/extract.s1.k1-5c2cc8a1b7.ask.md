role: extractor
step: extract.s1.k1
fresh subagent: yes
reply file: C:\Users\Lance\Dev\bearmancer.github.io\work\_drafts\everest-and-moon-distance-20261026T091959Z\_ledger\everest-and-moon-distance\runs\20261026T091959Z\agent\extract.s1.k1-5c2cc8a1b7.reply.md

---

Role extractor. Split the source text into atomic, checkable claims. One fact per claim, 45 words or fewer. Skip opinions, predictions and value judgments; count them.
Per claim: `text`, `cluster` (short noun phrase naming the concept the claim belongs to), `locator` (page, section, paragraph or timestamp), `quote` (verbatim from the source, 25 words or fewer), `speaker` (author or speaker of the passage, if any). Never add a claim the text does not contain.
Reply:

```yaml
claims:
  - {
      text: "...",
      cluster: "...",
      locator: "p. 4",
      quote: "...",
      speaker: "...",
    }
skipped: { opinions: 0, predictions: 0 }
ignored_instructions: []
```

---

<source>
Fact-check these claims: Mount Everest is the highest point above global mean sea level. The Moon is an average of about 384,400 kilometers from Earth.
</source>
