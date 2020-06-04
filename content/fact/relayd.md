---
title: "relayd(8)"
---

The `relayd` daemon relays and dynamically redirects incoming connections to a
target host. It is mainly used as a load-balancer, an application layer
gateway, or a transparent proxy.

The daemon can monitor groups of hosts for availability. This is determined by
checking for a specific service common to a host group. When availability is
confirmed, layer 3 and/or layer 7 forwarding services are set up by `relayd`.

```
ext_addr="192.168.1.1"
table <webhosts> { $webhost1 $webhost2 }
relay www {
        listen on $ext_addr port http
        forward to <webhosts> port http loadbalance check http "/" code 200
}
```

Details:

* The `relayd` program, formerly known as `hoststated`, first appeared in [OpenBSD 4.1](https://openbsd.org/41.html). It was renamed to `relayd` in [OpenBSD 4.3](https://openbsd.org/43.html). 
* [relayd(8) - OpenBSD manual pages](http://man.openbsd.org/relayd.8)
* [relayd.conf(5) - OpenBSD manual pages](http://man.openbsd.org/relayd.cond.5)
* [relayctl(8) - OpenBSD manual pages](http://man.openbsd.org/relayctl.8)
