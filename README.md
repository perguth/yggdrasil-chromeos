# yggdrasil-chromeos

> Proxy via `localhost:8888` if the domain can't be resolved or if the resolved IP is not in [Yggdrasils](https://yggdrasil-network.github.io/) [`0200::/7`](https://yggdrasil-network.github.io/2018/07/28/addressing.html) network range.

🔖 **Install:** **[chrome.google.com/webstore/](https://chrome.google.com/webstore/detail/yggdrasil-via-%60localhost8/hcgljgobhoaeojnhikfmnhdpmgbmflec)**

![Yggdrasil tree](screenshot.png)

## Usage

The Chrome Extension icon can be clicked. A standing `Y` indicates that forwarding to Tinyproxy is enabled.

While enabled Yggrasil IPs like [`http://[21f:dd73:7cdb:773b:a924:7ec0:800b:221e]`](http://[21f:dd73:7cdb:773b:a924:7ec0:800b:221e]) and domains with Yggdrasil `AAAA` records like [y.thingylabs.io](http://y.thingylabs.io) can be proxied through the local Tinyproxy into the Yggdrasil network.

## Prerequisites

Have [Yggdrasil](https://yggdrasil-network.github.io/) installed.

### Install Tinyproxy
- Install tinyproxy: `sudo apt install -y tinyproxy`
- Edit `/etc/tinyproxy/tinyproxy.conf` and add `Listen 127.0.0.1`.
- Reload Tinyproxy: `sudo service tinyproxy reload`

### Test
Copy the IPv6 and open it in Chrome: `[21f:dd73:7cdb:773b:a924:7ec0:800b:221e]`

You should see an interactive map of nodes! 🚢
