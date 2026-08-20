# Moving Everything to the Trash (mv / /dev/null)

## Platform
Linux

## Risk
CRITICAL

## Description
Attempts to move all system files into `/dev/null`.

## Why It Is Dangerous
Effectively deletes all files on the system.

## Prerequisites
Root privileges.

## Demonstration
```bash
mv / /dev/null
```

## Expected Behavior
Files are deleted. System functionality ceases.

## Detection
Audit daemon tracking `mv` from root directory.

## Mitigation
Do not run untrusted scripts as root.

## Recovery
Restore from VM snapshot.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
