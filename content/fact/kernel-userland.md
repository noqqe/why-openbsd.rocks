---
title: "Kernel & Userland"
---

The kernel and userland in OpenBSD are developed together. The same
people who introduce new features to the kernel control the userland.

This way, new features can be implemented very fast into all of parts of the
OS. See [pledge](/fact/pledge.md), for example. As Linux Kernel and GNU Core
Utilities are developed independently, it would not be possible to introduce
`pledge` to all the tools that easy.
