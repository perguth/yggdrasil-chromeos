# yggdrasil-chromeos

> Proxy via `localhost:8008` if the domain can't be resolved or if the resolved IP is not in [Yggdrasils](https://yggdrasil-network.github.io/) [`0200::/7`](https://yggdrasil-network.github.io/2018/07/28/addressing.html) network range.

![Yggdrasil tree](screenshot.png)

## Usage

The Chrome Extension icon can be clicked. A standing `Y` indicates that forwarding to Tinyproxy is enabled.

While enabled Yggrasil IPs like [`http://[21f:dd73:7cdb:773b:a924:7ec0:800b:221e]`](http://[21f:dd73:7cdb:773b:a924:7ec0:800b:221e]) and domains with Yggdrasil `AAAA` records like [y.thingylabs.io](http://y.thingylabs.io) can be proxied through the local Tinyproxy into the Yggdrasil network.

## Installation

Have **[Yggdrasil](https://yggdrasil-network.github.io/)** installed.

Set up **[Privoxy](https://www.privoxy.org/)**:
- Install Privoxy: `sudo apt install -y privoxy`
- Change proxy port: `sudo sed -i 's/8118/8008/g' /etc/privoxy/config`.
- Restart Privoxy: `sudo service privoxy restart`

🔖 **Install the [Chrome Extension](https://chrome.google.com/webstore/detail/yggdrasil-via-%60localhost8/hcgljgobhoaeojnhikfmnhdpmgbmflec)**.

### Test

Try this Ygg only URL: https://y.thingylabs.io/ 🚀
