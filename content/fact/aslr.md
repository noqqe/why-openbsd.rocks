---
title: "ASLR"
---

Address Space Layout Randomisation places code, data and stack in randomly
selected location. This results in every execution of a binary results in
a different layout.

This makes it hard for an attacker to predict memory addresses and process
behaviour.

Details:

* [OpenBSD 3.4 Changelog](https://www.openbsd.org/plus34.html)
* [Address space layout randomization - Wikipedia](https://en.wikipedia.org/wiki/Address_space_layout_randomization)
