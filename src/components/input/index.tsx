import React from 'react'

import { InputProps } from '../../types/form-input'

import { InputStyles, Label } from './styles'

export const Input = ({ label, name, register, required }: InputProps) => (
  <div>
    <Label>{label}</Label>
    <InputStyles {...register(name, { required })} />
  </div>
)
