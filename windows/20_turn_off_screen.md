# Turning Off the Screen Permanently

## Platform
Windows

## Risk
LOW

## Description
Changes the power configuration to turn off the monitor after 1 minute of inactivity.

## Why It Is Dangerous
Annoys the user and disrupts workflow.

## Prerequisites
Command Prompt access.

## Demonstration
```cmd
powercfg -change -monitor-timeout-ac 1
```

## Expected Behavior
The screen turns off quickly when idle.

## Detection
Monitor `powercfg` execution.

## Mitigation
Enforce power policies via Group Policy.

## Recovery
Run `powercfg -change -monitor-timeout-ac 30` to reset the timeout to 30 minutes.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
