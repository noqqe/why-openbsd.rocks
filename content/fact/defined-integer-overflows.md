---
aliases:
- /fact/clang-fwrapv/

title: "Defined integer overflows"
---

Clang, the default compiler on most architectures, have `-fwrapv` flag enabled by default.
GCC also does not include `-fstrict-overflow` into `-O2` optimization option.
This tells the compiler to treat signed integer overflows as defined,
preventing optimizations which remove security critical overflow checks.
This is another example of [sane defaults](/fact/sane-defaults/).

Details:

* [clang-local(1) - OpenBSD manual pages](https://man.openbsd.org/clang-local.1)
* [clang(1) - OpenBSD manual pages](https://man.openbsd.org/clang.1)
* [gcc-local(1) - OpenBSD manual pages](https://man.openbsd.org/gcc-local.1)
* [gcc(1) - OpenBSD manual pages](https://man.openbsd.org/gcc.1)

