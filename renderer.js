// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer, webFrame } = require('electron')

ipcRenderer.send('preload-ran', window.location.href, webFrame.routingId)

ipcRenderer.on('preload-ping', () => {
  ipcRenderer.send('preload-pong', webFrame.routingId)
})