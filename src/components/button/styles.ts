import styled from 'styled-components'
import { Button as Buttonreabass } from 'rebass'

export const ButtonStyles = styled(Buttonreabass)`
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.4rem;
  background-color: #f2789f;
  min-width: 8rem;
  transition: 0.1s;
  border: none;
  color: white;
  padding: 0.7rem;
  width: 150px;
  display: flex;

  :hover,
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px #f999b7, 0 0 0 3px #f2789f;
  }

  :disabled {
    opacity: 0.5;
    cursor: wait;
  }
`
