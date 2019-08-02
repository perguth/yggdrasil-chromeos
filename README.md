# yggdrasil-chromeos

> Proxy via `localhost:8080` if the domain can't be resolved or if the resolved IP is not in [Yggdrasils](https://yggdrasil-network.github.io/) [`0200::/7`](https://yggdrasil-network.github.io/2018/07/28/addressing.html) network range.

🔖 **Install:** **[chrome.google.com/webstore/](https://chrome.google.com/webstore/detail/yggdrasil-via-%60localhost8/hcgljgobhoaeojnhikfmnhdpmgbmflec)**

![Yggdrasil tree](screenshot.png)

## Usage

The Chrome Extension icon can be clicked. A standing `Y` indicates that forwarding to Tinyproxy is enabled.

While enabled Yggrasil IPs like [`http://[21f:dd73:7cdb:773b:a924:7ec0:800b:221e]`](http://[21f:dd73:7cdb:773b:a924:7ec0:800b:221e]) and domains with Yggdrasil `AAAA` records like [y.thingylabs.io](http://y.thingylabs.io) can be proxied through the local Tinyproxy into the Yggdrasil network.

## Prerequisites

### Install Yggdrasil
Install Yggdrasil (see https://yggdrasil-network.github.io/installation-linux-deb.html):
```
# Add apt repository
# https://yggdrasil-network.github.io/installation-linux-deb.html
gpg --fetch-keys https://neilalexander.s3.eu-west-2.amazonaws.com/deb/key.txt
gpg --export 569130E8CA20FBC4CB3FDE555898470A764B32C9 | sudo apt-key add -
echo 'deb http://neilalexander.s3.eu-west-2.amazonaws.com/deb/ debian yggdrasil' | sudo tee /etc/apt/sources.list.d/yggdrasil.list

# Install Yggdrasil and its dependency
sudo apt update
sudo apt install -y yggdrasil dirmngr

sudo systemctl enable yggdrasil
sudo systemctl start yggdrasil
```

- Add peers https://github.com/yggdrasil-network/public-peers
- Make Yggdrasil reload: `sudo service yggdrasil reload`
- Verify it worked by looking at the active connections: `sudo yggdrasilctl getpeers`.


### Install Tinyproxy
- Install tinyproxy: `sudo apt install -y tinyproxy`
- Edit `/etc/tinyproxy/tinyproxy.conf` and set `Port` to `8080` and `Allow` to `127.0.0.1`.
- Reload Tinyproxy: `sudo service tinyproxy reload`


### Test
Copy the IPv6 and open it in Chrome: `[21f:dd73:7cdb:773b:a924:7ec0:800b:221e]`

You should see an interactive map of nodes! 🚢
