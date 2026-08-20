# Overwriting Important System Files

## Platform
Linux

## Risk
HIGH

## Description
Uses redirection to overwrite a critical system file like `/etc/passwd`.

## Why It Is Dangerous
Overwriting the user accounts file destroys user definitions, locking everyone out of the system.

## Prerequisites
Root privileges.

## Demonstration
```bash
echo "malicious_code" > /etc/passwd
```

## Expected Behavior
User authentication breaks immediately. `su` and `sudo` fail. SSH logins fail.

## Detection
File integrity monitoring (e.g., AIDE, Tripwire) on `/etc`.

## Mitigation
Restrict root access. Always use append (`>>`) instead of overwrite (`>`) if appending is intended.

## Recovery
Boot into a live CD or rescue environment and restore the file from a backup (`/etc/passwd-`), or restore VM snapshot.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
