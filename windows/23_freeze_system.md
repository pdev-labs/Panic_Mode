# Permanently Freezing the System

## Platform
Windows

## Risk
HIGH

## Description
Opens infinite instances of Notepad.

## Why It Is Dangerous
Consumes all available RAM and CPU, freezing the system.

## Prerequisites
Command Prompt access.

## Demonstration
```cmd
echo off
:loop
start notepad
goto loop
```

## Expected Behavior
The GUI becomes completely unresponsive as Notepad instances flood the screen.

## Detection
Monitor for rapid spawning of `notepad.exe`.

## Mitigation
Restrict command prompt execution.

## Recovery
Use Task Manager (Ctrl + Shift + Esc) to kill the processes, or force restart the VM.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
