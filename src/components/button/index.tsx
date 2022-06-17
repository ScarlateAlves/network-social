import React from 'react'
import { ButtonProps as ButtonPropsRebass } from 'rebass'

import { ButtonStyles } from './styles'

interface ButtonProps extends ButtonPropsRebass {
  children: string | React.ReactNode
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <>
      <ButtonStyles {...rest}>{children}</ButtonStyles>
    </>
  )
}
