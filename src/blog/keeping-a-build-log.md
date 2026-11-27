---
title: What belongs in a build log
description: A lightweight record of experiments, settings, and results.
date: 2026-11-26
sample: true
cover:
  image: /assets/journey/notebook.webp
  alt: "An open notebook with a pen"
  caption: "A notebook ready for observations (illustrative photo)"
  width: 640
  height: 420
---

Write the log as you go. Start with the version, the change, and what you expected to see. Add the measurement or observation and the next step. If you can fit that in one paragraph, you’re much more likely to do it for every version.

Details become useful when they explain something. A photo of the setup can capture the position of a sensor. A note about the supply voltage or the browser version can distinguish an apparent regression from a change in the test environment. Include enough context that you could check the result again in a month.

Give failed attempts the same treatment as successful ones. They can save somebody an afternoon when the problem comes back. In a team, a shared log also makes it easier to spot two people testing the same idea with different assumptions.

## Write for the next person who has the problem

Imagine someone inherits the build three months later. They’re trying to decide whether a symptom is new. A useful log gives them a place to start. They can look up when the behavior first appeared, see the conditions of the test, and decide what to reproduce before replacing parts.

Put the results somewhere close to the work. If the experiment changed a drawing, link the entry from that revision. If a physical prototype is still around, put its label in the log. A short record that can be found next to the thing it describes is much more likely to survive a busy week than a long document that nobody knows where to look for.
