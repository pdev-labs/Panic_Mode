# Locking the User Out

## Platform
Windows

## Risk
HIGH

## Description
Disables the administrator account.

## Why It Is Dangerous
Prevents administrative login, locking out control of the system.

## Prerequisites
Elevated Command Prompt access.

## Demonstration
```cmd
net user administrator /active:no
```

## Expected Behavior
The administrator account is disabled and cannot be used to log in.

## Detection
Monitor for `net user` commands altering account status.

## Mitigation
Implement multiple administrative accounts (e.g., LAPS).

## Recovery
Boot into Safe Mode or Recovery Environment and re-enable the account: `net user administrator /active:yes`.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
