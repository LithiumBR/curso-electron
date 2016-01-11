'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1200, height: 900});

  mainWindow.loadURL('http://lithium.net.br');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
