---
title: "Meltdown & Spectre"
---

To mitigate the Meltdown and Spectre vulnerabilities, OpenBSD holds separate
page tables for the kernel and userland.

The next generation of Meltdown was mitigated in this way. OpenBSD was no longer
affected as memory could not be inappropriately accessed.

Egual, OpenBSD has disabled Intel’s hyper-threading technology, citing security
concerns – seemingly, Spectre-style concerns, with “a new hw.smt sysctl”.

Details:

* [Meltdown fix committed by guenther@](https://undeadly.org/cgi?action=article;sid=20180221201856)
* [CVS: cvs.openbsd.org: src](https://marc.info/?l=openbsd-cvs&m=151924107018358)
* [CVS: cvs.openbsd.org: src](https://www.mail-archive.com/source-changes@openbsd.org/msg99141.html)
