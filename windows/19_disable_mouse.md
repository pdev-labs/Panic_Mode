# Disabling the Mouse

## Platform
Windows

## Risk
MEDIUM

## Description
Modifies the registry to disable the mouse class driver (Mouclass).

## Why It Is Dangerous
Makes navigation difficult after reboot.

## Prerequisites
Elevated Command Prompt access.

## Demonstration
```cmd
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Mouclass" /v Start /t REG_DWORD /d 4 /f
shutdown -r -t 0
```

## Expected Behavior
After reboot, the mouse will not function.

## Detection
Monitor registry changes to service start states.

## Mitigation
Restrict administrative access.

## Recovery
Boot into Safe Mode using the keyboard and restore the registry key, or restore snapshot.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
