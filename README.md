# yggdrasil-chromeos

> Proxy via localhost:8080 if the domain can't be resolved or if the resolved IP is not in Yggdrasils 0200::/7 network range.

**https://chrome.google.com/webstore/detail/yggdrasil-via-%60localhost8/hcgljgobhoaeojnhikfmnhdpmgbmflec**

## Usage

The Chrome Extension icon can be clicked. A standing `Y` indicates that forwarding to Tinyproxy is enabled.

While enabled Yggrasil IPs like `[21f:dd73:7cdb:773b:a924:7ec0:800b:221e]` and domains with Yggdrasil AAAA records like [y.thingylabs.io](http://y.thingylabs.io) will be proxied by the local Tinyproxy to the Yggdrasil network.

## Prerequisites

### Install Yggdrasil
Install Yggdrasil: https://yggdrasil-network.github.io/installation-linux-deb.html It won't work yet though.

Press `CTRL + ALT + t` (while focusing a Chrome tab) and enter `vmc start termina` followed by `lxc config device add penguin tun unix-char path=/dev/net/tun`. You have to redo this after every restart.

Add peers https://github.com/yggdrasil-network/public-peers

Now start Yggdrasil: `sudo service yggdrasil restart`

Verify it worked by looking at the active connections: `sudo yggdrasilctl getpeers`.

### Install Tinyproxy
Install tinyproxy: `sudo apt install -y tinyproxy`

Edit `/etc/tinyproxy/tinyproxy.conf` and set Port to `8080`. Advised: Set `Allow` to `127.0.0.1`. Reload Tinyproxy: `sudo service tinyproxy reload`

