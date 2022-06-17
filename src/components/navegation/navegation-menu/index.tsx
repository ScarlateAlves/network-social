import Link from 'next/link'
import { useContext } from 'react'
import { Choose } from 'react-extras'

import { DogsIcon, UserIcon } from '../../../assets/icon'

import { AuthContext } from '../../../hooks/context/auth-context'

import { Header, NavContainer, NavLink } from './styles'

export const Navegation = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      <Header>
        <NavContainer>
          <Link href="/">
            <NavLink>
              <DogsIcon />
            </NavLink>
          </Link>
          <Choose>
            <Choose.When condition={Boolean(user?.nome)}>
              <Link href="/account">
                <NavLink>{user?.nome}</NavLink>
              </Link>
            </Choose.When>
            <Choose.Otherwise>
              <Link href="/login">
                <NavLink>
                  Login/Criar
                  <UserIcon />
                </NavLink>
              </Link>
            </Choose.Otherwise>
          </Choose>
        </NavContainer>
      </Header>
    </>
  )
}
