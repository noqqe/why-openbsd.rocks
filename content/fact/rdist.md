---
title: "rdist(1)"
---

`rdist` is a program to maintain identical copies of files over 
multiple hosts. It preserves the owner, group, mode, and mtime of
files if possible and can update programs that are executing.
`rdist` reads commands from __distfile__ to direct the updating
of files and/or directories.


```
HOSTS = ( rupdate@ns2.example.com )

FILES = ( /var/nsd )

EXCL = ( nsd.conf *.key *.pem )

${FILES} -> ${HOSTS}
	install ;
	except /var/nsd/db ;
	except /var/nsd/etc/${EXCL} ;
	except /var/nsd/run ;
	special "logger rdist update: $REMFILE" ;
	cmdspecial "rcctl reload nsd" ;

unbound:
/var/unbound/etc/unbound.conf -> ${HOSTS}
	install ;
	special "logger rdist update: $REMFILE" ;
	cmdspecial "rcctl reload unbound" ;
```

Details:

* The rdist program was first released as part of 4.3BSD UNIX.
* [rdist(1) - OpenBSD manual pages](https://man.openbsd.org/rdist.1)
* [rdistd(1) - OpenBSD manual pages](https://man.openbsd.org/rdistd.1)
