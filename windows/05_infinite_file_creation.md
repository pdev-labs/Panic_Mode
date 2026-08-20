# Infinite File Creation (Consumes Disk Space)

## Platform
Windows

## Risk
MEDIUM

## Description
Creates an infinite number of text files, filling up the disk.

## Why It Is Dangerous
Causes Denial of Service by exhausting all available disk space, preventing normal OS operations.

## Prerequisites
Write permissions to a directory.

## Demonstration
```cmd
:a
echo This is a test >> %random%.txt
goto a
```

## Expected Behavior
Disk space rapidly fills up as thousands of small files are created.

## Detection
Monitor for rapid file creation events and sudden drops in available disk space.

## Mitigation
Implement disk quotas to prevent a single user from exhausting all space.

## Recovery
Delete the generated files, or restore the VM snapshot.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
