import React, { ReactNode } from 'react'
import { Navegation } from '../../navegation/navegation-menu'
import { MainStyles } from './styles'

interface NavigationProps {
  children: React.ReactNode
}

export const Main = ({ children }: NavigationProps) => {
  return (
    <>
      <Navegation />
      <MainStyles>{children}</MainStyles>
    </>
  )
}

export const getLayout = (page: ReactNode) => <Main>{page}</Main>
