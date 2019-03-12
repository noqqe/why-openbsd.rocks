---
title: "OpenSMTPD"
---

The OpenBSD base system contained a working and secured `sendmail` setup for
a long time. It was replaced by OpenSMTPD in OpenBSD 5.3 (2013).

OpenSMTPD was written by OpenBSD Developers from scratch. A simple mail
daemon was needed for the base system of the operating system and no there
were no suitable alternatives. The goals are simplicity, security and
reliability with an acceptable [license](/fact/license/) (ISC).

```
table aliases file:/etc/mail/aliases
table secrets file:/etc/mail/secrets

listen on lo0

action "local" mbox alias <aliases>
action "relay" relay host smtp+tls://bob@smtp.example.com \
	auth <secrets>

match for local action "local"
match for any action "relay"
```

OpenSMTP was audited and has a portable version that is available in various
Linux distributions.

Details:

* [OpenSMTPD - Wikipedia](https://en.wikipedia.org/wiki/OpenSMTPD)
* [OpenSMTPD](https://www.opensmtpd.org/)
