/**
 * @jest-environment jsdom
 */

import React from 'react'
import { Progressbar } from "../Progressbar"
import { render, screen } from "@testing-library/react"

describe("Progressbar", () => {
  test("Progressbar width to be current / max", () => {
    render(<Progressbar current={5} max={10} />)
    expect(screen.getByTestId('leftbar').style.width).toBe('50%')
  })
})
