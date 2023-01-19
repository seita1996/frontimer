import React, { useCallback, useEffect, useRef, useState } from 'react'
import './Clock.css'
import { Icon } from './Icon'
import { Progressbar } from './Progressbar'

type Props = {
  maxSec: number,
  sliderHour: number|undefined,
  silderMin: number|undefined,
  sliderSec: number|undefined,
  setIsTimerProgress: Function
}

export const Clock: React.FC<Props> = ({maxSec = 0, sliderHour = 0, silderMin = 0, sliderSec = 0, setIsTimerProgress}) => {
  const [count, setCount] = useState(maxSec)
  const [clock, setClock] = useState('00:00:00')
  const intervalRef = useRef(-1)

  // Redraw timers by updating state when there is a change in props from the parent component
  useEffect(() => {
    setCount(maxSec)
  }, [maxSec])

  useEffect(() => {
    setClock(convert_hhmmss(count))
  }, [count])

  useEffect(() => {
    if(count < 1) {
      clearInterval(intervalRef.current)
      playSound()
      document.body.classList.remove('background-bluegradient')
      document.body.classList.add('background-redgradient')
    } else {
      document.body.classList.remove('background-redgradient')
      document.body.classList.add('background-bluegradient')
    }
  }, [count])

  const start = useCallback(() => {
    if (intervalRef.current !== -1) {
      return
    }
    intervalRef.current = Number(setInterval(() => {
      setCount((c) => c - 1)
    }, 1000))
    setIsTimerProgress(true)
  }, [])

  const stop = useCallback(() => {
    if (intervalRef.current === -1) {
      return
    }
    clearInterval(intervalRef.current)
    intervalRef.current = -1
    setIsTimerProgress(false)
  }, [])

  const reset = () => {
    setCount(sliderHour * 60 * 60 + silderMin * 60 + sliderSec)
  }

  const startStopBtn = () => {
    if (intervalRef.current === -1) {
      return (
        <div onClick={start}>
          <Icon name='play' className='icon' size='15vw' />
        </div>
      )
    }

    return (
      <div onClick={stop}>
        <Icon name='pause' className='icon' size='15vw' />
      </div>
    )
  }

  const convert_hhmmss = (s: number) => {
    const hour = Math.floor(s / 60 / 60) % 24
    const min = Math.floor(s / 60) % 60
    const sec = s % 60
    return `${zeroFill(hour)}:${zeroFill(min)}:${zeroFill(sec)}`
  }

  const playSound = () => {
    const message = new SpeechSynthesisUtterance("おわりです")
    message.lang = 'ja-JP'
    window.speechSynthesis.speak(message)
    console.log('play')
  }

  const zeroFill = (num: number) => {
    if(num > 9) {
      return `${num}`
    }
    return `0${num}`
  }

  return (
    <div className='container'>
      <div className='clock'>{clock}</div>
      <Progressbar current={count} max={maxSec} />
      <div className='flexSpaceAround mt-6vh'>
        {startStopBtn()}
        <div data-testid='resetbutton' onClick={reset}>
          <Icon name='rewind' className='icon' size='15vw' />
        </div>
      </div>
    </div>
  )
}
