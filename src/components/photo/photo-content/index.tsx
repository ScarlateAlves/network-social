import Link from 'next/link'
import React from 'react'
import { Box, Flex, Text } from 'rebass'
import { FeedPhotosItemResponse } from '../../../types/feed'
import { Heading } from '../../heading'
import { PhotoComment } from '../photo-comment'
import {
  AtributesStyles,
  ContainerPhotoItem,
  ContainerPhotoStyles,
  PhotoDetailStyles,
  ViewPhotoStyles,
} from './styles'

interface PhotoContentProps {
  props?: FeedPhotosItemResponse
}

export const PhotoContent = ({ props }: PhotoContentProps) => {
  console.log(props)
  return (
    <>
      <ContainerPhotoStyles>
        <ContainerPhotoItem>
          <img src={props?.photo.src} alt={props?.photo.title} />
        </ContainerPhotoItem>
        <PhotoDetailStyles>
          <Flex flexDirection="column">
            <Box>
              <Link href={`/profile/${props?.photo.author}`}>
                <Text> @{props?.photo?.author}</Text>
              </Link>
              <ViewPhotoStyles>{props?.photo.acessos}</ViewPhotoStyles>
            </Box>
            <Link href={`/foto/${props?.photo.id}`}>
              <Heading>{props?.photo.author}</Heading>
            </Link>

            <AtributesStyles>
              <Text>{props?.photo.peso} kg</Text>
              <Text>{props?.photo.idade} anos</Text>
            </AtributesStyles>
          </Flex>
        </PhotoDetailStyles>
      </ContainerPhotoStyles>
      <PhotoComment />
    </>
  )
}
