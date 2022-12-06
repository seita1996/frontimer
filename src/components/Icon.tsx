import React from 'react'
import { ReactSVG } from 'react-svg'

// Add svg icon path
import '../assets/play-icon.svg'
import '../assets/pause-icon.svg'
import '../assets/rewind-icon.svg'

type Props = {
  name: string
  size?: string
  className?: string
}

const DEFAULT_SIZE = '24px'

export function Icon({ name, size = DEFAULT_SIZE, className }: Props) {
  return (
    <ReactSVG
      style={{ height: `${size}`, width: `${size}` }}
      className={className}
      src={`assets/${name}-icon.svg`}
    />
  )
}
