# Format the Hard Drive

## Platform
Linux

## Risk
CRITICAL

## Description
Formats the disk with an ext4 file system, wiping existing partitions.

## Why It Is Dangerous
Deletes all partitions and data, making recovery difficult.

## Prerequisites
Root privileges.

## Demonstration
```bash
mkfs.ext4 /dev/sda
```

## Expected Behavior
The block device is reformatted, destroying the data.

## Detection
Monitor `mkfs` execution on root or data drives.

## Mitigation
Restrict root access.

## Recovery
Restore from VM snapshot.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
