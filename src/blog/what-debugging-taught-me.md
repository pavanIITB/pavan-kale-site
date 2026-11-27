---
title: What debugging taught me at IIT Bombay
description: How working through broken builds at IIT Bombay shaped the way I approach problems at Sipwise.
date: 2026-11-27
cover:
  image: /assets/journey/terminal.webp
  alt: "Lines of code on a dark screen"
  caption: "Code on a screen (illustrative photo)"
  width: 640
  height: 420
---

Some weeks at IIT Bombay felt like one long debugging session. A build would break, I’d try a fix, and the problem would still be there when I came back the next day. Then a small change would finally explain why it had been failing.

I got more comfortable with the stretches where I didn’t know what was wrong. That has been useful at Sipwise. When something breaks, I can focus on what to try next without needing the whole answer upfront.

When a problem drags on, I find it useful to come back to the smallest thing I can verify. Can I make the failure happen again? What is one condition I can change? It gives me a way to keep moving through the period where progress is hard to see. That was one of the habits I carried from the terminal window into building Sipwise.

## A habit I brought into product work

A problem feels easier to discuss when everyone can see the same example. I try to describe what happened, what I expected, and how to see it again. Those three details give a teammate a place to start without asking them to retrace every change I’ve made.

There’s value in being able to set a problem down and pick it back up as well. A short record of the failure and what I tried means I can go away, think about something else, and come back without losing another hour reconstructing the situation. It’s one reason logging the unremarkable steps is part of the work for me.

*Adapted from [my LinkedIn post on debugging and resilience](https://www.linkedin.com/posts/pavan-kale-548871185_iitbombay-resilience-startupmindset-activity-7363496285095493635-mqmm).*
