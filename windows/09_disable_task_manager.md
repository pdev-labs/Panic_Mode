# Disabling Task Manager

## Platform
Windows

## Risk
MEDIUM

## Description
Modifies the registry to disable Task Manager.

## Why It Is Dangerous
Prevents users from stopping malicious processes or troubleshooting system issues.

## Prerequisites
Elevated Command Prompt access.

## Demonstration
```cmd
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" /v DisableTaskMgr /t REG_DWORD /d 1 /f
```

## Expected Behavior
Attempting to open Task Manager results in an error message stating it has been disabled by your administrator.

## Detection
Monitor registry modifications to `DisableTaskMgr`.

## Mitigation
Use Group Policy to lock down registry editing tools and enforce Task Manager availability.

## Recovery
Run the fix command: `reg delete "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" /v DisableTaskMgr /f` or restore snapshot.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
