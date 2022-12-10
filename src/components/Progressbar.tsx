import React, { useEffect, useState } from 'react'
import './Progressbar.css'

type Props = {
  current: number,
  max: number
}

export const Progressbar: React.FC<Props> = ({current = 0, max = 10}) => {
  const [percentageOfTimeLeft, setPercentageOfTimeLeft] = useState(100)

  useEffect(() => {
    console.log('per', current / max * 100)
    setPercentageOfTimeLeft(current / max * 100)
  }, [current, max])

  return (
    <div>
      <div className='bar' style={{width: `${percentageOfTimeLeft}%`}}></div>
    </div>
  )
}
