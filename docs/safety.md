# Safety Guidelines

When researching and testing the commands in this repository, strict adherence to safety protocols is required.

## The Prime Directive
**NEVER run these commands on a production system, a shared server, or your primary daily-driver workstation.**

## Safety Protocols
1. **Isolated Environment:** Always use a Virtual Machine (VM).
2. **Snapshots:** Always take a clean snapshot of your VM before running any command.
3. **Air Gap (Network Isolation):** Unless network connectivity is explicitly required for the test, disconnect the VM's virtual network adapter.
4. **No Shared Folders:** Disable Host-to-Guest file sharing (like VMware Shared Folders or VirtualBox Shared Folders) to prevent a command inside the VM from destroying files on your host machine.
5. **No Production Data:** Never store personal or sensitive data inside your testing VM.
