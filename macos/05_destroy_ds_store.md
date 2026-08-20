# Destroying .DS_Store Files

## Platform
macOS

## Risk
INFO

## Description
Recursively finds and deletes all `.DS_Store` files across the system.

## Why It Is Dangerous
Wipes all custom folder views, icon placements, and background settings in Finder.

## Prerequisites
Root privileges (to access all directories).

## Demonstration
```bash
sudo find / -name ".DS_Store" -depth -exec rm {} \;
```

## Expected Behavior
Finder loses all custom view settings for every folder.

## Detection
Monitor for mass file deletion of hidden files.

## Mitigation
Not inherently malicious, often used for cleanup, but restrict root access.

## Recovery
macOS will automatically regenerate `.DS_Store` files with default settings as folders are opened.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
