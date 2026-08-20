# Disabling System Files

## Platform
Windows

## Risk
CRITICAL

## Description
Removes system attributes and deletes critical system files (.dll) from System32.

## Why It Is Dangerous
Breaks Windows functionality immediately and prevents the OS from operating or booting.

## Prerequisites
Elevated Command Prompt access.

## Demonstration
```cmd
attrib -s -h -r C:\Windows\system32\*.* /s /d
del C:\Windows\system32\*.dll
```

## Expected Behavior
Critical DLLs are deleted. Running applications will crash, and the system will blue screen or fail to restart.

## Detection
Monitor `attrib.exe` altering system directories and mass deletion in `System32`.

## Mitigation
Enforce strict least privilege. Do not allow regular users to run elevated commands.

## Recovery
Restore the VM snapshot. System File Checker (`sfc /scannow`) from recovery media may help, but snapshot restoration is faster.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
