---
title: "xenodm: the secure X Display manager"
---

**xenodm** is the X Display Manager, since OpenBSD 6.1!

xenodm is a simplified fork of xdm, lightweight, more secure, rid of XDMCP support, because of many security vulnerabilities. 
It support only the BSDauth code used in OpenBSD. 

On OpenBSD 6.5, xenodm is absolutly necessary to start the X server, because it no longer has setuid rights enabled by default.

Details: 

* [xenodm - OpenBSD manpage](https://man.openbsd.org/xenodm.1)
* [g2k16 Hackathon Report: Matthieu Herrb on xenodm](undeadly.org/cgi?action=article&sid=20160911231712)
* [OpenBSD 6.1](https://www.openbsd.org/61.html)
* [OpenBSD 6.5](https://www.openbsd.org/65.html)
