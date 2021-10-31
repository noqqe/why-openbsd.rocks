---
title: "Syscall From-Verification"
---

From OpenBSD 6.7 on, the kernel checks if a syscall is executed from the address
space where its corresponding process is coming from. If this is not the
case, the process gets killed.

This helps avoiding attackers uploading exploit code containing a raw system call
sequence and instructions.

Details:

* [syscall call-from verification - marc.info](https://marc.info/?l=openbsd-tech&m=157488907117170)
* [OpenBSD 6.7](https://openbsd.org/67.html)

