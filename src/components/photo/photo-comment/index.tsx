import React, { useContext, useRef, useState } from 'react'
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const commentSection = useRef<any>(null)
  const { user } = useContext(AuthContext)

  /*  useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight
  }, [comment])
*/
  return (
    <Choose>
      <Choose.When condition={Boolean(user)}>
        <Ul ref={commentSection}>
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
