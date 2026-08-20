# Creating a Fake Blue Screen of Death (BSOD)

## Platform
Windows

## Risk
MEDIUM

## Description
Kills a critical system process (svchost.exe) to intentionally crash the system.

## Why It Is Dangerous
Causes an immediate system crash and reboot, resulting in unsaved data loss.

## Prerequisites
Elevated Command Prompt access.

## Demonstration
```cmd
taskkill /f /im svchost.exe
```

## Expected Behavior
The system immediately halts and displays a Blue Screen of Death (Bug Check).

## Detection
Monitor for `taskkill` targeting critical system processes.

## Mitigation
Restrict administrative privileges.

## Recovery
The system will automatically restart and recover.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
