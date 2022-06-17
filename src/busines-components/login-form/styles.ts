import styled from 'styled-components'

export const LineLink = styled.p`
  color: #666;
  line-height: 1;
  width: 135px;
  cursor: pointer;
  ::after {
    content: '';
    background: #666;
    height: 2px;
    display: block;
  }

  :hover {
    color: black;
  }
`
