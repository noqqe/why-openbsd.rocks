---
title: "unveil(2)"
---

The `unveil` system call limits the filesystem `open` call to programs to
only a given set of paths. Its similar to [pledge](/fact/pledge). Its an
addition to it, as it was found that just limiting programs to do `open` is
not enough, as `open` still means the whole filesystem.

Why should a program like `passwd(1)`  should have access to more of your
file system, other than `/etc/passwd` and `/etc/shadow1`? If there is
a security bug in `passwd` effects would be very limited.

Details:

* [unveil(2) - OpenBSD manual pages](https://man.openbsd.org/unveil.2)
* [src/local_passwd.c GitHub](https://github.com/openbsd/src/blob/95235fadcb56c0c38283487ebc2ba41807a07a02/usr.bin/passwd/local_passwd.c#L75-L86)
