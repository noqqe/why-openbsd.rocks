---
title: "httpd(8)"
---

OpenBSD had a patched version of Apache httpd imported for a long time. After
that, nginx was used and imported in base, but still the webserver was too
big for the base system.

At some point, Reyk Floeter and Pierre-Yves Ritschard wrote a minimal HTTP
server which replaced all externally developed http servers in the base system.

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
* [OpenBSD 5.6](https://www.openbsd.org/56.html)
