---
title: "Stack"
---

## Aggressive randomisation of the stack location

Since 7.3 (03/19/2023), this will put the stack at a random location in 
the upper 1/4th of the userland virtual address space providing up to 26 
additional bits of randomness in the address. 

This aggressive randomisation of the stack location is for all 64-bit 
architectures except alpha.

This should make it harder for an attacker to find the stack.

---

Details:
* [Mark Kettenis: aggresive randomisation of the stack location](https://www.undeadly.org/cgi?action=article;sid=20230319230523)
* ['Aggressively randomize the location of the stack' - MARC](https://marc.info/?l=openbsd-cvs&m=167925792811357&w=2)
* [OpenBSD 7.3](https://openbsd.org/73.html)
