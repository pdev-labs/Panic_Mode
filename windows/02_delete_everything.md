# Delete Everything (del /s /q /f C:\)

## Platform
Windows

## Risk
CRITICAL

## Description
Deletes all files on the C:\ drive without confirmation.

## Why It Is Dangerous
Causes complete data loss and destroys the operating system, rendering it unbootable.

## Prerequisites
Command Prompt access. Elevated privileges required to delete system files.

## Demonstration
```cmd
del /s /q /f C:\
```

## Expected Behavior
Files are rapidly deleted silently. System instability occurs immediately, followed by failure.

## Detection
Monitor for mass file deletion events using Sysmon or EDR solutions targeting the `del` command on root directories.

## Mitigation
Implement least privilege. Safer Alternative: `del "C:\some_folder\*" /q` to delete specific files.

## Recovery
Restore from VM snapshot or immutable backups. Data recovery is extremely difficult if the MFT is overwritten.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
