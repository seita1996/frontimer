import React, { useEffect, useState } from 'react'
import { Clock } from '../components/Clock'
import { Slider } from '../components/Slider'
import './App.css'

export const App = () => {
  const [maxSec, setMaxSec] = useState(180)
  // The initial values of hour, min, and sec must be undefined to reflect values loaded from store.
  const [hour, setHour] = useState<number|undefined>(undefined)
  const [min, setMin] = useState<number|undefined>(undefined)
  const [sec, setSec] = useState<number|undefined>(undefined)
  const [isTimerProgress, setIsTimerProgress] = useState(false)

  const updateMaxSec = () => {
    if (hour !== undefined && min !== undefined && sec !== undefined) {
      setMaxSec(hour * 60 * 60 + min * 60 + sec)
    }
  }

  const sliders = () => {
    if(isTimerProgress) {
      return <div></div>
    }
    return (
      <div className='sliderBlock'>
        <Slider min={0} max={23} defaultValue={hour} name={'hour'} setValue={setHour} />
        <Slider min={0} max={59} defaultValue={min} name={'min'} setValue={setMin} />
        <Slider min={0} max={59} defaultValue={sec} name={'sec'} setValue={setSec} />
      </div>
    )
  }


  useEffect(() => {
    const loadTimerHMS = async () => {
      const timerh = await window.app.getTimerH()
      const timerm = await window.app.getTimerM()
      const timers = await window.app.getTimerS()
      setHour(timerh)
      setMin(timerm)
      setSec(timers)
    }
    loadTimerHMS()
  }, [])

  useEffect(() => {
    if (hour !== undefined) {
      window.app.setTimerH(hour)
    }
  }, [hour])
  useEffect(() => {
    if (min !== undefined) {
      window.app.setTimerM(min)
    }
  }, [min])
  useEffect(() => {
    if (sec !== undefined) {
      window.app.setTimerS(sec)
    }
  }, [sec])

  useEffect(() => {
    updateMaxSec()
  }, [hour, min, sec])

  return (
    <div className="container">
      <Clock maxSec={maxSec} sliderHour={hour} silderMin={min} sliderSec={sec} setIsTimerProgress={setIsTimerProgress} />
      {sliders()}
    </div>
  )
}
