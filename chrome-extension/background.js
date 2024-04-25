/* global chrome */

const findProxyForURL = `
function FindProxyForURL (url, host) {
  // host = The hostname from the URL excluding port number.

  const ip = dnsResolve(host)

  // If not resolvable send to proxy
  // The proxy respects /etc/hosts
  if (!ip) {
    return 'SOCKS5 127.0.0.1:1080;'
  }

  // Do not proxy IPv4 addresses
  if (!ip.includes(':')) {
    return 'DIRECT;'
  }

  // Use proxy when within Yggdrasils '0200::/7' address range
  if ('200' <= ip && ip <= '3ff:ffff:ffff:ffff:ffff:ffff:ffff:ffff') {
    return 'SOCKS5 127.0.0.1:1080;'
  }

  return 'DIRECT;'
}`
const enabledProxyConfig = {
  mode: 'pac_script',
  pacScript: {
    mandatory: true,
    data: findProxyForURL
  }
}
let state // proxy on/off

function toggleProxy () {
  state = !state

  chrome.browserAction.setIcon({
    path: state ? 'y-green.128.png' : 'y.128.png'
  })
  chrome.proxy.settings.set({
    value: state ? enabledProxyConfig : { mode: 'direct' },
    scope: 'regular'
  })
}

// React to clicks on the extension icon
chrome.browserAction.onClicked.addListener(toggleProxy)

// Enable proxy by default
toggleProxy()
