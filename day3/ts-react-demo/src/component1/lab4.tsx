import { useState } from "react"

type NumericStepperProps = {
  min?: number,
  max?: number,
  step?: number,
  initail?: number
}

export function NumericStepper({ min, max, step = 1, initail = 0 }: NumericStepperProps) {
  const [value, setValue] = useState<number>(initail);


  const dec = () => {
    if (typeof min === "number" && typeof step === "number") {
      setValue(value - step < min ? min : value - step)
    } else {
      setValue(value - step)
    }
  }

  const inc = () => {
    if (typeof max === "number" && typeof step === "number") {
      setValue(value + step > max ? max : value + step)
    } else {
      setValue(value + step)
    }
  }

  return (
    <div>
      <button onClick={dec}>-</button>
      <span>{value}</span>
      <button onClick={inc}>+</button>
    </div>
  )
}