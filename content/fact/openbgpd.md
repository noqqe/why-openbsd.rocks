---
title: "OpenBGPD"
---

`OpenBGPD` is a FREE implementation of the Border Gateway Protocol,
Version 4. It allows ordinary machines to be used as routers
exchanging routes with other systems speaking the BGP protocol.

Started out of dissatisfaction with other implementations, `OpenBGPD`
is a fairly complete BGP implementation, powering many sites. Users
often praise its ease of use and high performance, as well as its
reliability.

`OpenBGPD's` companions, ospfd(8), ospf6d(8), ripd(8) and dvmrpd(8)
add support for the respective protocols. ldpd(8) and mpe(4) add
MPLS support.

`OpenBGPD` is primarily developed by Henning Brauer, Peter Hessler,
and Claudio Jeker. All of these daemons are part of the OpenBSD
Project.

The portable version, maintained by Claudio Jeker, is available via
periodic tarball releases. Contributions are welcome to both the
`OpenBGPD` core and the portable build framework.

The software is freely usable and re-usable by everyone under a BSD license.

Details:

* The `bgpctl` program first appeared in [OpenBSD 3.5](https://openbsd.org/35.html).
* [bgpd(8) - OpenBSD manual pages](https://man.openbsd.org/bgpd.8)
* [bgpd.conf(5) - OpenBSD manual pages](http://man.openbsd.org/bgpd.cond.5)
* [bgpdctl(8) - OpenBSD manual pages](http://man.openbsd.org/bgpdctl.8)
