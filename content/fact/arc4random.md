---
title: arc4random(3)
---

OpenBSD has its own cryptographic random number generator.

Whereever random input is needed, arc4random is used. arc4random is 
an abstraction layer for currently considered as safe ciphers and 
produces ChaCha20 ciphers at the moment

Arc4random is "A Replacement Call For Random", to generate very quickly high
quality 32-bit pseudo-random numbers.

Details:

* [arc4random(3) - OpenBSD manual pages](https://man.openbsd.org/arc4random.3)
* [arc4random(9) - OpenBSD manual pages](https://man.openbsd.org/arc4random.9)
* [OpenBSD 2.1 - Changelog](https://www.openbsd.org/plus21.html)
* [OpenBSD 5.5](https://www.openbsd.org/55.html)
