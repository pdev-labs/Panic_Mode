# Creating an Infinite Loop (High CPU Usage)

## Platform
Windows

## Risk
HIGH

## Description
Opens infinite Command Prompt windows, crashing the system.

## Why It Is Dangerous
Exhausts memory and CPU resources, causing a Denial of Service.

## Prerequisites
Command Prompt access.

## Demonstration
```cmd
:a
start cmd /k
goto a
```

## Expected Behavior
Hundreds of cmd windows spawn rapidly, freezing the GUI.

## Detection
Monitor for rapid spawning of `cmd.exe` processes.

## Mitigation
Restrict access to cmd.exe via Group Policy.

## Recovery
Press Ctrl + Shift + Esc to open Task Manager and end all `cmd.exe` processes, or reset the VM.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
