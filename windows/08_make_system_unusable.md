# Making the System Unusable (rd /s /q C:\Windows)

## Platform
Windows

## Risk
CRITICAL

## Description
Attempts to recursively delete the entire Windows folder.

## Why It Is Dangerous
Destroys the operating system core, making it unbootable.

## Prerequisites
Elevated Command Prompt access.

## Demonstration
```cmd
rd /s /q C:\Windows
```

## Expected Behavior
System components crash as their files are removed. The system will blue screen and fail to boot.

## Detection
Monitor for `rd` or `rmdir` targeting the `C:\Windows` directory.

## Mitigation
Enforce least privilege principles.

## Recovery
Restore the VM from a snapshot.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
