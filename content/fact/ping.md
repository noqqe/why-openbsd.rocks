---
title: "ping(8) randomness"
---

Both `ping(8)` and `ping6(8)` obfuscate the transmitted monotonic clock values
by offsetting them with a random value.

ChaCha streams are used to vary every payload. This helps the user to hide the
system time from the attacker and prevents OS detection.

More Details:

* [OpenBSD 5.8 Changelog](https://www.openbsd.org/plus58.html)
* [obfuscate the monotonic clock values we put on the wire by offsetting · openbsd/src@08eef1f · GitHub](https://github.com/openbsd/src/commit/08eef1f27acac7f50229bbf7e098d60a720e9b86#diff-ae88590b6e798b8577758800d3fce759)
* [ping(8), ping6(8) - OpenBSD manpages](http://man.openbsd.org/ping.8)
