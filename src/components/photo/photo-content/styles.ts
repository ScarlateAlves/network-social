import styled from 'styled-components'

export const ContainerPhotoStyles = styled.div`
  background: white;
  height: 36rem;
  margin: auto;
  border-radius: 0.2rem;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: identifier 0.3s forwards;

  @keyframes identifier {
    to {
      opacity: initial;
      transform: initial;
    }
  }

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }
`

export const ContainerPhotoItem = styled.div`
  grid-row: 1/4;
  position: relative;

  @media (max-width: 64rem) {
    grid-row: 1;
  }
`

export const PhotoDetailStyles = styled.div`
  padding: 2rem 2rem 0 2rem;
`

export const ViewPhotoStyles = styled.div`
  color: black;
`

export const AtributesStyles = styled.div`
  font-weight: 700;
  display: flex;
  gap: 2rem;
  font-size: 1rem;
`

export const Close = styled.div`
  border: 1px solid #666;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  cursor: pointer;
  background: #eee;
  border-radius: 0.2rem;
  color: #666;
`
