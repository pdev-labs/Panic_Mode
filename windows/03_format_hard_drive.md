# Format the Hard Drive

## Platform
Windows

## Risk
CRITICAL

## Description
Formats the entire C: drive, deleting everything.

## Why It Is Dangerous
Erases the entire file system on the specified drive.

## Prerequisites
Elevated Command Prompt access.

## Demonstration
```cmd
format C: /fs:NTFS
```

## Expected Behavior
The format process begins, destroying the file table and data on the target drive.

## Detection
Monitor execution of the `format` command on critical drives.

## Mitigation
Restrict administrative access. Safer Alternative: `chkdsk C: /f /r` to check and repair.

## Recovery
Restore the VM from a baseline snapshot.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
