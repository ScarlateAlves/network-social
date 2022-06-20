import React, { useState } from 'react'
import { If } from 'react-extras'
import { FeedPhotosItensProps } from '../../types/feed'
import { FeedModal } from './feed-modal'
import { FeedPhotos } from './feed-photos'

export const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState<FeedPhotosItensProps | null>()
  return (
    <>
      <If condition={Boolean(modalPhoto)}>
        <FeedModal modalPhoto={modalPhoto} setModalPhoto={setModalPhoto} />
      </If>
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </>
  )
}
