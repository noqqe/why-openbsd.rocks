---
title: "Retpoline"
---

`Retpoline` prevents speculative execution (Spectre) by isolating branches
using an infinite loop that is never executed to prevent the CPU from
speculating on the target of an indirect jump.

Details:

* [Retpoline: a software construct for preventing branch-target-injection - Google Help](https://support.google.com/faqs/answer/7625886)
* [OpenBSD 6.4](https://www.openbsd.org/64.html)
* [Spectre - Wikipedia](https://en.wikipedia.org/wiki/Spectre_(security_vulnerability))
