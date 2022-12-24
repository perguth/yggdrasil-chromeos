# Access Yggdrasil on Chrome OS

> This **install script** and **Chrome extension** allows for **access** to the **[Yggdrasil Network](https://yggdrasil-network.github.io/)** ([`0200::/7`](https://yggdrasil-network.github.io/2018/07/28/addressing.html)) on Chrome OS.

Yggdrasil will run inside Linux and the Chome browser will get access through the Chrome extension and a local proxy server.

This setup script will:

- Add Yggdrasil repositories and install it using the package manager
- Rename the Yggrasil interface to `ygg` and clean up the config file
- Block incoming traffic over the Yggdrasil interface via [UFW](https://manpages.ubuntu.com/manpages/bionic/en/man8/ufw.8.html)
- Install a proxy server via which the Chrome extension will allow browser-access to Yggdrasil

## Install

1. **Install** the **[Chrome extension](https://chrome.google.com/webstore/detail/yggdrasil-via-%60localhost8/hcgljgobhoaeojnhikfmnhdpmgbmflec)** \
  The extension icon is clickable and switches the extension on and off.
1. **Copy** the following commands into **[`🔣 termina`](https://support.google.com/chromebook/thread/565904)**:
```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/perguth/chromeos-yggdrasil-network/master/setup.sh)"
```
3. **Add peers**:
   - Peers must be [added manually](https://yggdrasil-network.github.io/configuration.html#manually-connecting-to-peers).
   - Public peers can be found [here](https://github.com/yggdrasil-network/public-peers).
   - [Be aware](https://yggdrasil-network.github.io/faq.html#will-my-machine-be-exposed-to-other-users-of-the-network) that open ports will be visible to the connected network.

## Usage

Public services available on the Yggdrasil Network can be found [here](https://yggdrasil-network.github.io/services.html).
