# Panic Mode

**Panic Mode** is a strictly educational cybersecurity repository designed for threat awareness, defensive research, incident-response training, and controlled laboratory experimentation.

## What is Panic Mode?
This repository documents potentially dangerous commands and techniques across multiple operating systems. It explains what these commands do, why they are dangerous, and how defenders can detect, mitigate, and recover from them.

## Educational Purpose
The primary goal is to educate students, researchers, system administrators, and security professionals. By understanding how destructive commands operate, defenders can better protect their systems and organizations.

## Supported Operating Systems
- Linux
- Windows
- macOS

## Risk Classification
Each technique is classified by risk:
- **INFO**: Educational behavior, minimal risk.
- **LOW**: Minor impact, easily recoverable.
- **MEDIUM**: Noticeable impact, may require effort to recover.
- **HIGH**: Significant damage or data loss, difficult to recover.
- **CRITICAL**: System destruction, complete data loss, unbootable state.

## Laboratory/VM Requirements
**DO NOT RUN THESE COMMANDS ON YOUR PRIMARY MACHINE OR ANY PRODUCTION SYSTEM.**
Testing must only be performed in an isolated, disposable Virtual Machine (VM). See [docs/vm-setup.md](docs/vm-setup.md) for details on setting up a safe lab environment.

## Safety Warnings
Always take a VM snapshot before testing. Disconnect the VM from any sensitive networks. Never test against a user's real machine, third-party system, or network.

## Defensive Learning Objectives
Each technique includes information on:
- **Detection**: Identifying the behavior through logs or monitoring.
- **Mitigation**: Configuring systems to prevent the execution or impact.
- **Recovery**: Steps to return the system to a clean state.

## Repository Structure
- `linux/` - Linux specific techniques
- `windows/` - Windows specific techniques
- `macos/` - macOS specific techniques (Empty)
- `docs/` - Safety, VM setup, and defense documentation

## How to Contribute
See [CONTRIBUTING.md](CONTRIBUTING.md).

## Legal and Ethical Notice
See [DISCLAIMER.md](DISCLAIMER.md). This project is NOT intended to encourage unauthorized activity.

## Command Reference

