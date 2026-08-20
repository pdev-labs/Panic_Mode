# Enabling Auto Shutdown

## Platform
Windows

## Risk
LOW

## Description
Forces the system to shut down after a specified delay.

## Why It Is Dangerous
Can cause unsaved data loss and disrupt availability.

## Prerequisites
Command Prompt access.

## Demonstration
```cmd
shutdown -s -t 10 -c "System Error: Restarting..."
```

## Expected Behavior
A warning dialog appears, and the system shuts down after 10 seconds.

## Detection
Monitor for `shutdown.exe` execution with delay parameters.

## Mitigation
Restrict use of the shutdown command.

## Recovery
Run `shutdown -a` to cancel the shutdown before the timer expires.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
