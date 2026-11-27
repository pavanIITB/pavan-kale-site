---
title: A test needs a clear finish line
description: Writing a pass or fail condition before you change a prototype.
date: 2026-11-26
sample: true
cover:
  image: /assets/journey/coding.webp
  alt: "A laptop with code open on a desk"
  caption: "A workstation with code open (illustrative photo)"
  width: 640
  height: 420
---

A good test starts with a sentence someone else can run. “The reminder works” leaves a lot of room for interpretation. “The light is visible on a desk in daylight from where someone is sitting” is a place to start. Add enough detail about distance, placement, and lighting that another person can repeat the check.

Then ask which assumption the test should challenge. If you want to know whether the cue is noticeable, keep the sound off and resist the urge to improve the enclosure at the same time. Isolating one question makes a surprising result easier to understand. It also shows where a second test might be needed to cover an environment the first one missed.

Write the result next to the conditions. Include what failed and any reason the result might have been misleading. The next person who runs the test should be able to tell what changed without reading through a week of messages.

## Record what a passing test proves

A pass is useful when it comes with a description of the conditions. If someone can see a light while sitting at one desk, record the position of the bottle and the kind of light in the room. Workspaces that look similar can produce different results, especially when the next person is looking from a different angle.

It helps to include a negative result on purpose once in a while. Put the cue somewhere you expect it to be hard to see and confirm that your test notices the difference. It gives you more confidence that the test is measuring what you thought it was measuring before you rely on it for a design decision.
