import React, { useState } from 'react'
import './Slider.css'

type Props = {
  min: number,
  max: number,
  defaultValue: number,
  name: string,
  setValue: Function
}

export const Slider: React.FC<Props> = ({min = 0, max = 10, defaultValue = 5, name = 'slider', setValue}) => {
  return (
    <div>
      <input
        type='range'
        className='input-range'
        name={name}
        min={min}
        max={max}
        defaultValue={defaultValue}
        onChange={(
          ev: React.ChangeEvent<HTMLInputElement>,
        ): void => {
          setValue(
            parseInt(ev.target.value, 10)
          )
        }}
      />
    </div>
  )
}
