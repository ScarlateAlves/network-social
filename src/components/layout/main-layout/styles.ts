import styled from 'styled-components'

export const MainStyles = styled.main`
  padding-top: 6rem;
  opacity: 0;
  transform: translateX(-20px);
  animation: MainStyles 0.3s forwards;

  @keyframes MainStyles {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`
