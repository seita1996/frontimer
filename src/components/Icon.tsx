import React from 'react'
import { ReactSVG } from 'react-svg'

type Props = {
  name: string
  size?: number
  className?: string
}

const DEFAULT_SIZE = 24

export function Icon({ name, size = DEFAULT_SIZE, className }: Props) {
  return (
    <ReactSVG
      style={{ height: `${size}px`, width: `${size}px` }}
      className={className}
      src={`assets/${name}-icon.svg`}
    />
  )
}
