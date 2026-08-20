# Changing the Computer Name to a Random String

## Platform
Windows

## Risk
LOW

## Description
Changes the PC name to a random number using WMIC.

## Why It Is Dangerous
Can cause issues with Active Directory domains or network shares relying on the hostname.

## Prerequisites
Elevated Command Prompt access.

## Demonstration
```cmd
wmic computersystem where name="%computername%" call rename name="%random%"
```

## Expected Behavior
The hostname is changed upon the next reboot.

## Detection
Monitor for `wmic` executing rename operations.

## Mitigation
Restrict administrative privileges.

## Recovery
Go to Settings -> System -> About and rename the PC back to its original name.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
