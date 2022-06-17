import React, { createContext, useEffect } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { IFormInput, AuthContextType } from '../../types/form-input'
import { fetchToken } from '../use-token'
import Router from 'next/router'
import { useCredentials } from '../use-use-credentials'

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { mutate, data: user, isLoading, isSuccess, isError } = useCredentials()

  const isAuthenticated = !!user

  const onSubmit = async ({ username, password }: IFormInput) => {
    const { data } = await fetchToken({ username, password })
    const token = data.token
    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 1, //1hour
    })

    const { 'nextauth.token': tokenAuth } = parseCookies()
    if (tokenAuth)
      mutate(tokenAuth, {
        onSuccess: (data) => {
          if (data) Router.push('/')
        },
      })
  }

  const handleDestroyCookie = () => {
    destroyCookie(null, 'nextauth.token')
    const { 'nextauth.token': token } = parseCookies()
    mutate(token)
    if (!token) Router.push('/login')
  }

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()
    if (token)
      mutate(token, {
        onSuccess: (data) => {
          if (data) Router.push('/')
        },
      })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        onSubmit,
        user,
        isLoading,
        isSuccess,
        isError,
        handleDestroyCookie,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
