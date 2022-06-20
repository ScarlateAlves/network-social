import styled from 'styled-components'

export const Textarea = styled.textarea`
  width: 100%;
  background-color: #eee;
  border: solid 1px #eee;
  border-radius: 0.2rem;
  height: 3.4rem;

  :hover,
  :focus {
    outline: none;
    border-color: #f2789f;
    background-color: white;
    box-shadow: 0 0 0 2px #f999b7, 0 0 0 2px #f2789f;
  }
`
export const Ul = styled.ul`
  gap: 2rem;
  margin: 2rem;
  overflow-y: auto;
  word-break: break-word;
`

export const Li = styled.li`
  line-height: 1.2;
`
