---
title: "Multiple platforms"
---

Maintaining code for multiple platform prevents coding with _assumptions_.
Kernel and `libc` code needs to be designed platform independent. This really
improves operating systems codebase.

Besides that, it also means you can run OpenBSD on quite a few architectures
(partially very old ones like VAX, Loongson, Apple PowerPC).

Details:

* [OpenBSD.org Platforms](https://www.openbsd.org/plat.html)
* [Secure Portability (djm, 2005)](https://www.openbsd.org/papers/portability.pdf)
