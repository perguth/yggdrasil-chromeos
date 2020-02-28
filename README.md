# Access Yggdrasil websites on [Chrome OS](https://www.google.com/chromebook/chrome-os)

> This **Chrome extension** allows for **access** to the **[Yggdrasil network](https://yggdrasil-network.github.io/)** ([`0200::/7`](https://yggdrasil-network.github.io/2018/07/28/addressing.html)) via Google Chrome on Chrome OS.

The **extension icon** is **clickable** (next to the URL input field) and **toggles** the extension between `on` and `off`.

## Install

1. **First run** the **[Chrome OS Playbook](https://github.com/perguth/chromeos-playbook)**.
2. **Then install** the **[Chrome extension](https://chrome.google.com/webstore/detail/yggdrasil-via-%60localhost8/hcgljgobhoaeojnhikfmnhdpmgbmflec)**.

## Test

- **Functionality:** Try a **Yggdrasil-only** URL like **`🚀`[`ygg.tlbs.ai`](https://ygg-only.tlbs.ai)**
- **Speed:** Perform a speedtest in a Terminal by running:\
  `iperf3 -c ygg-only.tlbs.ai`\
    <sup>(**Note:** Results are publicly shown on [ygg.tlbs.ai](https://ygg.tlbs.ai))</sup>
