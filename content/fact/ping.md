---
title: "ping(8) randomness"
---

In `ping(8)` and `ping6(8)`, obfuscate the monotonic clock values put on the wire
by offsetting them with a random value.

By default fill the ping payload with a ChaCha stream instead of an unvarying
payload.

This helps the user hiding the system time from the attacker and prevents
from OS detection.

More Details:

* [OpenBSD 5.8 Changelog](https://www.openbsd.org/plus58.html)
* [obfuscate the monotonic clock values we put on the wire by offsetting · openbsd/src@08eef1f · GitHub](https://github.com/openbsd/src/commit/08eef1f27acac7f50229bbf7e098d60a720e9b86#diff-ae88590b6e798b8577758800d3fce759)

