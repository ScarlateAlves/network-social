import React, { useEffect } from 'react'
import { Choose } from 'react-extras'
import { Loading } from '../../components/loading'
import { PhotoContent } from '../../components/photo/photo-content'
import { Error } from '../../helpes/error'
import { useFeedPhotoItem } from '../../hooks/feed/use-feed-photo-itens'
import { FeedPhotosItensProps } from '../../types/feed'
import { Modal } from './styles'

interface ModalPhoto {
  modalPhoto?: FeedPhotosItensProps
}
export const FeedModal = ({ modalPhoto }: ModalPhoto) => {
  const { data, isError, isLoading, isSuccess, mutate } = useFeedPhotoItem()

  useEffect(() => {
    mutate(modalPhoto?.id)
  }, [modalPhoto?.id])

  return (
    <>
      <Modal>
        <Choose>
          <Choose.When condition={isSuccess}>
            <PhotoContent props={data} />
          </Choose.When>
          <Choose.When condition={isLoading}>
            <Loading />
          </Choose.When>
          <Choose.When condition={isError}>
            <Error>Algo deu errado</Error>
          </Choose.When>
        </Choose>
      </Modal>
    </>
  )
}
