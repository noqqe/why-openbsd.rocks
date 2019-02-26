---
title: "file(1)"
---

`file` is sandboxed and runs as user `_file` when executed.

Think of the following: You download a random file from the internet and
analyze it using `file`. If file has a security hole (local code execution
for example), he can run attacks with his prepared file. Thats why the file
utility is sandboxed and chrooted by default.

Details:

* [‘CVS: cvs.openbsd.org: src’ - MARC](https://marc.info/?l=openbsd-cvs&m=143014276127454&w=2)
* [CVS log for src/usr.bin/file/Attic/sandbox.c](https://cvsweb.openbsd.org/src/usr.bin/file/Attic/sandbox.c?only_with_tag=MAIN)
* [‘CVS: cvs.openbsd.org: src’ - MARC](https://marc.info/?l=openbsd-cvs&m=142989267412968&w=2)
