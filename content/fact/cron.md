---
title: "cron(8)"
---

OpenBSD’s cron(8) daemon can randomize values (`~`), and prevent multiple jobs
from running concurrently (`-s`). Super useful additions that all cron
implementations should have had forever.

> For example "0~30" will result in a random value between 0 and 30
> inclusive.  If either (or both) of the numbers on either side of the '~'
> are omitted, the appropriate limit (low or high) for the field will be
> used.

Example:

```
0~30 1 * * * [-nsq] echo foo
```

These features are included in OpenBSD 6.7.

Details:

* [OpenBSD_src on Twitter](https://twitter.com/OpenBSD_src/status/1250248871231361024)
* [~ Operator (marc.info)](https://marc.info/?l=openbsd-cvs&m=158691599313802&w=2)
* [-s Operator (marc.info)](https://marc.info/?l=openbsd-cvs&m=158705953406819&w=2)