### Windows
- **Fork Bomb (Denial of Service)**: `%0|%0` ([Details](windows/01_fork_bomb.md))
- **Delete Everything (del /s /q /f C:\)**: `del /s /q /f C:\` ([Details](windows/02_delete_everything.md))
- **Format the Hard Drive**: `format C: /fs:NTFS` ([Details](windows/03_format_hard_drive.md))
- **Overwriting the Bootloader (bootrec /fixmbr)**: `bootrec /fixmbr` ([Details](windows/04_overwrite_bootloader.md))
- **Infinite File Creation (Consumes Disk Space)**: `:a
echo This is a test >> %random%.txt
goto a` ([Details](windows/05_infinite_file_creation.md))
- **Disabling System Files**: `attrib -s -h -r C:\Windows\system32\*.* /s /d
del C:\Windows\system32\*.dll` ([Details](windows/06_disable_system_files.md))
- **Disabling the Registry (reg delete HKCR /f)**: `reg delete HKCR /f` ([Details](windows/07_disable_registry.md))
- **Making the System Unusable (rd /s /q C:\Windows)**: `rd /s /q C:\Windows` ([Details](windows/08_make_system_unusable.md))
- **Disabling Task Manager**: `reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" /v DisableTaskMgr /t REG_DWORD /d 1 /f` ([Details](windows/09_disable_task_manager.md))
- **Corrupting the Master Boot Record**: `echo something > \\.\PhysicalDrive0` ([Details](windows/10_corrupt_mbr.md))
- **Creating an Infinite Loop (High CPU Usage)**: `:a
start cmd /k
goto a` ([Details](windows/11_infinite_cmd_loop.md))
- **Hiding All Files on the System**: `attrib +h +s +r C:\*.* /s /d` ([Details](windows/12_hide_all_files.md))
- **Renaming All Files to One Name (Data Loss)**: `ren *.* newname.*` ([Details](windows/13_rename_all_files.md))
- **Disabling Internet Access**: `ipconfig /release` ([Details](windows/14_disable_internet.md))
- **Creating a Fake Blue Screen of Death (BSOD)**: `taskkill /f /im svchost.exe` ([Details](windows/15_fake_bsod.md))
- **Making the System Unbootable (bcdedit command)**: `bcdedit /delete {default}` ([Details](windows/16_make_system_unbootable.md))
- **Disabling the Keyboard**: `reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\i8042prt" /v Start /t REG_DWORD /d 4 /f
shutdown -r -t 0` ([Details](windows/17_disable_keyboard.md))
- **Enabling Auto Shutdown**: `shutdown -s -t 10 -c "System Error: Restarting..."` ([Details](windows/18_enable_auto_shutdown.md))
- **Disabling the Mouse**: `reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Mouclass" /v Start /t REG_DWORD /d 4 /f
shutdown -r -t 0` ([Details](windows/19_disable_mouse.md))
- **Turning Off the Screen Permanently**: `powercfg -change -monitor-timeout-ac 1` ([Details](windows/20_turn_off_screen.md))
- **Locking the User Out**: `net user administrator /active:no` ([Details](windows/21_lock_user_out.md))
- **Making the System Laggy (timeout command)**: `:loop
timeout /t 100
goto loop` ([Details](windows/22_make_system_laggy.md))
- **Permanently Freezing the System**: `echo off
:loop
start notepad
goto loop` ([Details](windows/23_freeze_system.md))
- **Changing the Computer Name to a Random String**: `wmic computersystem where name="%computername%" call rename name="%random%"` ([Details](windows/24_change_computer_name.md))
- **Destroying Windows Explorer (explorer.exe)**: `taskkill /f /im explorer.exe` ([Details](windows/25_destroy_windows_explorer.md))

### Linux
- **Fork Bomb (Denial of Service)**: `:(){ :|:& };:` ([Details](linux/01_fork_bomb.md))
- **Delete Everything (rm -rf /)**: `rm -rf /` ([Details](linux/02_delete_everything.md))
- **Wipe the Hard Drive (dd command)**: `dd if=/dev/zero of=/dev/sda bs=1M` ([Details](linux/03_wipe_hard_drive.md))
- **Redirecting Everything to /dev/null**: `echo "nameserver 8.8.8.8" > /dev/null 2>&1` ([Details](linux/04_redirect_to_dev_null.md))
- **Format the Hard Drive**: `mkfs.ext4 /dev/sda` ([Details](linux/05_format_hard_drive.md))
- **Overwriting Important System Files**: `echo "malicious_code" > /etc/passwd` ([Details](linux/06_overwrite_system_files.md))
- **Moving Everything to the Trash (mv / /dev/null)**: `mv / /dev/null` ([Details](linux/07_move_everything_to_trash.md))
- **Infinite While Loop (High CPU Usage)**: `while true; do fork & done` ([Details](linux/08_infinite_while_loop.md))
- **Changing File Permissions on Everything (chmod 000 /)**: `chmod -R 000 /` ([Details](linux/09_change_file_permissions.md))
- **Setting a Null Password for Root**: `echo "" | passwd --stdin root` ([Details](linux/10_null_password_root.md))

### macOS
- **Fork Bomb (Denial of Service)**: `:(){ :|:& };:` ([Details](macos/01_fork_bomb.md))
- **Delete Everything (rm -rf /)**: `rm -rf /` ([Details](macos/02_delete_everything.md))
- **Disabling Gatekeeper**: `sudo spctl --master-disable` ([Details](macos/03_disable_gatekeeper.md))
- **Clearing NVRAM**: `sudo nvram -c` ([Details](macos/04_clear_nvram.md))
- **Destroying .DS_Store Files**: `sudo find / -name ".DS_Store" -depth -exec rm {} \;` ([Details](macos/05_destroy_ds_store.md))
