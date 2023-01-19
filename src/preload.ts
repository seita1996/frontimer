import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld(
    'app', {
    getTimerH: () => ipcRenderer.invoke("getTimerH"),
    setTimerH: (data: number) => ipcRenderer.invoke("setTimerH", data),
    getTimerM: () => ipcRenderer.invoke("getTimerM"),
    setTimerM: (data: number) => ipcRenderer.invoke("setTimerM", data),
    getTimerS: () => ipcRenderer.invoke("getTimerS"),
    setTimerS: (data: number) => ipcRenderer.invoke("setTimerS", data),
})
