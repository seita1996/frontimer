import React, { useCallback, useRef, useState } from 'react'
import './Clock.css'

type Props = {
  maxSec: number
}

export const Clock: React.FC<Props> = ({maxSec = 0}) => {
  const [count, setCount] = useState(maxSec)
  const intervalRef = useRef(-1)

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

  return (
    <div className='container'>
      <h1 className='clock'>{count}</h1>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  );
};
