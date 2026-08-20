
const commandsData = [
  {
    "name": "Fork Bomb (Denial of Service)",
    "platform": "Windows",
    "risk": "HIGH",
    "desc": "Creates an infinite loop of processes (`%0|%0`), overloading the system and crashing it.",
    "cmd": "%0|%0",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/01_fork_bomb.md"
  },
  {
    "name": "Delete Everything (del /s /q /f C:\\)",
    "platform": "Windows",
    "risk": "CRITICAL",
    "desc": "Deletes all files on the C:\\ drive without confirmation.",
    "cmd": "del /s /q /f C:\\",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/02_delete_everything.md"
  },
  {
    "name": "Format the Hard Drive",
    "platform": "Windows",
    "risk": "CRITICAL",
    "desc": "Formats the entire C: drive, deleting everything.",
    "cmd": "format C: /fs:NTFS",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/03_format_hard_drive.md"
  },
  {
    "name": "Overwriting the Bootloader (bootrec /fixmbr)",
    "platform": "Windows",
    "risk": "HIGH",
    "desc": "Rewrites the Master Boot Record (MBR), which can make the system unbootable if misused.",
    "cmd": "bootrec /fixmbr",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/04_overwrite_bootloader.md"
  },
  {
    "name": "Infinite File Creation (Consumes Disk Space)",
    "platform": "Windows",
    "risk": "MEDIUM",
    "desc": "Creates an infinite number of text files, filling up the disk.",
    "cmd": ":a\necho This is a test >> %random%.txt\ngoto a",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/05_infinite_file_creation.md"
  },
  {
    "name": "Disabling System Files",
    "platform": "Windows",
    "risk": "CRITICAL",
    "desc": "Removes system attributes and deletes critical system files (.dll) from System32.",
    "cmd": "attrib -s -h -r C:\\Windows\\system32\\*.* /s /d\ndel C:\\Windows\\system32\\*.dll",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/06_disable_system_files.md"
  },
  {
    "name": "Disabling the Registry (reg delete HKCR /f)",
    "platform": "Windows",
    "risk": "CRITICAL",
    "desc": "Deletes the entire HKEY_CLASSES_ROOT registry hive.",
    "cmd": "reg delete HKCR /f",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/07_disable_registry.md"
  },
  {
    "name": "Making the System Unusable (rd /s /q C:\\Windows)",
    "platform": "Windows",
    "risk": "CRITICAL",
    "desc": "Attempts to recursively delete the entire Windows folder.",
    "cmd": "rd /s /q C:\\Windows",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/08_make_system_unusable.md"
  },
  {
    "name": "Disabling Task Manager",
    "platform": "Windows",
    "risk": "MEDIUM",
    "desc": "Modifies the registry to disable Task Manager.",
    "cmd": "reg add \"HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\" /v DisableTaskMgr /t REG_DWORD /d 1 /f",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/09_disable_task_manager.md"
  },
  {
    "name": "Corrupting the Master Boot Record",
    "platform": "Windows",
    "risk": "CRITICAL",
    "desc": "Overwrites the physical drive directly, corrupting the Master Boot Record (MBR).",
    "cmd": "echo something > \\\\.\\PhysicalDrive0",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/10_corrupt_mbr.md"
  },
  {
    "name": "Creating an Infinite Loop (High CPU Usage)",
    "platform": "Windows",
    "risk": "HIGH",
    "desc": "Opens infinite Command Prompt windows, crashing the system.",
    "cmd": ":a\nstart cmd /k\ngoto a",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/11_infinite_cmd_loop.md"
  },
  {
    "name": "Hiding All Files on the System",
    "platform": "Windows",
    "risk": "MEDIUM",
    "desc": "Sets the hidden, system, and read-only attributes on all files on the C: drive.",
    "cmd": "attrib +h +s +r C:\\*.* /s /d",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/12_hide_all_files.md"
  },
  {
    "name": "Renaming All Files to One Name (Data Loss)",
    "platform": "Windows",
    "risk": "HIGH",
    "desc": "Renames all files in a folder to a new name and extension.",
    "cmd": "ren *.* newname.*",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/13_rename_all_files.md"
  },
  {
    "name": "Disabling Internet Access",
    "platform": "Windows",
    "risk": "LOW",
    "desc": "Releases the IP address from the DHCP server.",
    "cmd": "ipconfig /release",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/14_disable_internet.md"
  },
  {
    "name": "Creating a Fake Blue Screen of Death (BSOD)",
    "platform": "Windows",
    "risk": "MEDIUM",
    "desc": "Kills a critical system process (svchost.exe) to intentionally crash the system.",
    "cmd": "taskkill /f /im svchost.exe",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/15_fake_bsod.md"
  },
  {
    "name": "Making the System Unbootable (bcdedit command)",
    "platform": "Windows",
    "risk": "CRITICAL",
    "desc": "Deletes the default Windows boot entry from the Boot Configuration Data (BCD) store.",
    "cmd": "bcdedit /delete {default}",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/16_make_system_unbootable.md"
  },
  {
    "name": "Disabling the Keyboard",
    "platform": "Windows",
    "risk": "MEDIUM",
    "desc": "Modifies the registry to disable the standard PS/2 keyboard driver (i8042prt).",
    "cmd": "reg add \"HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\i8042prt\" /v Start /t REG_DWORD /d 4 /f\nshutdown -r -t 0",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/17_disable_keyboard.md"
  },
  {
    "name": "Enabling Auto Shutdown",
    "platform": "Windows",
    "risk": "LOW",
    "desc": "Forces the system to shut down after a specified delay.",
    "cmd": "shutdown -s -t 10 -c \"System Error: Restarting...\"",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/18_enable_auto_shutdown.md"
  },
  {
    "name": "Disabling the Mouse",
    "platform": "Windows",
    "risk": "MEDIUM",
    "desc": "Modifies the registry to disable the mouse class driver (Mouclass).",
    "cmd": "reg add \"HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Mouclass\" /v Start /t REG_DWORD /d 4 /f\nshutdown -r -t 0",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/19_disable_mouse.md"
  },
  {
    "name": "Turning Off the Screen Permanently",
    "platform": "Windows",
    "risk": "LOW",
    "desc": "Changes the power configuration to turn off the monitor after 1 minute of inactivity.",
    "cmd": "powercfg -change -monitor-timeout-ac 1",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/20_turn_off_screen.md"
  },
  {
    "name": "Locking the User Out",
    "platform": "Windows",
    "risk": "HIGH",
    "desc": "Disables the administrator account.",
    "cmd": "net user administrator /active:no",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/21_lock_user_out.md"
  },
  {
    "name": "Making the System Laggy (timeout command)",
    "platform": "Windows",
    "risk": "LOW",
    "desc": "Creates a loop that repeatedly executes the timeout command.",
    "cmd": ":loop\ntimeout /t 100\ngoto loop",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/22_make_system_laggy.md"
  },
  {
    "name": "Permanently Freezing the System",
    "platform": "Windows",
    "risk": "HIGH",
    "desc": "Opens infinite instances of Notepad.",
    "cmd": "echo off\n:loop\nstart notepad\ngoto loop",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/23_freeze_system.md"
  },
  {
    "name": "Changing the Computer Name to a Random String",
    "platform": "Windows",
    "risk": "LOW",
    "desc": "Changes the PC name to a random number using WMIC.",
    "cmd": "wmic computersystem where name=\"%computername%\" call rename name=\"%random%\"",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/24_change_computer_name.md"
  },
  {
    "name": "Destroying Windows Explorer (explorer.exe)",
    "platform": "Windows",
    "risk": "MEDIUM",
    "desc": "Kills the Windows Explorer process.",
    "cmd": "taskkill /f /im explorer.exe",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/windows/25_destroy_windows_explorer.md"
  },
  {
    "name": "Fork Bomb (Denial of Service)",
    "platform": "Linux",
    "risk": "HIGH",
    "desc": "Overloads the system by creating an exponential number of processes.",
    "cmd": ":(){ :|:& };:",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/linux/01_fork_bomb.md"
  },
  {
    "name": "Delete Everything (rm -rf /)",
    "platform": "Linux",
    "risk": "CRITICAL",
    "desc": "Removes all files and directories on the system without confirmation recursively from the root directory.",
    "cmd": "rm -rf /",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/linux/02_delete_everything.md"
  },
  {
    "name": "Wipe the Hard Drive (dd command)",
    "platform": "Linux",
    "risk": "CRITICAL",
    "desc": "Overwrites the entire disk (/dev/sda) with zeros.",
    "cmd": "dd if=/dev/zero of=/dev/sda bs=1M",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/linux/03_wipe_hard_drive.md"
  },
  {
    "name": "Redirecting Everything to /dev/null",
    "platform": "Linux",
    "risk": "MEDIUM",
    "desc": "Redirects all output and errors to `/dev/null`.",
    "cmd": "echo \"nameserver 8.8.8.8\" > /dev/null 2>&1",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/linux/04_redirect_to_dev_null.md"
  },
  {
    "name": "Format the Hard Drive",
    "platform": "Linux",
    "risk": "CRITICAL",
    "desc": "Formats the disk with an ext4 file system, wiping existing partitions.",
    "cmd": "mkfs.ext4 /dev/sda",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/linux/05_format_hard_drive.md"
  },
  {
    "name": "Overwriting Important System Files",
    "platform": "Linux",
    "risk": "HIGH",
    "desc": "Uses redirection to overwrite a critical system file like `/etc/passwd`.",
    "cmd": "echo \"malicious_code\" > /etc/passwd",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/linux/06_overwrite_system_files.md"
  },
  {
    "name": "Moving Everything to the Trash (mv / /dev/null)",
    "platform": "Linux",
    "risk": "CRITICAL",
    "desc": "Attempts to move all system files into `/dev/null`.",
    "cmd": "mv / /dev/null",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/linux/07_move_everything_to_trash.md"
  },
  {
    "name": "Infinite While Loop (High CPU Usage)",
    "platform": "Linux",
    "risk": "HIGH",
    "desc": "Spawns infinite processes in a bash loop.",
    "cmd": "while true; do fork & done",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/linux/08_infinite_while_loop.md"
  },
  {
    "name": "Changing File Permissions on Everything (chmod 000 /)",
    "platform": "Linux",
    "risk": "CRITICAL",
    "desc": "Recursively changes file permissions for the entire system to 000.",
    "cmd": "chmod -R 000 /",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/linux/09_change_file_permissions.md"
  },
  {
    "name": "Setting a Null Password for Root",
    "platform": "Linux",
    "risk": "HIGH",
    "desc": "Removes the root password.",
    "cmd": "echo \"\" | passwd --stdin root",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/linux/10_null_password_root.md"
  },
  {
    "name": "Fork Bomb (Denial of Service)",
    "platform": "Macos",
    "risk": "HIGH",
    "desc": "Overloads the system by creating an exponential number of processes.",
    "cmd": ":(){ :|:& };:",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/macos/01_fork_bomb.md"
  },
  {
    "name": "Delete Everything (rm -rf /)",
    "platform": "Macos",
    "risk": "CRITICAL",
    "desc": "Attempts to recursively remove all files starting from the root directory.",
    "cmd": "rm -rf /",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/macos/02_delete_everything.md"
  },
  {
    "name": "Disabling Gatekeeper",
    "platform": "Macos",
    "risk": "HIGH",
    "desc": "Disables macOS Gatekeeper, the security subsystem that verifies downloaded applications.",
    "cmd": "sudo spctl --master-disable",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/macos/03_disable_gatekeeper.md"
  },
  {
    "name": "Clearing NVRAM",
    "platform": "Macos",
    "risk": "LOW",
    "desc": "Clears the Non-Volatile Random-Access Memory (NVRAM).",
    "cmd": "sudo nvram -c",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/macos/04_clear_nvram.md"
  },
  {
    "name": "Destroying .DS_Store Files",
    "platform": "Macos",
    "risk": "INFO",
    "desc": "Recursively finds and deletes all `.DS_Store` files across the system.",
    "cmd": "sudo find / -name \".DS_Store\" -depth -exec rm {} \\;",
    "link": "https://github.com/pdev-labs/Panic_Mode/tree/main/macos/05_destroy_ds_store.md"
  }
];

