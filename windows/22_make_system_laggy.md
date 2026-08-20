# Making the System Laggy (timeout command)

## Platform
Windows

## Risk
LOW

## Description
Creates a loop that repeatedly executes the timeout command.

## Why It Is Dangerous
Consumes minor resources but mostly creates an endless delay script.

## Prerequisites
Command Prompt access.

## Demonstration
```cmd
:loop
timeout /t 100
goto loop
```

## Expected Behavior
The script waits in a loop.

## Detection
Minimal impact, standard script behavior.

## Mitigation
Close the command prompt.

## Recovery
Close the Command Prompt window.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
