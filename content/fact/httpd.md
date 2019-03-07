---
title: "httpd(8)"
---

For a long time OpenBSD used a patched version of Apache httpd. After that,
nginx was imported into base, but even that was still too big for the base
system.

At some point, Reyk Floeter wrote a minimal HTTP server which replaced all
externally developed http servers in the base system.

```
server "www.example.com" {
	alias "example.com"
	listen on * port 80
	listen on * tls port 443
	root "/htdocs/www.example.com"
}
```

Details:

* [httpd.conf(5) - OpenBSD manual pages](https://man.openbsd.org/httpd.conf.5)
* [AsiaBSDCon2015 httpd](http://www.openbsd.org/papers/httpd-asiabsdcon2015.pdf)
* [httpd(8) - OpenBSD manual pages](https://man.openbsd.org/httpd.8)
