---
title: "Memory allocation randomization"
---

malloc randomizes allocations all over the address space. It makes attacks
harder because each run has a different memory layout, catches bugs
(allocations are surrounded by unmapped memory) and allows realloc to grow an
allocation without copying in most cases.

Details:

* [malloc(3) - OpenBSD manual pages](http://man.openbsd.org/malloc)
* [Otto Moerbeck about malloc(3) on Twitter](https://twitter.com/ottom6k/status/1062608293477212161?s=21)
