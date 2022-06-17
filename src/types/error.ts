import React from 'react'

export interface ErrorProps {
  children?: React.ReactNode | string
}

export interface ErrorRegisterProps {
  code: string
  message: string
  data: ErrorDataProps
}

export interface ErrorDataProps {
  status: number
}

export interface ErrorPropsResponse {
  response: {
    data: ErrorRegisterProps
  }
}
