# Overwriting the Bootloader (bootrec /fixmbr)

## Platform
Windows

## Risk
HIGH

## Description
Rewrites the Master Boot Record (MBR), which can make the system unbootable if misused.

## Why It Is Dangerous
Can prevent the operating system from loading by corrupting or replacing the bootloader.

## Prerequisites
Windows Recovery Environment or elevated permissions.

## Demonstration
```cmd
bootrec /fixmbr
```

## Expected Behavior
Modifies the MBR. If misused, the system will fail to boot with an OS not found error.

## Detection
Monitor for direct disk access and modifications to the boot sector.

## Mitigation
Protect the boot process using Secure Boot and restrict physical/recovery access.

## Recovery
Use a Windows Recovery USB to repair the bootloader or restore the VM snapshot.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
