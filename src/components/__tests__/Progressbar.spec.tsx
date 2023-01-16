/**
 * @jest-environment jsdom
 */

import React from 'react'
import { Progressbar } from "../Progressbar"
import { render, screen } from "@testing-library/react"

describe("Progressbar", () => {
  test("Clicking on reset button will give the value of the slider in hh:mm:ss format", () => {
    render(<Progressbar current={5} max={10} />)
    expect(screen.getByTestId('leftbar').style.width).toBe('50%')
  })
})
