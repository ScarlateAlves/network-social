import Link from 'next/link'
import React, { useContext } from 'react'

import {
  AddIcon,
  FeedIcon,
  StatisticIcon,
  CloseIcon,
} from '../../../assets/icon'

import { Button } from '../..'
import { ActiveLink } from '../../link/active-link'

import { AuthContext } from '../../../hooks/context/auth-context'

import { NavContainer } from './styles'
import { Flex } from 'rebass'

export const MainMenu = () => {
  const { handleDestroyCookie } = useContext(AuthContext)
  return (
    <>
      <NavContainer>
        <Link href="/account" passHref>
          <ActiveLink href="/account">
            <FeedIcon />
            Minha Conta
          </ActiveLink>
        </Link>
        <Link href="/account/poster" passHref>
          <ActiveLink href="/account/poster">
            <AddIcon />
            Adicionar Foto
          </ActiveLink>
        </Link>
        <Link href="/account/statistic" passHref>
          <ActiveLink href="/account/statistic">
            <StatisticIcon />
            Estatisticas
          </ActiveLink>
        </Link>
        <Button color="black" onClick={handleDestroyCookie} width="100%">
          <Flex alignItems="center" justifyContent="center">
            <CloseIcon />
            Sair
          </Flex>
        </Button>
      </NavContainer>
    </>
  )
}
