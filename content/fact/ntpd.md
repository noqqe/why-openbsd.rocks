---
title: "ntpd(8)"
---

The base system ships with its own implementation of which also supports
HTTPS Constraints that helps verifying the time you got by unauthenticated
UDP packets.

```
servers pool.ntp.org
constraints from "https://www.google.com/"
```

Details:

* [Authenticated TLS "contraints" in ntpd(8)](https://marc.info/?l=openbsd-tech&m=142356166731390&w=2)
* [ntpd(8) - OpenBSD manual pages](https://man.openbsd.org/ntpd)
* [ntpd.conf Constraints](https://man.openbsd.org/ntpd.conf.5#CONSTRAINTS)
* [OpenNTPD](http://www.openntpd.org/)
