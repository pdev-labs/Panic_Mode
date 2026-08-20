# Corrupting the Master Boot Record

## Platform
Windows

## Risk
CRITICAL

## Description
Overwrites the physical drive directly, corrupting the Master Boot Record (MBR).

## Why It Is Dangerous
Prevents the system from booting by destroying the partition table and bootloader.

## Prerequisites
Elevated Command Prompt access.

## Demonstration
```cmd
echo something > \\.\PhysicalDrive0
```

## Expected Behavior
The system will operate until restart, at which point it will display 'Operating System not found' or similar errors.

## Detection
Monitor for raw disk access (writes to `\\.\PhysicalDriveX`).

## Mitigation
Use UEFI and Secure Boot, and restrict administrative access.

## Recovery
Restore the VM snapshot. In some cases, bootrec /fixmbr from recovery media can repair it if the partition table is intact.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
