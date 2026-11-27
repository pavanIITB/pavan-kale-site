---
title: Designing an indoor drone for Flipkart GRiD
description: What a student warehouse-navigation project taught me about simulation and system integration.
date: 2026-11-27
cover:
  image: /assets/portfolio/indoor-drone.jpg
  alt: "A design rendering of the underside of a drone"
  caption: "CAD rendering from the Flipkart GRiD project"
  width: 1192
  height: 864
---

Our Flipkart GRiD 2.0 entry was an autonomous indoor drone concept for a warehouse-like course. An outdoor project can often start with a position estimate from satellite navigation. Inside, the machine needs other ways to work out what is around it and where it is. That makes a straightforward drawing of a route turn into a series of questions about what the aircraft can actually observe.

## Making the simulation answer something

We used simulation to look at the system in pieces. One question was whether we could recognize the opening in front of the aircraft at all. Another was whether the aircraft’s estimate of its position stayed close enough to what the simulator knew. Those questions gave us a few intermediate results to look at before judging the whole run.

The project had a mechanical side as well. The weight of the payload and the shape of the structure mattered to the design. The work on the frame and the work on software could be explained separately, but they had to meet in the same machine. A change in where a camera was mounted could change what the software saw. An update to the frame could change what the team was willing to assume about the aircraft during a test.

## What the national final meant to me

We qualified for the national final. Getting there took a group that could compare evidence across different kinds of work. There was always more to test. If a simulated course looked convincing, the next question was how the result would hold up when the room, the lighting, or the starting position changed.

That’s the part I still take from the project. A simulation gets more valuable when you know which uncertainties it removes and which ones you’ll carry into the next test.
