import styled from 'styled-components'

export const InputStyles = styled.input`
  border: 1px solid #eee;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background-color: #eee;
  transition: 0.2s;
  width: 100%;

  :hover,
  :focus {
    outline: none;
    border-color: #f2789f;
    background-color: white;
    box-shadow: 0 0 0 2px #f999b7, 0 0 0 2px #f2789f;
  }
`

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`
