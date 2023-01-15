/**
 * @jest-environment jsdom
 */

import React from 'react'
import { Clock } from "../Clock"
import { render } from "@testing-library/react"

describe("Clock", () => {
  test("maxSec converted to hh:mm:ss can be obtained", () => {
    const { getByText } = render(<Clock maxSec={5000} sliderHour={0} silderMin={0} sliderSec={0} setIsTimerProgress={function() {}} />)
    expect(getByText('01:23:20')).toBeTruthy()
  })
})
