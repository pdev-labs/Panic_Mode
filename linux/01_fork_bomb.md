# Fork Bomb (Denial of Service)

## Platform
Linux

## Risk
HIGH

## Description
Overloads the system by creating an exponential number of processes.

## Why It Is Dangerous
Consumes all available process IDs and CPU cycles, causing the system to become completely unresponsive (kernel panic or freeze).

## Prerequisites
Bash shell access.

## Demonstration
```bash
:(){ :|:& };:
```

## Expected Behavior
The terminal stops responding, SSH sessions drop, and the system freezes.

## Detection
Monitor for rapid process spawning. Hard to detect during the event due to system freeze.

## Mitigation
Set process limits using `ulimit -u` in `/etc/security/limits.conf`.

## Recovery
Hard reboot the virtual machine.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
