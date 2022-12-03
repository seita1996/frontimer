import React, { useCallback, useEffect, useRef, useState } from 'react'
import './Clock.css'

type Props = {
  maxSec: number
}

export const Clock: React.FC<Props> = ({maxSec = 0}) => {
  const [count, setCount] = useState(maxSec)
  const [clock, setClock] = useState('00:00:00')
  const intervalRef = useRef(-1)

  useEffect(() => {
    setClock(convert_hhmmss(count))
  }, [count])

  useEffect(() => {
    if(count < 1) {
      clearInterval(intervalRef.current)
      playSound()
    }
  }, [count])

  const start = useCallback(() => {
    if (intervalRef.current !== -1) {
      return
    }
    intervalRef.current = Number(setInterval(() => {
      setCount((c) => c - 1)
    }, 1000))
  }, [])

  const stop = useCallback(() => {
    if (intervalRef.current === -1) {
      return
    }
    clearInterval(intervalRef.current)
    intervalRef.current = -1
  }, [])

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
      <h1 className='clock'>{clock}</h1>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  );
};
