# Access Yggdrasil on Chrome OS

> This **Chrome extension** allows for **access** to the **[Yggdrasil network](https://yggdrasil-network.github.io/)** ([`0200::/7`](https://yggdrasil-network.github.io/2018/07/28/addressing.html)) via Google Chrome on Chrome OS.

The **extension icon** is **clickable** (next to the URL input field) and **toggles** the extension between `on` and `off`.

## Install

1. **Install** the **[Chrome extension](https://chrome.google.com/webstore/detail/yggdrasil-via-%60localhost8/hcgljgobhoaeojnhikfmnhdpmgbmflec)**.
1. **Copy** the following commands into **[`🔣 termina`](https://support.google.com/chromebook/thread/565904)**:

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/perguth/yggdrasil-chromeos/master/setup.sh)"
```

Yggdrasil is not connected to any peers or the Yggdrasil public network yet!

Peers can be [added manually](https://yggdrasil-network.github.io/configuration.html#manually-connecting-to-peers). Public peers can be found [here](https://github.com/yggdrasil-network/public-peers). \
But [be aware](https://yggdrasil-network.github.io/faq.html#will-my-machine-be-exposed-to-other-users-of-the-network) that open ports will be visible to the connected network.
