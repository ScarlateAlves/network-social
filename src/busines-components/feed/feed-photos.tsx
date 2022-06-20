import React from 'react'
import { Choose, For } from 'react-extras'
import { Loading } from '../../components/loading'
import { Error } from '../../helpes/error'
import { useFeedPhotos } from '../../hooks/feed/use-feed-photos'
import { FeedPhotosItensProps } from '../../types/feed'
import { FeedPhotosItem } from './feed-photos-item'
import { ContainerCard } from './styles'

interface FeedPhotosModal {
  setModalPhoto?: React.Dispatch<
    React.SetStateAction<FeedPhotosItensProps | undefined | null>
  >
}

export const FeedPhotos = ({ setModalPhoto }: FeedPhotosModal) => {
  const {
    isFetched,
    isLoading,
    isError,
    data: data,
  } = useFeedPhotos({
    page: 1,
    total: 6,
    user: 0,
  })

  return (
    <>
      <Choose>
        <Choose.When condition={isFetched}>
          <ContainerCard>
            <For
              of={data}
              render={(item: FeedPhotosItensProps, index: number) => (
                <FeedPhotosItem
                  key={index}
                  props={item}
                  setModalPhoto={setModalPhoto}
                />
              )}
            />
          </ContainerCard>
        </Choose.When>
        <Choose.When condition={isLoading}>
          <Loading />
        </Choose.When>
        <Choose.When condition={isError}>
          <Error>Parece que algo deu errado</Error>
        </Choose.When>
      </Choose>
    </>
  )
}
