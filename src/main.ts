import path from 'path'
import { BrowserWindow, app } from 'electron'
import Store from 'electron-store'

const store = new Store<StoreType>({
  /**
   * Set permissions to -rw-rw-rw- on the file
   * where you want to save the settings
   */
  configFileMode: 0o666,
  defaults: {
    x: undefined,
    y: undefined,
    width: 800,
    height: 640,
  },
})

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    x: store.get('x'),
    y: store.get('y'),
    width: store.get('width'),
    height: store.get('height'),
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
    },
  })

  mainWindow.setMenuBarVisibility(false)
  mainWindow.setAlwaysOnTop(true, 'screen-saver')
  mainWindow.loadFile('dist/index.html')
  // mainWindow.webContents.openDevTools({ mode: 'detach' });

  mainWindow.once('close', () => {
    const { x, y, width, height } = mainWindow.getBounds()
    store.set({ x, y, width, height })
  })
})

app.once('window-all-closed', () => app.quit())
