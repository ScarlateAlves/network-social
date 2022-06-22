import React from 'react'
import { Choose } from 'react-extras'
import { Error } from '../../../helpes/error'
import { useFeedDeletePhoto } from '../../../hooks/feed/use-feed-delete-photo'
import { Button } from '../../button'

interface Delete {
  id?: number
}
export const PhotoDelete = ({ id }: Delete) => {
  const { mutate, isError, isLoading, isSuccess } = useFeedDeletePhoto()

  const handleSubmitDelete = () => {
    const confirm = window.confirm('Deseja deletar?')
    if (confirm) mutate(id)
  }

  return (
    <>
      <Choose>
        <Choose.When condition={isError}>
          <Error>Deu erro</Error>
        </Choose.When>
        <Choose.When condition={isLoading}>
          <Button>Deletando..</Button>
        </Choose.When>
        <Choose.When condition={isSuccess}>foto apagada</Choose.When>
        <Choose.Otherwise>
          <Button onClick={handleSubmitDelete}>Deletar</Button>
        </Choose.Otherwise>
      </Choose>
    </>
  )
}
