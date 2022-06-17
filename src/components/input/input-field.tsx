import React, { forwardRef } from 'react'
import { InputProps as RebassInputProps } from '@rebass/forms'

import { InputStyles, Label } from './styles'

interface FieldProps extends RebassInputProps {
  label?: string
}

export const InputField = forwardRef((props: FieldProps, ref) => {
  const { label } = props
  return (
    <div>
      <Label>{label}</Label>
      <InputStyles ref={ref} {...props} />
    </div>
  )
})

InputField.displayName = 'InputField'
