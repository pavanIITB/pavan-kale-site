---
title: What an eight-by-eight Snake game taught me
description: A small Arduino makerthon project about constraints, readable controls, and finishing a working demo.
date: 2026-11-27
cover:
  image: /assets/portfolio/breadboard.jpg
  alt: "An electronics prototype assembled on a breadboard"
  caption: "Another electronics build from my student portfolio"
  width: 1200
  height: 900
---

One of my small student projects was a version of Snake on an eight-by-eight LED matrix. Four switches handled the directions, and a separate LCD displayed the score. The entire game world had sixty-four pixels. I built it for an Arduino makerthon and placed first.

## Every pixel had a job

A small display makes it obvious when a design asks too much of the person using it. There wasn’t room for a long instruction screen or a lot of visual detail. Someone had to be able to see where the snake was, where it could go, and whether the switch they had just pressed had done something. The switches and the display were most of the experience.

Putting the score on a separate screen was also a useful division of work. The main display could keep showing the play area while the LCD handled information about progress. On a bigger project that decision might have disappeared into a discussion about all the things the interface could display. With this hardware, the limits made it easier to decide.

## A useful kind of small

I like returning to this project because of how modest it was. A working version gave other people something they could try immediately. It gave me a chance to see which parts made sense without my explaining how to play or how the electronics were connected. That kind of feedback became available as soon as the basic game worked.

I still think about that scale when a project starts to get complicated. There’s often a version small enough for someone to try today. What you learn from it can make the next version much clearer.
