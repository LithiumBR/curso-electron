'use strict';
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 1200, height: 900 })

  mainWindow.loadURL('file://' + __dirname + '/../index.html')

  mainWindow.on('closed', () => mainWindow = null)
})
