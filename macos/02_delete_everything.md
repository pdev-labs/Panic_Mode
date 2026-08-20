# Delete Everything (rm -rf /)

## Platform
macOS

## Risk
CRITICAL

## Description
Attempts to recursively remove all files starting from the root directory.

## Why It Is Dangerous
Deletes user data and unprotected system files. Note: System Integrity Protection (SIP) protects core OS files in modern macOS.

## Prerequisites
Root (sudo) privileges.

## Demonstration
```bash
rm -rf /
```

## Expected Behavior
User data, applications, and settings are rapidly deleted. SIP will block deletion of `/System`, `/bin`, etc.

## Detection
Monitor for `rm` executed by root.

## Mitigation
Leave System Integrity Protection (SIP) enabled. Do not grant unnecessary sudo privileges.

## Recovery
Reinstall macOS via Recovery Mode and restore data from Time Machine.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
