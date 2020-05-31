---
title: "FFS2: Enhanced Fast Filesystem"
---

**FFS2** is the new filesystem, by default, since OpenBSD 6.7. It means 
*Enhanced Fast Filesystem*.

Benefits: 

* FFS2 is faster than its predecessor FFS to create the filesystem, but 
	also to analyze it with `fsck(8)`
* FFS2 use 64-bit timestamps and block numbers; so it is not subject to 
	the Y2038 bug.
* FFS2 supports very large partition (>= 1TB, since 4.2).

Details:
* FFS2 first appeared in [OpenBSD 4.2](https://www.openbsd.org/42.html).
* [OpenBSD 4.2 changelog](https://www.openbsd.org/plus42.html)
* [CVS 1.57 for newfs](https://cvsweb.openbsd.org/src/sbin/newfs/newfs.c?rev=1.57&content-type=text/x-cvsweb-markup)
* [CVS 1.82 for newfs](https://cvsweb.openbsd.org/src/sbin/newfs/newfs.c?rev=1.82&content-type=text/x-cvsweb-markup)
* [OpenBSD 6.7](https://www.openbsd.org/67.html)
* [newfs(8) - OpenBSD Manual Page](https://man.openbsd.org/newfs.8)
* [fsck(8)  - OpenBSD Manual Page](https://man.openbsd.org/fsck.8)
* [Year 2038 problem](https://en.wikipedia.org/wiki/Year_2038_problem)
