# Yggdrasil Network ChromeOS setup

> This package provides a Chrome extension and a setup script designed to enable ChromeOS users to access the [Yggdrasil Network](https://yggdrasil-network.github.io/) ([`0200::/7`](https://yggdrasil-network.github.io/2018/07/28/addressing.html)).

Here's what each part does:

**Setup Script:**
- **Installs Yggstack:** Sets up Yggstack on your device, essential for connecting to the Yggdrasil Network.
- **Adds a Public Peer:** Connects to a public peer for network access.
- **Configures a systemd Service for Yggstack:** Ensures Yggstack runs automatically at startup.

**Chrome Extension:**
- **Routes Specific Network Requests:** Adjusts your browser settings to channel certain network requests through Yggstack, securing your access to the Yggdrasil Network.
- **Toggle Switch:** The extension icon allows you to easily switch your browser's connection to Yggstack on or off.

## Install

1. **Chrome Extension**:
   - **Via Chrome Web Store:**\
     Install the extension directly from the Chrome Web Store by following this link: [Chrome Web Store Link](https://chromewebstore.google.com/detail/yggdrasil-on-chromeos/hcgljgobhoaeojnhikfmnhdpmgbmflec).
   - **Or via Manual Installation:**\
     Download the repository from GitHub and load the extension ('chrome-extension/') unpacked in your Chrome browser.
2. **Setup script:**\
   Open a terminal and execute:
   ```
   bash -c "$(curl -fsSL https://raw.githubusercontent.com/perguth/yggdrasil-chromeos/master/setup.sh)"
   ```

## Usage
- Linux (Beta) needs to be active on your ChromeOS for the setup to function.
- Use the extension icon to control your access to the network.
- Start exploring the Yggdrasil Network through services like ⚡ [ygg-only.thingylabs.io](https://ygg-only.thingylabs.io/).

This setup offers a simple way for ChromeOS users to access and navigate the decentralized, secure Yggdrasil Network with minimal configuration.
