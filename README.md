# Access Yggdrasil on ChromeOS

> This **install script** and **Chrome extension** allows for **access** to the **[Yggdrasil Network](https://yggdrasil-network.github.io/)** ([`0200::/7`](https://yggdrasil-network.github.io/2018/07/28/addressing.html)) on ChromeOS.

Yggdrasil will run inside Linux and the Chome browser will get access through the Chrome extension and a local proxy server.

This setup script will:

- **Add Yggdrasil repositories and install** it using the package manager
- **Rename** the Yggrasil **interface to `ygg0`** and clean up the config file
- **Cleans** up the **config** file (backup placed in ...)
- Ensure Yggdrasil **starts after** the system wakes up from **sleep**
- Install a proxy server so that the accompanying [**Chrome extension**](https://chrome.google.com/webstore/detail/yggdrasil-on-chromeos/hcgljgobhoaeojnhikfmnhdpmgbmflec) can provide browser access

## Install

1. **Install** the **[Chrome extension](https://chrome.google.com/webstore/detail/yggdrasil-via-%60localhost8/hcgljgobhoaeojnhikfmnhdpmgbmflec)**
1. **Copy** the following commands into **[`🔣 termina`](https://support.google.com/chromebook/thread/565904)**:
```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/perguth/chromeos-yggdrasil-network-setup/master/setup.sh)"
```
3. **Add peers**:
   - Peers must be [added manually](https://yggdrasil-network.github.io/configuration.html#manually-connecting-to-peers).
   - Public peers can be found [here](https://github.com/yggdrasil-network/public-peers).

## Usage

- Linux needs to run for this to work.
- The browser extension icon is clickable and switches browser access to Yggdrasil on and off.
- Public services available on the Yggdrasil Network can be [found here](https://yggdrasil-network.github.io/services.html).

## Related

- **[Yggdrasil Protected Group](https://github.com/perguth/yggdrasil-protected-group)**\
  Sync Yggdrasil Peers, AllowedPublicKeys and whitelist IPs via UFW
