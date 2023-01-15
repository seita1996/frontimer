/**
 * @jest-environment jsdom
 */

import React from 'react'
import { Clock } from "../Clock"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"

describe("Clock", () => {
  test("maxSec converted to hh:mm:ss can be obtained", () => {
    render(<Clock maxSec={5000} sliderHour={0} silderMin={0} sliderSec={0} setIsTimerProgress={function() {}} />)
    expect(screen.getByText('01:23:20')).toBeTruthy()
  })
  test("Clicking on reset button will give the value of the slider in hh:mm:ss format", () => {
    render(<Clock maxSec={10} sliderHour={3} silderMin={45} sliderSec={1} setIsTimerProgress={function() {}} />)
    expect(screen.getByText('00:00:10')).toBeTruthy()
    const resetButton = screen.getByTestId('resetbutton')
    fireEvent.click(resetButton)
    expect(screen.getByText('03:45:01')).toBeTruthy()
  })
})
