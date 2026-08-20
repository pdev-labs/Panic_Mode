# Disabling the Registry (reg delete HKCR /f)

## Platform
Windows

## Risk
CRITICAL

## Description
Deletes the entire HKEY_CLASSES_ROOT registry hive.

## Why It Is Dangerous
Causes immediate system failure as Windows relies on this hive for application associations and COM object registration.

## Prerequisites
Elevated Command Prompt access.

## Demonstration
```cmd
reg delete HKCR /f
```

## Expected Behavior
Applications fail to launch, the desktop environment may crash, and the system becomes unusable.

## Detection
Monitor for `reg.exe` commands targeting root hives.

## Mitigation
Restrict administrative privileges and monitor registry access.

## Recovery
Restore from a VM snapshot or use System Restore if enabled.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
