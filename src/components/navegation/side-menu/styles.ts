import styled from 'styled-components'

export const HeaderMenu = styled.header<{
  display?: boolean
  mobile?: boolean
}>`
  position: fixed;
  border-right: solid 1px #eee;
  min-height: 100vh;
  height: 100%;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 40rem) {
    box-shadow: 0 1px 2px #eee;
    min-height: 200px;
    height: 260px;
    border: solid 1px #eee;
    display: ${(props) => (props.mobile ? 'block' : 'none')};
    top: 7rem;
    position: absolute;
    left: 0rem;
  }
`
export const MobileButton = styled.button<{ mobile?: boolean }>`
  background: #eee;
  border-radius: 0.2rem;
  padding: 0;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;

  ::after {
    content: '';
    display: block;
    width: 1.2rem;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;

    transform: ${(props) => (props.mobile ? 'rotate(90deg)' : '')};
    width: ${(props) => (props.mobile ? '4px' : '')};
    height: ${(props) => (props.mobile ? '4px' : '')};
    box-shadow: ${(props) =>
      props.mobile ? '0 8px currentColor, 0 -8px currentColor' : ''};
    transition: ${(props) => (props.mobile ? '0.2s' : '')};
  }

  :hover,
  :focus {
    outline: none;
    background: white;
    box-shadow: 0 1px 0 2px pink;
    color: pink;
    border-color: pink;
  }

  @media (max-width: 40rem) {
    position: absolute;
    left: 0;
    margin: 2px;
  }
`

export const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 80%;
  justify-content: stretch;
  display: flex;
  flex-direction: column;
  @media (max-width: 40rem) {
    gap: 1rem;
    margin: 0 1.2rem;
  }
`
