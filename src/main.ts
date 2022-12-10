import path from 'path'
import { BrowserWindow, app } from 'electron'

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
    },
  })

  mainWindow.setMenuBarVisibility(false)
  mainWindow.setAlwaysOnTop(true, 'screen-saver')
  mainWindow.loadFile('dist/index.html')
  // mainWindow.webContents.openDevTools({ mode: 'detach' });
});

app.once('window-all-closed', () => app.quit())
