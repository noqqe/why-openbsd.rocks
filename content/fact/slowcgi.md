---
title: "slowcgi(8)"
---

`slowcgi` — a FastCGI to CGI wrapper server

`slowcgi` is a server which implements the FastCGI Protocol to execute
CGI scripts. FastCGI was designed to overcome the CGI protocol's
scalability and resource sharing limitations. While CGI scripts
need to be forked for every request, FastCGI scripts can be kept
running and handle many HTTP requests.

Details:

* The `slowcgi` server first appeared in [OpenBSD 5.4](https://openbsd.org/54.html).
* [slowcgi(8) - OpenBSD manual pages](http://man.openbsd.org/slowcgi.8)
* [httpd(8) - OpenBSD manual pages](http://man.openbsd.org/httpd.8)
