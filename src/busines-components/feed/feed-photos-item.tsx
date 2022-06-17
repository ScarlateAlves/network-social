import React from 'react'
import { ViewIcon } from '../../assets/icon'
import { FeedPhotosItensProps } from '../../types/feed'
import { Acessos, Card, ImageCard } from './styles'

interface FeedItem {
  props: FeedPhotosItensProps
  setModalPhoto?: React.Dispatch<
    React.SetStateAction<FeedPhotosItensProps | undefined>
  >
}

export const FeedPhotosItem = ({ props, setModalPhoto }: FeedItem) => {
  const { src, title, acessos } = props

  const handleClickPhoto = () => {
    setModalPhoto && setModalPhoto(props)
  }
  return (
    <>
      <Card onClick={handleClickPhoto}>
        <ImageCard src={src} alt={title} />
        <Acessos>
          <ViewIcon />
          {acessos}
        </Acessos>
      </Card>
    </>
  )
}
