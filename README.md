# ChromeOS Yggdrasil Network setup

> This **install script** and **Chrome extension** allows for **access** to the **[Yggdrasil Network](https://yggdrasil-network.github.io/)** ([`0200::/7`](https://yggdrasil-network.github.io/2018/07/28/addressing.html)) on ChromeOS.

This setup script will:

- **Install** [Yggstack](https://github.com/yggdrasil-network/yggstack)
- **Add** a [public peer](https://ygg.thingylabs.io/)
- **Set up** systemd service for Yggstack

## Install

1. **Install** the **[Chrome extension](https://chrome.google.com/webstore/detail/yggdrasil-via-%60localhost8/hcgljgobhoaeojnhikfmnhdpmgbmflec)**
1. **Copy** the following commands into **[`🔣 termina`](https://support.google.com/chromebook/thread/565904)**:
```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/perguth/chromeos-yggdrasil-network-setup/master/setup.sh)"
```

## Usage

- Linux needs to run for this to work.
- The browser extension icon is clickable and switches browser access to Yggdrasil on and off.
- Public services available on the Yggdrasil Network can be [found here](https://yggdrasil-network.github.io/services.html).
