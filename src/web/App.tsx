import React, { useState } from 'react'
import { Clock } from '../components/Clock'
import './App.css'

export const App = () => {
  const [maxSec, setMaxSec] = useState(180)
  return (
    <div className="container">
      <Clock maxSec={maxSec} />
    </div>
  )
}
