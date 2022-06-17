import styled from 'styled-components'

export const Heading = styled.h1<{ size?: string }>`
  margin-bottom: 1rem;
  font-size: ${(props) => props.size ?? '3rem'};
`
