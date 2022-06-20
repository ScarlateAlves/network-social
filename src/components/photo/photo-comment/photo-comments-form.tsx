/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form'
import { Flex } from 'rebass'
import { useFeedComment } from '../../../hooks/feed/use-feed-comment'
import { FeePhotoComments } from '../../../types/feed'
import { Button } from '../../button'
import { Textarea } from './styles'

export interface FormComments {
  id?: number
  comment?: string
}

export interface Set {
  id?: number
  setComment: React.Dispatch<React.SetStateAction<FeePhotoComments[]>>
  data?: FormComments
}

export const PhotoCommentsForm = ({ setComment, id }: Set) => {
  const { mutate, data: data } = useFeedComment()

  const { register, handleSubmit } = useForm<FormComments>()
  const onSubmitComment = ({ comment }: FormComments) => {
    mutate({ id: id, comment })
    if (data) {
      setComment((item: any) => [...item, data])
    }

    return
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitComment)}>
        <Flex
          flexDirection="column"
          m="2rem"
          justifyContent="space-between"
          alignItems="self-end"
        >
          <Textarea
            placeholder="Adicione um comentario"
            {...register('comment')}
          />
          <Button mt="0.5rem" height="2.5rem" width="5rem">
            Enviar
          </Button>
        </Flex>
      </form>
    </>
  )
}
