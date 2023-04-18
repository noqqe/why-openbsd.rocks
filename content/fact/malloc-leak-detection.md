---
title: "Malloc leak detection"
---

Since 7.4 -current (04/17/2023), malloc leak detection. It's a tool to 
detect unsafe behaviors in the OpenBSD code for Team developers. It needs
to have debug symbols. 

This tracks memory allocations to free them properly after use. 

Details:
* [malloc(3) - OpenBSD manual pages](http://man.openbsd.org/malloc)
* [Otto Moerbeek: about leak detection](https://www.undeadly.org/cgi?action=article;sid=20230417074903)
