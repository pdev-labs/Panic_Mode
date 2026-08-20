# Wipe the Hard Drive (dd command)

## Platform
Linux

## Risk
CRITICAL

## Description
Overwrites the entire disk (/dev/sda) with zeros.

## Why It Is Dangerous
Permanently erases all data, partition tables, and file systems on the specified block device.

## Prerequisites
Root privileges.

## Demonstration
```bash
dd if=/dev/zero of=/dev/sda bs=1M
```

## Expected Behavior
Data is silently overwritten. System eventually crashes as files it tries to read from disk are gone.

## Detection
Monitor execution of `dd` writing to raw block devices.

## Mitigation
Restrict root access. Safer Alternative: `dd if=/dev/zero of=testfile bs=1M count=10`.

## Recovery
Restore from VM snapshot.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
