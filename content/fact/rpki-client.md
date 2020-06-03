---
title: "rpki-client(8)"
---

The `rpki-client` utility queries the RPKI repository system with 
openrsync(1) to fetch all X.509 certificates, manifests, and
revocation lists under a given Trust Anchor.

`rpki-client` subsequently validates each Route Origin Authorization 
(ROA) by constructing and verifying a certification path for the
certificate associated with the ROA (including checking relevant
CRLs). `rpki-client` produces lists of the Validated ROA Payloads
(VRPs) in various formats. 

Details:

* The rpki-client utility was written by Kristaps Dzonsons
* rpki-client first appeared in [OpenBSD 6.7](https://openbsd.org/67.html)
* [openrsync(1) - OpenBSD manual pages](https://man.openbsd.org/openrsync.1)
* [bgpd.conf(5) - OpenBSD manual pages](https://man.openbsd.org/bgpd.conf.5)
* [rpki-client website](https://rpki-client.org)
