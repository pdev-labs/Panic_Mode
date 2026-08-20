# Disabling Gatekeeper

## Platform
macOS

## Risk
HIGH

## Description
Disables macOS Gatekeeper, the security subsystem that verifies downloaded applications.

## Why It Is Dangerous
Allows any application, including unsigned malware, to run without warning the user.

## Prerequisites
Root (sudo) privileges.

## Demonstration
```bash
sudo spctl --master-disable
```

## Expected Behavior
The 'Allow apps downloaded from: Anywhere' option appears in System Preferences and is selected.

## Detection
Monitor for `spctl` execution altering the master assessment.

## Mitigation
Use MDM (Mobile Device Management) to enforce Gatekeeper settings.

## Recovery
Run `sudo spctl --master-enable` to restore Gatekeeper.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
