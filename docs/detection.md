# Detection Strategies

Defenders must be able to detect malicious or destructive commands before they cause irreversible damage.

## Windows Detection
- **Event Logs:** Monitor Windows Event Logs (e.g., System, Application, Security).
- **Process Creation:** Enable Command Line Auditing (Event ID 4688) to see exactly what commands were run.
- **Sysmon:** Use Microsoft Sysmon to track process creation, registry modifications, and file deletions.
- **Registry Monitoring:** Monitor changes to critical keys.

## Linux Detection
- **Bash History:** Check `~/.bash_history`, although attackers may clear it or use `/dev/null`.
- **Auditd:** Use the Linux Audit Daemon to track execution of commands like `rm`, `dd`, or `mkfs`.
- **Syslog/Journalctl:** Monitor system logs for hardware and service errors.
