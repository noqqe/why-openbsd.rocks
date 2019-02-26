---
title: "stack-register checking"
---

A memory object should have as least permissions as possible. Typically read,
write and executable. OpenBSD introduced a new permission flag. The `stack`
flag.

If you want to use memory as a stack, you must `mmap` it with that flag bit.

When a system call happens, we check if the stack-pointer register
points to such a page. If it doesn't, the program is killed.  We
have tightened the ABI. You may no longer point your stack register
at non-stack memory. You'll be killed.

Details:

* ['stack-register checking' - MARC](https://marc.info/?l=openbsd-tech&m=152035796722258&w=2)
* [Stack-register Checking](https://undeadly.org/cgi?action=article;sid=20180310000858)
