# Setting a Null Password for Root

## Platform
Linux

## Risk
HIGH

## Description
Removes the root password.

## Why It Is Dangerous
Makes the system highly vulnerable by allowing passwordless root access.

## Prerequisites
Root privileges.

## Demonstration
```bash
echo "" | passwd --stdin root
```

## Expected Behavior
Root account can be accessed without a password (depending on SSH/PAM configuration).

## Detection
Monitor for changes to `/etc/shadow` or syslog events for `passwd`.

## Mitigation
Enforce strong password policies using PAM.

## Recovery
Set a new root password using `passwd root` or restore VM snapshot.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
