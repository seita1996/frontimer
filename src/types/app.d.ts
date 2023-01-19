declare global {
  interface Window {
      app: IMainProcess;
  }
}

export interface IMainProcess {
  getTimerH: () => number
  setTimerH: (data: number) => void
  getTimerM: () => number
  setTimerM: (data: number) => void
  getTimerS: () => number
  setTimerS: (data: number) => void
}
