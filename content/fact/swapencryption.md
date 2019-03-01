---
title: "Swap Encryption"
---

To protect sensitive information such as passwords from leaking on to disk,
where they can persist for many years, OpenBSD supports encryption of the
swap partition. And it's enabled by default!

```
sysctl -w vm.swapencrypt.enable=1
```

Details:

* [sysctl(2) - OpenBSD manual pages](https://man.openbsd.org/sysctl.2#VM_SWAPENCRYPT_2)
