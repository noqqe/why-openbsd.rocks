---
title: "sensorsd(8)"
---

`sensorsd` — hardware sensors monitor

The `sensorsd` utility retrieves sensor monitoring data like fan
speed, temperature, voltage and RAID logical disk status from the
sysctl(2) hw.sensors subtree. When the state of any monitored sensor
changes, an alert is triggered. Every alert logs a message to
syslog(3) using the __daemon__ facility. Optionally, an alert can be
configured to execute a command.

Details:

* The `sensorsd` program first appeared in [OpenBSD 3.5](https://openbsd.org/35.html).
* [sensorsd(8) - OpenBSD manual pages](http://man.openbsd.org/sensorsd.8)
* [sysctl(2) - OpenBSD manual pages](https://man.openbsd.org/sysctl.2) 
* [syslog(3) - OpenBSD manual pages](https://man.openbsd.org/syslog.3)
