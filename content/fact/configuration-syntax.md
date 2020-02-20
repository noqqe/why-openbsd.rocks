---
title: "Configuration syntax"
---

All daemons written by and for OpenBSD have config files following a certain scheme;
this scheme is similar to [pf](/pf). Even though there is no formal specification, the
unified and readable syntax and vocabulary make OpenBSDs daemons easy to
understand and configure.

acme-client.conf
```
domain why-openbsd.rocks {
  domain key "/etc/ssl/private/why-openbsd.rocks.key"
  domain certificate "/etc/ssl/why-openbsd.rocks.crt"
  domain full chain certificate "/etc/ssl/why-openbsd.rocks.pem"
  challengedir "/var/www/htdocs/challenges/"
  sign with letsencrypt
}
```

relayd.conf
```
http protocol https {
	match request header append "X-Forwarded-For" value "$REMOTE_ADDR"
	match request header append "X-Forwarded-By" \
	    value "$SERVER_ADDR:$SERVER_PORT"
	match request header set "Connection" value "close"

	# Various TCP options
	tcp { sack, backlog 128 }

 	tls { no tlsv1.0, ciphers HIGH }
#	tls no session tickets
}
```

Details:

* [pf.conf(5)](https://man.openbsd.org/pf.conf.5)
* [unwind.conf(5)](https://man.openbsd.org/unwind.conf.5)
* [httpd.conf(5)](https://man.openbsd.org/httpd.conf.5)
* [relayd.conf(5)](https://man.openbsd.org/relayd.conf.5)
* [smtpd.conf(5)](https://man.openbsd.org/smtpd.conf.5) also known as [OpenSMTPD](https://OpenSMTPD.org)
