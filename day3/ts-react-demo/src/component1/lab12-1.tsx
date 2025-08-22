import { forwardRef, type TextareaHTMLAttributes } from "react"

const CustomInput = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>((props, ref) => {
  return <textarea {...props} ref={ref} />
})

export { CustomInput }