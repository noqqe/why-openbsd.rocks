---
title: "ntpd(8)"
---

Since OpenBSD 3.6, the base system ships with its own implementation of `ntp`.
OpenBSD 5.7 introduced HTTPS Constraints, which helps to verify the times received
in unauthenticated UDP packets.

```
servers pool.ntp.org
constraints from "https://www.google.com/"
```

OpenNTPD has become a portable software project and is also available in Linux
distributions.

Details:

* [Authenticated TLS "contraints" in ntpd(8)](https://marc.info/?l=openbsd-tech&m=142356166731390&w=2)
* [ntpd(8) - OpenBSD manual pages](https://man.openbsd.org/ntpd)
* [ntpd.conf Constraints](https://man.openbsd.org/ntpd.conf.5#CONSTRAINTS)
* [OpenNTPD](http://www.openntpd.org/)
* [OpenBSD 3.6](https://openbsd.org/36.html)
* [OpenBSD 5.7](https://www.openbsd.org/57.html)
