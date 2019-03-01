---
title: "pf(4)"
---

`pf` is OpenBSDs very own firewall. Its simple, feature rich with easy readable
configuration. It supports the use of variables, lists and tables .

```
tcpin = "{ http, https, ssh }"

block in all
pass out quick on $extif from any to any
pass in on $extif proto tcp from any to any port $tcpin
```

Details:

* [OpenBSD PF: User’s Guide](https://www.openbsd.org/faq/pf/)
* [pf.conf(5) - OpenBSD manual pages](https://man.openbsd.org/pf.conf.5)
* [pf(4) - OpenBSD manual pages](https://man.openbsd.org/pf)
