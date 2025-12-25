---
title: "Migrating to Qubes OS"
date: 2025-12-25T00:00:00.000Z
categories: [Security, Operating Systems, Personal]
summary: "This is the first portfolio post. It is intended for testing."
---
## What is Qubes OS?

Qubes OS is a "reasonably secure" operating system based on Fedora Linux and the Xen hypervisor. It works on the principle of isolation and compartmentalisation. You create a special virtual machine, called 'Qube', which exists for a single specific purpose, like for your work applications, or your personal activities. When (not if) one of the VMs becomes compromised, the rest of the system remains untouched and you can just discard the affected Qube and re-create it again from a template.

## What are the pros?

### Security by separation

Having a separate VM means your work and personal life never interact and there's no way for a virus on your personal Qube to in any way see or manipulate data related to your work.

### Easy recovery and app installs

Each of your Qubes has a TemplateVM, which serves as a template where you install all your applications, it is a completely air-gapped system where you manage the kernel and root directories of your machine, all the updates and installs you make propagate downstream to your individual Qubes.

### Complete control

Qubes allows you to fine-tune everything, from the kernel of individual apps, the network connection, hardware allocation, to even whether your personal data persist on the system after you close the Qube. It comes with tools to route your traffic through the Tor network and create disposable VMs that forget everything after you close them.

## What are the cons?

### No GPU acceleration

Qubes is a very secure system, no single application or Qube has access to your GPU to prevent Qubes from snooping on the rendered pixels of other applicaitons and of the base system, called dom0. All rendering is handled by the CPU in dom0. Dom0 makes sure to render unforgeable color-coded borders that help you identify which Qube and trust-level each of the applications have.

### Poor Windows support

Qubes has support for Windows, all of its features work and the core performance isn't bad at all. However, I personally have problems with the rendering. Sometimes pixels on the screen don't update, leading to 'ghosting' where you for example see a Window multiple times after you move it, or it looks like Window hasn't opened because the pixels haven't updated to show it. I still haven't been able to fix this issue.

## Article under construction ⚠️🐾