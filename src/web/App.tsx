import React, { useEffect, useState } from 'react'
import { Clock } from '../components/Clock'
import { Slider } from '../components/Slider'
import './App.css'

export const App = () => {
  const [maxSec, setMaxSec] = useState(180)
  const [hour, setHour] = useState(0)
  const [min, setMin] = useState(3)
  const [sec, setSec] = useState(0)

  const updateMaxSec = () => {
    setMaxSec(hour * 60 * 60 + min * 60 + sec)
  }

  useEffect(() => {
    updateMaxSec()
  }, [hour, min, sec])

  return (
    <div className="container">
      <Clock maxSec={maxSec} sliderHour={hour} silderMin={min} sliderSec={sec} />
      <Slider min={0} max={23} defaultValue={hour} name={'hour'} setValue={setHour} />
      <Slider min={0} max={59} defaultValue={min} name={'min'} setValue={setMin} />
      <Slider min={0} max={59} defaultValue={sec} name={'sec'} setValue={setSec} />
    </div>
  )
}
