# Destroying Windows Explorer (explorer.exe)

## Platform
Windows

## Risk
MEDIUM

## Description
Kills the Windows Explorer process.

## Why It Is Dangerous
Closes the taskbar, desktop, and file explorer windows, making navigation difficult.

## Prerequisites
Command Prompt access.

## Demonstration
```cmd
taskkill /f /im explorer.exe
```

## Expected Behavior
The desktop and taskbar disappear.

## Detection
Monitor for `taskkill` targeting `explorer.exe`.

## Mitigation
Restrict execution of `taskkill`.

## Recovery
Open Task Manager (Ctrl + Shift + Esc), click File -> Run new task, and type `explorer.exe` to restore it.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
