# Access Yggdrasil websites on [Chrome OS](https://www.google.com/chromebook/chrome-os)

> This **Chrome extension** allows for **access** to the **[Yggdrasil network](https://yggdrasil-network.github.io/)** ([`0200::/7`](https://yggdrasil-network.github.io/2018/07/28/addressing.html)) via Google Chrome on Chrome OS.

The **extension icon** is **clickable** (next to the URL input field) and **toggles** the extension between `on` and `off`.

## Install

1. **Install** the **[Chrome extension](https://chrome.google.com/webstore/detail/yggdrasil-via-%60localhost8/hcgljgobhoaeojnhikfmnhdpmgbmflec)**.
1. **Copy** the following commands into **[`🔣 termina`](https://support.google.com/chromebook/thread/565904)**:

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/perguth/chromeos-developer-setup/master/setup.sh)"
```

Yggdrasil is not connected to the network yet. [Public peers](https://github.com/yggdrasil-network/public-peers) can be added manually but [be aware of security implications](https://yggdrasil-network.github.io/faq.html#will-my-machine-be-exposed-to-other-users-of-the-network) if you open local ports.

## Test

- ***Functionality:*** Try a **Yggdrasil-only** URL like **`🚀`[`ygg.tlbs.ai`](https://ygg-only.tlbs.ai)**
- ***Speed:*** Perform a speedtest in a [Terminal](https://support.google.com/chromebook/thread/565904) by running:\
  `iperf3 -c ygg-only.tlbs.ai`\
    <sup>(**Note:** Results are publicly shown on [ygg.tlbs.ai](https://ygg.tlbs.ai))</sup>
