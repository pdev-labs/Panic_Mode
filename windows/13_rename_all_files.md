# Renaming All Files to One Name (Data Loss)

## Platform
Windows

## Risk
HIGH

## Description
Renames all files in a folder to a new name and extension.

## Why It Is Dangerous
Makes files unusable and destroys file associations.

## Prerequisites
Write access to the target directory.

## Demonstration
```cmd
ren *.* newname.*
```

## Expected Behavior
All files in the current directory are renamed, losing their original identities.

## Detection
Monitor for mass rename operations.

## Mitigation
Implement proper file permissions.

## Recovery
Restore from a backup or VM snapshot. There is no easy command-line fix once renamed.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
