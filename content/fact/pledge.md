---
title: "pledge(2)"
---

`pledge` allows you to limit a program's access to system calls very easily.
This is a huge improvement in security: why should `cut(1)` ever need to open a
socket? Just deny it the ability to do so. Even if a binary is compromised, its
chances to misbehave are greatly reduced.

```
int
main(int argc, char *argv[])
{
  [...]
  if (pledge("stdio rpath", NULL) == -1)
    err(1, "pledge");
  [...]
}
```

Within only two releases, the OpenBSD Developers managed to introduce `pledge`
to most of the binaries in the base system.

Details:

* [OpenBSD 5.9](https://openbsd.org/plus59.html)
* [pledge(2) - OpenBSD manual pages](http://man.openbsd.org/pledge)
* [Bob Beck: Adventures in OpenBSD pledge - BSDCan 2018](https://www.youtube.com/watch?v=bXO6nelFt-E)
