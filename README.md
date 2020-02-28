# yggdrasil-chromeos

> A Chrome extension that proxies via `localhost:8008` if the resolved IP is in [Yggdrasils](https://yggdrasil-network.github.io/) [`0200::/7`](https://yggdrasil-network.github.io/2018/07/28/addressing.html) network range.

## Usage

The Chrome Extension icon can be clicked. A standing `Y` indicates that the extension is active.

When active Yggrasil IPs like [`http://[21f:dd73:7cdb:773b:a924:7ec0:800b:221e]`](http://[21f:dd73:7cdb:773b:a924:7ec0:800b:221e]) and domains with Yggdrasil `AAAA` records like [y.thingylabs.io](http://y.thingylabs.io) will be resolved.

## Install

1. **First install** dependencies using the **[ChromeOS Playbook](https://github.com/perguth/chromeos-playbook)**.
2. **Then install** the **[Chrome extension](https://chrome.google.com/webstore/detail/yggdrasil-via-%60localhost8/hcgljgobhoaeojnhikfmnhdpmgbmflec)**. 🔖

## Test

- **Functionality:** Try a **Yggdrasil-only** URL like 🚀 **[ygg.tlbs.ai](https://ygg.tlbs.ai)**
- **Speed:** Perform a speedtest in a Terminal by running:\
  `iperf3 -c ygg.tlbs.ai`
