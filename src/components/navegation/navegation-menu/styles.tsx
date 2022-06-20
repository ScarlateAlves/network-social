import styled from 'styled-components'

export const Header = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  background: white;
  padding: 0 4rem;
  z-index: 1;
`

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`

export const NavLink = styled.div`
  cursor: pointer;
`
