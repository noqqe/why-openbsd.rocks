---
title: "Meltdown & Spectre"
---

For Meltdown and Spectre mitigation, OpenBSD separates page tables for kernel
and userland.

With this technique it was possible to actively mitigate the next generation
of Meltdown and OpenBSD was not affected, as memory cannot be accessed.

Details:

* [Meltdown fix committed by guenther@](https://undeadly.org/cgi?action=article;sid=20180221201856)
* [CVS: cvs.openbsd.org: src](https://marc.info/?l=openbsd-cvs&m=151924107018358)

