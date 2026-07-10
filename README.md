# 🚨 Panic Mode

Welcome to **Panic Mode**! 

[![GitHub Profile](https://img.shields.io/badge/Profile-pdev--labs-blue?style=for-the-badge&logo=github)](https://github.com/pdev-labs)
[![GitHub Repo](https://img.shields.io/badge/Repository-Panic__Mode-gray?style=for-the-badge&logo=github)](https://github.com/pdev-labs/Panic_Mode)

> A theoretical security reference for extreme incident response scenarios. This repository documents commands that can be used to permanently disable or wipe a system when it is actively being compromised and physical/remote destruction is the only way to protect sensitive data.

⚠️ **WARNING: The commands listed below are highly destructive. Running them will result in irreversible data loss and render the operating system unbootable. Use them for educational and emergency security purposes ONLY.**

## 🛑 Extreme Security Measures

In the event of an imminent physical breach or critical remote compromise where data cannot be allowed to fall into the wrong hands, the following commands can be executed to "brick" the system.

### Windows: Boot Configuration Destruction

```cmd
bcdedit /delete {current} /f
```

**Use Case (Security Purposes Only):**
This command forcefully deletes a boot entry from the Boot Configuration Data (BCD) store. 
- **What it does:** By deleting the `{current}` identifier (or the boot manager itself), you instantly remove the system's ability to boot into the operating system.
- **Emergency Application:** In a panic scenario where an adversary is attempting to extract data or restart the machine into a compromised state, destroying the bootloader permanently bricks the logical boot process and prevents the OS from loading again.
- **Note:** The `/f` flag forces the deletion without confirmation, ensuring rapid execution.

### Linux: The "Doomsday" Command

```bash
rm -rf / --no-preserve-root
```

**Use Case (Security Purposes Only):**
This is widely known as Linux's most dangerous command. It recursively (`-r`) and forcefully (`-f`) deletes all files starting from the root directory (`/`).
- **What it does:** It aggressively deletes system binaries, configuration files, running processes' backing files, and user data across all mounted filesystems.
- **Emergency Application:** While cryptographic erasure (destroying encryption keys) is the best way to secure data, executing this command acts as a rapid logical wipe if proper wiping tools are unavailable. It will immediately disrupt an attacker's foothold and destroy the OS from the inside out.

### macOS: APFS Container Destruction

```bash
diskutil apfs deleteContainer disk0
```
*(Note: disk0 is typically the internal boot drive)*

**Use Case (Security Purposes Only):**
This command forcefully deletes the APFS container that houses the macOS operating system and user data volumes.
- **What it does:** It destroys the logical partition structure of the boot drive, rendering the data instantly inaccessible to the operating system and preventing the Mac from booting. 
- **Emergency Application:** If FileVault is enabled, deleting the container or rapidly destroying the cryptographic keys (`fdesetup destroycryptouser`) is the fastest way to cryptographically shred the data and prevent physical or logical extraction during an incident.

## 🤝 Contributing

Contributions are welcome. If you have additional "panic mode" concepts, scripts, or commands for other environments (macOS, hypervisors, etc.), feel free to open a Pull Request. Please ensure they are documented strictly for educational and defensive emergency use.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
