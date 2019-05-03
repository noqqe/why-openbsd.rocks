---
title: securelevel(7)
---

securelevel is a security mechanism in OpenBSD kernel. It provides four levels
 of system security, from insecure mode to draconian mode:

* -1 (Permanently insecure mode) Kernel does not try to increase security level.
  This effectively disables securelevel protections.
* 0 (Insecure mode) all devices can be read or written and system
  file flags can be cleared using chflags.
* 1 (Secure mode) the raw memory devices can not be written to, the raw devices
  of mounted file systems can not be written to, important kernel variables are
  locked down - Actually, this is the mode by default.
* 2 (Highly secure mode) raw disk devices can not be written to, certain
  time related functions are locked down so the time cannot be set in the
  pastand pf rules may not be altered. This ultimate mode is a last line of
  defence if the superuser account is compromised or limit potential damage.

The securelevel manual page first appeared in OpenBSD 2.6.

Details:
* [securelevel(7) - OpenBSD manual pages](https://man.openbsd.org/securelevel.7)
* [Securelevel - Wikipedia](https://en.wikipedia.org/wiki/Securelevel)
* [OpenBSD 2.6 Changelog](https://www.openbsd.org/plus26.html)
