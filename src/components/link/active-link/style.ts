import styled from 'styled-components'

export const NavLink = styled.a<{ pathname?: string }>`
  color: ${({ href, pathname }) => (href === pathname ? '#f2789f' : 'black')};
  cursor: pointer;
  display: flex;
  align-items: center;
  grid-gap: 1px;
  line-height: 1;

  svg > * {
    fill: ${({ href, pathname }) => (href === pathname ? '#f2789f' : 'black')};
  }
  :hover svg > * {
    fill: #f2789f;
  }

  :hover {
    color: #f2789f;
  }
`