const grid = document.getElementById('commandsGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentFilter = 'All';

function renderCommands() {
    grid.innerHTML = '';
    const searchTerm = searchInput.value.toLowerCase();
    
    const filtered = commandsData.filter(cmd => {
        const matchesSearch = cmd.name.toLowerCase().includes(searchTerm) || 
                              cmd.cmd.toLowerCase().includes(searchTerm) ||
                              cmd.desc.toLowerCase().includes(searchTerm);
        const matchesFilter = currentFilter === 'All' || cmd.platform === currentFilter;
        return matchesSearch && matchesFilter;
    });

    filtered.forEach(cmd => {
        const card = document.createElement('div');
        card.className = 'command-card';
        
        let riskClass = 'risk-low';
        if (cmd.risk === 'MEDIUM') riskClass = 'risk-medium';
        if (cmd.risk === 'HIGH') riskClass = 'risk-high';
        if (cmd.risk === 'CRITICAL') riskClass = 'risk-critical';
        if (cmd.risk === 'INFO') riskClass = 'risk-info';

        card.innerHTML = `
            <div class="card-header">
                <h3>${cmd.name}</h3>
                <span class="badge platform-${cmd.platform.toLowerCase()}">${cmd.platform}</span>
            </div>
            <p class="desc">${cmd.desc}</p>
            <div class="code-wrapper">
                <button class="copy-btn">Copy</button>
                <div class="code-block">
                    <code>${cmd.cmd.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>
                </div>
            </div>
            <div class="card-footer">
                <span class="badge ${riskClass}">${cmd.risk}</span>
                <a href="${cmd.link}" target="_blank" class="details-link">View Details &rarr;</a>
            </div>
        `;
        
        const copyBtn = card.querySelector('.copy-btn');
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(cmd.cmd).then(() => {
                const originalText = copyBtn.innerText;
                copyBtn.innerText = 'Copied!';
                copyBtn.style.color = '#4ade80';
                copyBtn.style.borderColor = '#4ade80';
                
                setTimeout(() => {
                    copyBtn.innerText = originalText;
                    copyBtn.style.color = '';
                    copyBtn.style.borderColor = '';
                }, 2000);
            }).catch(err => {
                console.error("Failed to copy command: ", err);
            });
        });
        
        grid.appendChild(card);
    });
}

searchInput.addEventListener('input', renderCommands);

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;
        renderCommands();
    });
});

// Initial render
renderCommands();
