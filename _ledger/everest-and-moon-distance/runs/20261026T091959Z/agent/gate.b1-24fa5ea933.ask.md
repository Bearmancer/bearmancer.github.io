role: verifier
step: gate.b1
fresh subagent: yes
reply file: C:\Users\Lance\Dev\bearmancer.github.io\work\_drafts\everest-and-moon-distance-20261026T091959Z\_ledger\everest-and-moon-distance\runs\20261026T091959Z\agent\gate.b1-24fa5ea933.reply.md

---

Role verifier. Input: ledger rows (claim, status, evidence with publisher, tier, locator, quote). Re-check every claim, all statuses. Does the quote at the locator support or contradict the claim as worded? Does the status follow the truth bar: one T1 source, or two independent T1/T2 sources, no credible contradiction; credible contradiction means interpretive; not-found means no qualifying evidence either way? Untrue needs contradicting evidence that meets the bar and no credible support.
Reply per claim: `agree` or `disagree`, plus one line.

```yaml
verdicts:
  - { claim: c1, verdict: agree, note: "quote states the 3-card limit" }
  - {
      claim: c2,
      verdict: disagree,
      note: "quote is about 2019, claim says 2022",
    }
```
Reader profile: The reader is in India. Default scope is global, never US or Western by default. For a region-varying fact give the global picture and include India alongside; India is one included lens, not the frame (TB statistics: global burden and India figures, not US data). Give prices only when the topic already involves cost: in INR, with the original currency beside it when the source differs; no pricing section otherwise. No other India rules: no spelling, unit or date rules, no forced Indian examples. Tone: analyst-level, academic but accessible; maximize citations and maximize learning and readability.

---

- c1 [true] Mount Everest is the highest point above global mean sea level.
    evidence s2 (NOAA National Ocean Service, T1, https://oceanservice.noaa.gov/facts/highestpoint.html) supports at para 66 (line 66): "Everest is indeed the highest point above global mean sea level—the average level for the ocean surface from which elevations are measured."
    evidence s2 (NOAA National Ocean Service, T1, https://oceanservice.noaa.gov/facts/highestpoint.html) supports at Infographic Transcript (line 72): "Mount Everest's peak is the highest altitude above mean sea level at 29,029 feet [8,848 meters]."
- c2 [true] The Moon is an average of about 384,400 kilometers from Earth.
    evidence s3 (NASA, T1, https://spaceplace.nasa.gov/moon-distance/en/) supports at section 'You might be surprised', paragraph 2: "The Moon is an average of 238,855 miles (384,400 km) away."

