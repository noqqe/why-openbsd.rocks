---
title: "Kernel & Userland"
---

Kernel and userland in OpenBSD are developed together. The same persons
that are introducing new features to the kernel, also control the userland.

This way, new features can be implemented very fast into all of parts of the
OS. See [pledge](/fact/pledge.md) for example. As Linux Kernel and GNU
Coreutils are developed independently, it would not be possible to introduce
`pledge` to all the tools that easy.
