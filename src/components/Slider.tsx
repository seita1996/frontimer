import React from 'react'
import './Slider.css'

type Props = {
  min: number,
  max: number,
  defaultValue: number|undefined,
  name: string,
  setValue: Function
}

export const Slider: React.FC<Props> = ({min, max, defaultValue, name = 'slider', setValue}) => {
  return (
    <div>
      <input
        type='range'
        className='input-range'
        name={name}
        min={min}
        max={max}
        defaultValue={defaultValue}
        value={defaultValue}
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
