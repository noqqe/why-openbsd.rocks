---
title: "PID randomization"
---

OpenBSD spawns each new process with a random, unused PID. This protects the
user from attacks that predict new PIDs.

Details:

* this feature first appeared in [OpenBSD 2.1](https://www.openbsd.org/21.html)
* [CVS log for src/sys/kern/kern_fork.c](http://cvsweb.openbsd.org/cgi-bin/cvsweb/src/sys/kern/kern_fork.c#rev1.8)
* [operating systems - Do randomized PIDs bring more security? - Information Security Stack Exchange](https://security.stackexchange.com/questions/88692/do-randomized-pids-bring-more-security)
