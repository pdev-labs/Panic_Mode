# Fork Bomb (Denial of Service)

## Platform
Windows

## Risk
HIGH

## Description
Creates an infinite loop of processes (`%0|%0`), overloading the system and crashing it.

## Why It Is Dangerous
Overloads the CPU and exhausts system memory, causing a total system crash (Denial of Service).

## Prerequisites
Command Prompt access.

## Demonstration
```cmd
%0|%0
```

## Expected Behavior
The system becomes unresponsive as hundreds of command prompt processes spawn rapidly.

## Detection
Monitor for rapid and excessive spawning of `cmd.exe` processes via Sysmon Event ID 1 or Event ID 4688.

## Mitigation
Restrict access to Command Prompt via Group Policy. Safer Alternative: `timeout 10`.

## Recovery
Reboot the virtual machine or revert to a clean snapshot. If caught early, `taskkill /f /im cmd.exe` from an elevated prompt might work, but is difficult during a fork bomb.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
