---
title: "clang -fwrapv"
---

Clang, the default compiler on most architectures,
have `-fwrapv` flag enabled by default.
This option tells the compiler to treat signed integer overflows as defined,
preventing optimizations which remove security critical overflow checks.
This is another example of [sane defaults](/fact/sane-defaults/).

Details:

* [clang-local(1) - OpenBSD manual pages](https://man.openbsd.org/clang-local.1)
* [clang(1) - OpenBSD manual pages](https://man.openbsd.org/clang.1)

