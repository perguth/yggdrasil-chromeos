# yggdrasil-chromeos

> Proxy via localhost:8080 if the domain can't be resolved or if the resolved IP is not in Yggdrasils 0200::/7 network range.

**https://chrome.google.com/webstore/detail/yggdrasil-via-%60localhost8/hcgljgobhoaeojnhikfmnhdpmgbmflec**

## Usage
Install Yggdrasil: https://yggdrasil-network.github.io/installation-linux-deb.html It won't work yet though.

Press `CTRL + ALT + t` (while focusing a Chrome tab) and enter `vmc start termina` followed by `lxc config device add penguin tun unix-char path=/dev/net/tun`. You have to redo this after every restart.

Now start Yggdrasil: `sudo service yggdrasil restart`

In a terminal:

```bash
# Set up a system service that runs on startup
sudo cp contrib/systemd/cjdns.service /etc/systemd/system/
sudo systemctl enable cjdns
# the service `cjdns-resume` does not work currently
sudo systemctl start cjdns
```

In a terminal: `sudo apt install -y tinyproxy`

Edit `/etc/tinyproxy/tinyproxy.conf` and set Port to `8080`. Advised: Set `Allow` to `127.0.0.1`. Reload Tinyproxy: `sudo service tinyproxy reload`

The Chrome Extension icon can be clicked. A standing `Y` indicates that forwarding to Tinyproxy is enabled.

While enabled Yggrasil IPs like `[21f:dd73:7cdb:773b:a924:7ec0:800b:221e]` and domains with Yggdrasil AAAA records like [y.thingylabs.io](http://y.thingylabs.io) will be proxied by the local Tinyproxy to the Yggdrasil network.
