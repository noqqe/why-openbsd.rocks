---
title: "unwind(8)"
---

`unwind` — validating DNS resolver

`unwind` is a validating DNS resolver. It is intended to run on client
machines like workstations or laptops and only listens on localhost.
unwind sends DNS queries to nameservers to answer queries and
switches to resolvers learned from dhclient(8) if it detects that
DNS queries are blocked by the local network. It periodically probes
if DNS is no longer blocked and switches back to querying nameservers
itself.

`unwind` is usually started at boot time, and can be enabled by 
using the tool [rcctl](/fact/rcctl):

`# rcctl enable unwind`

Details:

* The `unwind` program first appeared in [OpenBSD 6.5](https://openbsd.org/65.html).
* [unwind(8) - OpenBSD manual pages](http://man.openbsd.org/unwind.8)
* [unwind.conf(5) - OpenBSD manual pages](http://man.openbsd.org/unwind.conf.5)
* [unbound(8) - OpenBSD manual pages](http://man.openbsd.org/unbound.8)
* [unwindctl(8) - OpenBSD manual pages](http://man.openbsd.org/unwindctl.8)
* [dhclient(8) - OpenBSD manual pages](http://man.openbsd.org/dhclient.8)
