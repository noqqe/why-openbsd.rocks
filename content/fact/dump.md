--- 
title: "dump(8): incremental filesystem backups" 
---

`dump` is a program to maintain incremental filesystem backups.

Created backup could be piped through archiver, encryption tool or ssh.

Unlike with pax(1), tar(1) and cpio(1) dump can save in backup file with
name as long as supported by filesystem.

Date of the latest filesystem backup and level of that backup keeped in
`/etc/dumpdates` file and could be viewed with `dump -W`.

A file with `nodump` flag set will by default be backed up by dump
during full backups.  The `-h` option of dump(8) can be used to alter
this.

Details:

* [dump(8) - OpenBSD manual pages](https://man.openbsd.org/dump.8)
* [chflags(1) - OpenBSD manual pages](https:/man.openbsd.org/chflags.1#nodump)
