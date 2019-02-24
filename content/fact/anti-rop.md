---
title: "Anti-ROP"
---

The order of symbols in libc.so are randomized at boot time to prevent
"Return oriented programming".

> An attacker gains control of the call stack to hijack program control flow
> and then executes carefully chosen machine instruction sequences that are
> already present in the machine's memory.

With randomized symbols, this is not an attack vector anymore.

Details:

* [‘anti-ROP mechanism in libc’ - MARC](https://marc.info/?l=openbsd-tech&m=146159002802803&w=2)
* [OpenBSD 5.9 Changelog](https://www.openbsd.org/plus59.html)
* [Return-oriented programming - Wikipedia](https://en.wikipedia.org/wiki/Return-oriented_programming)
