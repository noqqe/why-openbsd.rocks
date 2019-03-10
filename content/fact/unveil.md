---
title: "unveil(2)"
---

The `unveil` system call limits the filesystem `open` call to a
given set of paths. It extends the idea of [pledge](/fact/pledge/):
simply limiting programs to `open` is insufficient, because `open` is valid
for the the whole filesystem.

For example, why should a program like `[passwd(1)](https://man.openbsd.org/passwd.1)`
have access to your file system beyond `/etc/passwd` and `/etc/shadow`?
 If there is a security bug in `passwd` then effects would be quite limited.

The function first appeared in OpenBSD 6.4.

Details:

* [unveil(2) - OpenBSD manual pages](https://man.openbsd.org/unveil.2)
* [src/local_passwd.c GitHub](https://github.com/openbsd/src/blob/95235fadcb56c0c38283487ebc2ba41807a07a02/usr.bin/passwd/local_passwd.c#L75-L86)
* [OpenBSD 6.4](https://openbsd.org/64.html)
