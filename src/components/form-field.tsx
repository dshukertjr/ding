import React, { FC } from 'react'
import { BorderColor } from '../utils/types'

const FormField: FC<{
  label: string
  borderColor?: BorderColor
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}> = ({ label, borderColor, onChange }) => {
  let color = ''
  switch (borderColor) {
    case BorderColor.red:
      color = 'border-red-500'
      break
    case BorderColor.blue:
      color = 'border-blue-500'
      break
    case BorderColor.green:
      color = 'border-green-500'
      break
    case BorderColor.yellow:
      color = 'border-yellow-500'
      break
    default:
      color = 'border-black'
  }
  return (
    <input
      onChange={onChange}
      className={`border-2 ${color} py-2 px-4 block rounded w-full`}
      placeholder={label}
      type="text"
    />
  )
}

export default FormField
