---
title: "carp(4)"
---

The `carp` interface is a pseudo-device which implements and controls 
the CARP protocol. `carp` allows multiple hosts on the same local
network to share a set of IP addresses. Its primary purpose is to
ensure that these addresses are always available, but in some
configurations `carp` can also provide load balancing functionality.

Details:

* The `carp` device first appeared in OpenBSD 3.5. 
* [carp(8) - OpenBSD manual pages](http://man.openbsd.org/carp.4)
* [hostname.if(5) - OpenBSD manual pages](http://man.openbsd.org/hostname.if.5)
* [ifconfig(8) - OpenBSD manual pages](http://man.openbsd.org/ifconfig.4)
