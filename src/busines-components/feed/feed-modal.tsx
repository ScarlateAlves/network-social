import React, { useEffect } from 'react'
import { Choose } from 'react-extras'
import { Loading } from '../../components/loading'
import { PhotoContent } from '../../components/photo/photo-content'
import { Error } from '../../helpes/error'
import { useFeedPhotoItem } from '../../hooks/feed/use-feed-photo-itens'
import { FeedPhotosItensProps } from '../../types/feed'
import { Modal } from './styles'

interface ModalPhoto {
  modalPhoto?: FeedPhotosItensProps | null
  setModalPhoto?: React.Dispatch<
    React.SetStateAction<FeedPhotosItensProps | undefined | null>
  >
}
export const FeedModal = ({ modalPhoto, setModalPhoto }: ModalPhoto) => {
  const { data, isError, isLoading, isSuccess, mutate } = useFeedPhotoItem()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickModal = (e: any) => {
    if (e.target === e.currentTarget) {
      setModalPhoto && setModalPhoto(null)
    }
  }
  useEffect(() => {
    mutate(modalPhoto?.id)
  }, [modalPhoto?.id])

  return (
    <>
      <Modal onClick={handleClickModal}>
        <Choose>
          <Choose.When condition={isSuccess}>
            <PhotoContent props={data} setModalPhoto={setModalPhoto} />
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
