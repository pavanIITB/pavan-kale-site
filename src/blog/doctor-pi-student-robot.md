---
title: Doctor Pi and the first robot I tried to finish
description: A student plant-inspection prototype and the work of making the camera, arm, and base operate together.
date: 2026-11-27
cover:
  image: /assets/portfolio/doctor-pi.jpg
  alt: "A student working on the Doctor Pi robot on a table"
  caption: "Doctor Pi during the student project"
  width: 900
  height: 900
---

Doctor Pi was a first-year project at IIT Bombay. We wanted a small robot to carry a camera past plant leaves and flag visible yellow spots for someone to inspect. A camera can show suspicious markings. A human still has to decide what they mean. That division was part of what made it a useful student problem. We could build a machine capable of making an observation and then see for ourselves whether the observation was clear enough to use.

## The arm set the pace

We started with a mobile base and a multi-joint arm. The camera was supposed to move around a plant while the base gave the arm a place to work from. What looked manageable in the drawings changed once the parts were assembled. Moving a motor closer to the base helped with the weight on one of the joints. The arm ended up with its own set of compromises before we could spend serious time on the images.

We tried a few approaches to recognizing spots and collected photos of leaves to get examples. On paper the image work and the arm work could be done independently. During a test, they affected each other. If the arm stopped in the wrong place, the algorithm got a frame it had never been designed to handle. If the plants were lit differently, a reliable motion could still give us a poor result.

## What I’d change

I’d start with a fixed camera and one clear inspection task. I’d test the image quality and the usefulness of the result before taking on the arm. If the camera needs to move, I’d add just enough motion to find out what position actually helps.

We received the Best ITSP Award for the project. I’m glad we built the whole prototype, even though it made me think differently about scope. The next time I wanted to build something complicated, I had a better sense of what a smaller first version could teach me.
