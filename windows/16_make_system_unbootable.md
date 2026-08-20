# Making the System Unbootable (bcdedit command)

## Platform
Windows

## Risk
CRITICAL

## Description
Deletes the default Windows boot entry from the Boot Configuration Data (BCD) store.

## Why It Is Dangerous
Prevents the system from booting.

## Prerequisites
Elevated Command Prompt access.

## Demonstration
```cmd
bcdedit /delete {default}
```

## Expected Behavior
System operates normally until reboot, then fails to find a bootable OS.

## Detection
Monitor for `bcdedit.exe` modifying or deleting boot entries.

## Mitigation
Restrict administrative privileges.

## Recovery
Boot from a Windows recovery USB and run `bcdedit /set {default} bootstatuspolicy IgnoreAllFailures` or rebuild the BCD. In a lab, restore the VM snapshot.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
