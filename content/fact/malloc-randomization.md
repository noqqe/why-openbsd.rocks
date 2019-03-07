---
title: "Memory allocation randomization"
---

`malloc` allocates areas of memory that programs have requested using system
calls.  It randomizes memory allocations over the entire address space.

This makes attacks harder because each run has a different memory layout. It traps
bugs (allocations are surrounded by unmapped memory) and allows `realloc` to
grow an allocation without copying in most cases.

Details:

* [malloc(3) - OpenBSD manual pages](http://man.openbsd.org/malloc)
* [Otto Moerbeck about malloc(3) on Twitter](https://twitter.com/ottom6k/status/1062608293477212161?s=21)
