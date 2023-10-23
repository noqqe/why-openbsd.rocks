---
title: "doas(1)"
---

`doas` replaced `sudo` because of the latter's security flaws and large,
complex codebase. `doas` is easy to configure and use and suits most use
cases.  Its source code is small and elegant too.

```
permit nopass <user> as root
permit nopass root
```

Details:

* [doas(1) - OpenBSD manual pages](http://man.openbsd.org/doas)
* [doas - dedicated openbsd application subexecutor](https://flak.tedunangst.com/post/doas)
* [OpenBSD 5.8](https://www.openbsd.org/58.html)
