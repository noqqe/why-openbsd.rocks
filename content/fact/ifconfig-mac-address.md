---
title: "Random MAC addresses in ifconfig(8)
---

OpenBSD let's you have randomized MAC addresses via `ifconfig(8)`

```
ifconfig iwm0 lladdr random
```

Randomizing your MAC address improves anonymity while using your Laptop in
public wifi's or the like.

Details:

* [ifconfig(8)](https://man.openbsd.org/ifconfig.8)
* [Bryan Steele on Twitter](https://twitter.com/canadianbryan/status/1180912265782054917)
