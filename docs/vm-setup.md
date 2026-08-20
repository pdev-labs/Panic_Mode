# Virtual Machine (VM) Lab Setup

To safely experiment with Panic Mode techniques, follow these steps to build a disposable lab:

## 1. Choose a Hypervisor
- VirtualBox (Free, Cross-platform)
- VMware Workstation Player (Free for personal use)
- Hyper-V (Built into Windows Pro/Enterprise)

## 2. Install the Guest OS
- Download an ISO for the target operating system (e.g., Ubuntu, Windows 10/11 Evaluation).
- Create a new VM.
- Allocate minimal resources (e.g., 2GB RAM, 20GB HDD) since the VM is disposable.

## 3. Isolate the Network
- In the VM settings, change the Network Adapter to "Host-Only", "Internal Network", or completely disconnect it.
- Do NOT use "Bridged" mode, which exposes the VM directly to your local network.

## 4. Disable Shared Features
- Disable clipboard sharing (copy/paste) unless necessary.
- Disable shared folders.

## 5. Take a Baseline Snapshot
- Once the OS is installed and updated, power it down (or pause it) and take a snapshot named `Clean-Baseline`.

## 6. Testing Workflow
1. Restore `Clean-Baseline`.
2. Run the command/technique.
3. Observe the behavior (refer to the documentation).
4. Restore `Clean-Baseline` to wipe the damage and start over.
