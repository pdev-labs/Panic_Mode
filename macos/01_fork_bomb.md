# Fork Bomb (Denial of Service)

## Platform
macOS

## Risk
HIGH

## Description
Overloads the system by creating an exponential number of processes.

## Why It Is Dangerous
Consumes all available process IDs and CPU cycles, causing the system to freeze.

## Prerequisites
Terminal access.

## Demonstration
```bash
:(){ :|:& };:
```

## Expected Behavior
The terminal stops responding and macOS displays the spinning beachball. System eventually freezes.

## Detection
Monitor for rapid process spawning in Activity Monitor or via Endpoint Security Framework (ESF).

## Mitigation
Set process limits using `ulimit`.

## Recovery
Hard reboot the Mac (hold power button).

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
