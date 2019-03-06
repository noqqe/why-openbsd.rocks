---
title: "Audio recording"
---

For privacy reasons, the OpenBSD team disabled audio recording for all
devices by default in the kernel. This can be toggled on/off with a simple
sysctl change, without rebooting, with administrator rights:

    sysctl kern.audio.record=1 # enable at runtime
    echo kern.audio.record=1 >> /etc/sysctl.conf # set at boot

Details:

* [OpenBSD 6.4](https://www.openbsd.org/64.html)
* [sysctl(2) - OpenBSD manual pages](https://man.openbsd.org/sysctl.2#KERN_AUDIO_RECORD)
* [Audio recording is now disabled by default in OpenBSD | ZDNet](https://www.zdnet.com/article/audio-recording-is-now-disabled-by-default-in-openbsd/)
