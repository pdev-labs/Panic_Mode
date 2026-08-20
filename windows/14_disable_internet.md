# Disabling Internet Access

## Platform
Windows

## Risk
LOW

## Description
Releases the IP address from the DHCP server.

## Why It Is Dangerous
Disconnects the system from the network.

## Prerequisites
Command Prompt access.

## Demonstration
```cmd
ipconfig /release
```

## Expected Behavior
Network connectivity drops immediately.

## Detection
Network monitoring tools will detect the host dropping off the network.

## Mitigation
Not inherently malicious, but access to cmd can be restricted.

## Recovery
Run `ipconfig /renew` to restore the connection.

## Safety
State that testing must be performed only in an isolated, disposable VM or authorized laboratory environment.
