# Delete Everything (rm -rf /)

## Platform
Linux

## Risk
CRITICAL

## Description
Removes all files and directories on the system without confirmation recursively from the root directory.

## Why It Is Dangerous
Wipes the entire OS, including boot files, configurations, and user data.

## Prerequisites
Root (sudo) privileges.

## Demonstration
```bash
rm -rf /
```

## Expected Behavior
Commands stop working as their binaries are deleted. The system eventually crashes and will not boot.

## Detection
Audit daemon (`auditd`) tracking the `rm` command executed by root.

## Mitigation
Do not run commands as root indiscriminately. Modern systems require `--no-preserve-root` to bypass safety checks.

## Recovery
Restore from VM snapshot.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
