import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: center;

  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: grid;
  border-radius: 0.3rem;
  overflow: hidden;
  cursor: pointer;

  :nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }
`

export const ImageCard = styled.img`
  grid-area: 1/1;
  width: 100%;
`
export const Acessos = styled.span`
  //grid-area: 1/1;
  // background: rgba(0, 0, 0, 0.3);
  // color: white;
  font-size: 1rem;
  text-align: center;
  // display: none;
  // align-items: center;
  // justify-content: center;
  gap: 0.5rem;
  padding: 0.3rem;
  z-index: 1;
  :hover {
    //  display: flex;
  }
`

//modaal

export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  /// padding: 2rem 4rem 2rem 4rem;
`
