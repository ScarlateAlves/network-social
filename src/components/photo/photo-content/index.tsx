import Link from 'next/link'
import React, { useContext } from 'react'
import { Choose } from 'react-extras'
import { Flex, Text } from 'rebass'
import { ViewIcon } from '../../../assets/icon'
import { AuthContext } from '../../../hooks/context/auth-context'
import {
  FeedPhotosItemResponse,
  FeedPhotosItensProps,
  FeePhotoComments,
} from '../../../types/feed'
import { Heading } from '../../heading'
import { PhotoComment } from '../photo-comment'
import { PhotoDelete } from '../photo-delete'
import {
  AtributesStyles,
  ContainerPhotoItem,
  ContainerPhotoStyles,
  PhotoDetailStyles,
  ViewPhotoStyles,
  Close,
} from './styles'

interface PhotoContentProps {
  props?: FeedPhotosItemResponse
  setModalPhoto?: React.Dispatch<
    React.SetStateAction<FeedPhotosItensProps | undefined | null>
  >
}

export const PhotoContent = ({ props, setModalPhoto }: PhotoContentProps) => {
  const comments = props?.comments as FeePhotoComments[]

  const { user } = useContext(AuthContext)
  const seeButton = user?.username === props?.photo.author ? true : false
  return (
    <>
      <ContainerPhotoStyles>
        <ContainerPhotoItem>
          <Close onClick={() => setModalPhoto && setModalPhoto(null)}>X</Close>
          <img src={props?.photo.src} alt={props?.photo.title} />
        </ContainerPhotoItem>
        <PhotoDetailStyles>
          <Flex flexDirection="column">
            <Flex justifyContent="space-between">
              <Choose>
                <Choose.When condition={seeButton}>
                  <PhotoDelete id={props?.photo.id} />
                </Choose.When>
                <Choose.Otherwise>
                  <Link href={`/profile/${props?.photo.author}`}>
                    <Text> @{props?.photo?.author}</Text>
                  </Link>
                </Choose.Otherwise>
              </Choose>
              <ViewPhotoStyles>
                <ViewIcon /> {props?.photo.acessos}
              </ViewPhotoStyles>
            </Flex>
            <Link href={`/foto/${props?.photo.id}`}>
              <Heading>{props?.photo.author}</Heading>
            </Link>
            <AtributesStyles>
              <Text>| {props?.photo.peso} kg</Text>
              <Text>| {props?.photo.idade} anos</Text>
            </AtributesStyles>
          </Flex>
        </PhotoDetailStyles>
        <PhotoComment id={Number(props?.photo.id)} comments={comments} />
      </ContainerPhotoStyles>
    </>
  )
}
