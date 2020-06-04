---
title: "vxlan(4)"
---

The `vxlan` interface is a tunnelling pseudo-device for overlaying 
virtualized layer 2 networks over layer 3 networks.

A `vxlan` interface can be created using the ifconfig vxlanN create 
command. Once configured, the interface encapsulates and decapsulates
Ethernet frames in UDP datagrams that are exchanged with tunnel
endpoints. The default UDP port for VXLAN traffic is 4789.

Details:

* The `vxlan` device first appeared in OpenBSD 6.5. 
* [vxlan(4) - OpenBSD manual pages](http://man.openbsd.org/vxlan.4)
* [hostname.if(5) - OpenBSD manual pages](http://man.openbsd.org/hostname.if.5)
* [ifconfig(8) - OpenBSD manual pages](http://man.openbsd.org/ifconfig.8)
