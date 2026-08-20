# Changing File Permissions on Everything (chmod 000 /)

## Platform
Linux

## Risk
CRITICAL

## Description
Recursively changes file permissions for the entire system to 000.

## Why It Is Dangerous
Makes all files unreadable, unwritable, and unexecutable, effectively bricking the system.

## Prerequisites
Root privileges.

## Demonstration
```bash
chmod -R 000 /
```

## Expected Behavior
Commands immediately return 'Permission denied'. No programs can be executed or read.

## Detection
Audit daemon tracking `chmod` on the root directory.

## Mitigation
Restrict root privileges.

## Recovery
Extremely difficult to fix manually since `chmod` itself becomes unexecutable. Restore VM snapshot. (Theoretical fix: Boot from Live CD and `chmod -R 755 /` but this destroys specific custom permissions like setuid bits).

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
