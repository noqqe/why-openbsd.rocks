---
title: "spamd(8)"
---

The `spamd` spam deferral daemon rejects fake emails. It is designed for
efficiency, so that the receiving host is not slowed down.

`spamd` divides sending hosts into three types:

Blacklisted hosts are diverted to `spamd` and tarpitted. In other words, they are
communicated with very slowly to consume the sender's resources.
Mail is rejected with either a 450 or 550 error message. A blacklisted
host will not be allowed to talk to a real mail server.

Whitelisted hosts do not talk to `spamd`. Their connections are instead
sent to a real mail server, such as `[smtpd(8)](http://man.openbsd.org/spamd.8)`.

Greylisted hosts are diverted to `spamd` if it is not yet known whether they
are likely spammers. They are sent a temporary failure message when they try to
deliver mail.

Details:

* The `spamd` command first appeared in OpenBSD 3.3.
* [spamd(8) - OpenBSD manual pages](http://man.openbsd.org/spamd.8)
* [spamd.conf(5) - OpenBSD manual pages](http://man.openbsd.org/spamd.conf.5)
