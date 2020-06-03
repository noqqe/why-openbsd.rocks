---
title: "sysupgrade(8)"
---

`sysupgrade` is a utility to upgrade OpenBSD to the next release or
a new snapshot if available.

`sysupgrade` downloads the necessary files to /home/_sysupgrade,
verifies them with [signify(1)](https://man.openbsd.org/signify.1), and copies bsd.rd to /bsd.upgrade.

`sysupgrade` by default then reboots the system. The bootloader will
automatically choose /bsd.upgrade, triggering a one-shot upgrade
using the files in /home/_sysupgrade.

Since OpenBSD 6.7, **sysupgrade** runs `fw_update` before upgrading.

Details:

* sysupgrade first appeared in [OpenBSD 6.6](https://openbsd.org/66.html).
* [sysupgrade(8) - OpenBSD manual pages](https://man.openbsd.org/sysupgrade.8)
* [OpenBSD 6.7](https://openbsd.org/67.html)
