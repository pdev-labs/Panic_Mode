# Disabling the Keyboard

## Platform
Windows

## Risk
MEDIUM

## Description
Modifies the registry to disable the standard PS/2 keyboard driver (i8042prt).

## Why It Is Dangerous
Makes the keyboard unusable upon the next reboot.

## Prerequisites
Elevated Command Prompt access.

## Demonstration
```cmd
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\i8042prt" /v Start /t REG_DWORD /d 4 /f
shutdown -r -t 0
```

## Expected Behavior
After reboot, the keyboard will not respond.

## Detection
Monitor registry modifications to critical service start types.

## Mitigation
Restrict administrative access.

## Recovery
Boot into Safe Mode, log in using the On-Screen Keyboard via accessibility tools, and reset the registry key, or restore snapshot.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
