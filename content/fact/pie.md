---
title: "PIE"
---

A PIE binary and all of its dependencies are loaded into random locations
within virtual memory every time the application is executed.

This heavy use of randomization makes it hard for an attacker to predict the
binary's behaviour.

Details:

* [Position Independent Code](https://en.wikipedia.org/wiki/Position-independent_code)
* [AsiaBSDCon2015 PIE Slides](https://www.openbsd.org/papers/asiabsdcon2015-pie-slides.pdf)
* [OpenBSD 5.8 Changelog](https://www.openbsd.org/plus58.html)
