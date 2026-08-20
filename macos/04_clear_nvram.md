# Clearing NVRAM

## Platform
macOS

## Risk
LOW

## Description
Clears the Non-Volatile Random-Access Memory (NVRAM).

## Why It Is Dangerous
Resets hardware settings like volume, display resolution, startup disk selection, and kernel panics info. Can cause boot delays or issues if a custom startup disk was required.

## Prerequisites
Root (sudo) privileges.

## Demonstration
```bash
sudo nvram -c
```

## Expected Behavior
System settings revert to hardware defaults on the next reboot.

## Detection
Monitor `nvram` command execution.

## Mitigation
Restrict root access.

## Recovery
Reboot and reset preferences in System Settings.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
