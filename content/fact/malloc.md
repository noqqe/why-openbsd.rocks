---
title: "Memory allocation"
---

## Randomization

`malloc` allocates areas of memory that programs have requested using system
calls.  It randomizes memory allocations over the entire address space.

This makes attacks harder because each run has a different memory layout. It traps
bugs (allocations are surrounded by unmapped memory) and allows `realloc` to
grow an allocation without copying in most cases.

## Leak detection

Since 7.4 -current (04/17/2023), malloc leak detection. It's a tool to 
detect unsafe behaviors in the OpenBSD code for Team developers. It needs
to have debug symbols. 

This tracks memory allocations to free them properly after use. 

---

Details:

* [malloc(3) - OpenBSD manual pages](http://man.openbsd.org/malloc)
* [Otto Moerbeek: about malloc(3) on Twitter](https://twitter.com/ottom6k/status/1062608293477212161?s=21)
* [Otto Moerbeek: about leak detection](https://www.undeadly.org/cgi?action=article;sid=20230417074903)
