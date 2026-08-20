# Redirecting Everything to /dev/null

## Platform
Linux

## Risk
MEDIUM

## Description
Redirects all output and errors to `/dev/null`.

## Why It Is Dangerous
Makes it impossible to see logs, errors, or output, which can silently discard changes or mask malicious activity.

## Prerequisites
Shell access.

## Demonstration
```bash
echo "nameserver 8.8.8.8" > /dev/null 2>&1
```

## Expected Behavior
Command returns immediately with no output, even if it failed.

## Detection
Difficult to detect without shell logging (like bash history or auditd).

## Mitigation
Avoid unnecessary redirection when modifying critical files.

## Recovery
No recovery needed, just understand why the command failed by removing the redirection.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
