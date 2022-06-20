import React, { useContext, useState } from 'react'
import { Choose, For } from 'react-extras'
import { Flex, Text } from 'rebass'
import { AuthContext } from '../../../hooks/context/auth-context'
import { FeePhotoComments } from '../../../types/feed'
import { ActiveLink } from '../../link/active-link'
import { PhotoCommentsForm } from './photo-comments-form'
import { Li, Ul } from './styles'

interface CommnetsProps {
  id: number
  comments: FeePhotoComments[]
}

export const PhotoComment = ({ id, comments }: CommnetsProps) => {
  const [comment, setComment] = useState<FeePhotoComments[]>(() => comments)
  const { user } = useContext(AuthContext)

  return (
    <Choose>
      <Choose.When condition={Boolean(user)}>
        <Ul>
          <For
            of={comment}
            render={(item: FeePhotoComments, index: number) => (
              <Li key={index}>
                <Flex style={{ gap: '0.5rem' }}>
                  <ActiveLink href="">
                    <Text fontWeight="700">@{item.comment_author}:</Text>{' '}
                  </ActiveLink>
                  <Text> {item.comment_content}</Text>
                </Flex>
              </Li>
            )}
          />
        </Ul>
        <PhotoCommentsForm setComment={setComment} id={id} />
      </Choose.When>
    </Choose>
  )
}
