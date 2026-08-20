# Infinite While Loop (High CPU Usage)

## Platform
Linux

## Risk
HIGH

## Description
Spawns infinite processes in a bash loop.

## Why It Is Dangerous
Consumes 100% CPU and freezes the system (Denial of Service).

## Prerequisites
Bash shell access.

## Demonstration
```bash
while true; do fork & done
```
*(Note: `fork` here is illustrative; typical implementation calls a valid command or a script that background itself).* 

## Expected Behavior
CPU usage spikes, the system becomes unresponsive.

## Detection
System load monitoring alerts.

## Mitigation
Set process and CPU limits using `ulimit` and cgroups.

## Recovery
Hard reboot the virtual machine.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
