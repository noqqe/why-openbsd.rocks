---
title: "spamd(8)"
---

`spamd`, spam deferral daemon, `spamd` is a fake mail daemon which 
rejects false mail. It is designed to be very efficient so that it
does not slow down the receiving machine.

`spamd` considers sending hosts to be of three types:

blacklisted hosts are diverted to `spamd` and tarpitted i.e. they are 
communicated with very slowly to consume the sender's resources.
Mail is rejected with either a 450 or 550 error message. A blacklisted
host will not be allowed to talk to a real mail server.

whitelisted hosts do not talk to `spamd`. Their connections are instead 
sent to a real mail server, such as `smtpd(8)`.

greylisted hosts are diverted to `spamd`, but `spamd` has not yet decided 
if they are likely spammers. They are given a temporary failure
message by spamd when they try to deliver mail.

Details:

* The `spamd` command first appeared in OpenBSD 3.3. 
* [spamd(8) - OpenBSD manual pages](http://man.openbsd.org/spamd.8)
* [spamd.conf(5) - OpenBSD manual pages](http://man.openbsd.org/spamd.conf.5)
