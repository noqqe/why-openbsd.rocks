---
title: "stack-register checking"
---

A memory object should have the fewest permissions possible: typically `read`,
`write` and `execute`. OpenBSD introduced a new permission flag known as
`stack`.

If you want to use memory as a stack, you must `mmap` it with that flag bit.

When a system call happens, we check to see if the stack-pointer register
points to such a page. If not, the program is killed. The ABI is tighter as a
result. You may no longer point your stack register at non-stack memory, or
your program will die.

Details:

* ['stack-register checking' - MARC](https://marc.info/?l=openbsd-tech&m=152035796722258&w=2)
* [Stack-register Checking](https://undeadly.org/cgi?action=article;sid=20180310000858)
