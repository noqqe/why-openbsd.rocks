---
title: "noexec"
---

Partitions can be mounted using the `noexec` mount Flag. This means no
binaries located on this mounted path can be executed. `/dev` for example is
mounted with this flag by default.

Details:

* [mount(8) - OpenBSD manual pages](https://man.openbsd.org/mount.8#noexec)
