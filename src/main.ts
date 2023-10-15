import path from 'path'
import { BrowserWindow, app, ipcMain } from 'electron'
import Store from 'electron-store'
import './assets/icon.png'

const store = new Store<StoreType>({
  /**
   * Set permissions to -rw-rw-rw- on the file
   * where you want to save the settings
   */
  configFileMode: 0o666,
  defaults: {
    width: 800,
    height: 640,
    timerH: 0,
    timerM: 3,
    timerS: 0,
  },
})

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    frame: false,
    width: store.get('width'),
    height: store.get('height'),
    icon: path.join(__dirname, './assets/icon.png'),
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
    },
  })

  mainWindow.setMenuBarVisibility(false)
  mainWindow.setAlwaysOnTop(true, 'screen-saver')
  mainWindow.loadFile('dist/index.html')
  // mainWindow.webContents.openDevTools({ mode: 'detach' });

  mainWindow.once('close', () => {
    const { width, height } = mainWindow.getBounds()
    store.set({ width, height })
  })
})

ipcMain.handle('getTimerH', async (event, data) => {
  return store.get('timerH')
})
ipcMain.handle("setTimerH", async (event, data) => {
  store.set('timerH', data)
})
ipcMain.handle('getTimerM', async (event, data) => {
  return store.get('timerM')
})
ipcMain.handle("setTimerM", async (event, data) => {
  store.set('timerM', data)
})
ipcMain.handle('getTimerS', async (event, data) => {
  return store.get('timerS')
})
ipcMain.handle("setTimerS", async (event, data) => {
  store.set('timerS', data)
})

app.once('window-all-closed', () => app.quit())
