# Hiding All Files on the System

## Platform
Windows

## Risk
MEDIUM

## Description
Sets the hidden, system, and read-only attributes on all files on the C: drive.

## Why It Is Dangerous
Makes it look like everything is deleted, confusing users and breaking some applications.

## Prerequisites
Elevated Command Prompt access.

## Demonstration
```cmd
attrib +h +s +r C:\*.* /s /d
```

## Expected Behavior
Files and folders disappear from Windows Explorer unless 'Show hidden system files' is enabled.

## Detection
Monitor for anomalous `attrib.exe` usage targeting the root drive recursively.

## Mitigation
Restrict administrative privileges.

## Recovery
Run the fix command: `attrib -h -s -r C:\*.* /s /d` or restore the VM snapshot.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
