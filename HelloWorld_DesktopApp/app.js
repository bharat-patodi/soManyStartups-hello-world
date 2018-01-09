const electron = require('electron');
const path = require('path');

electron.app.on('ready', function() {
  const mainWondow = new electron.BrowserWindow({
    width: 600,
    height: 600,
    icon: path.join(__dirname, 'assets/icons/png/64x64.png'),
  });
  mainWondow.loadURL('file://' + __dirname + '/index.html');
});