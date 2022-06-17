/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react'
import { Choose, If } from 'react-extras'
import { useForm } from 'react-hook-form'
import { Flex, Text } from 'rebass'
import { Button, Form } from '../../../components'
import { InputField } from '../../../components/input/input-field'
import { useAddPhotos } from '../../../hooks/use-add-photo'
import { PosterFormProps } from '../../../types/form-input'

export const PosterForm = () => {
  const [img, setImg] = useState<any>()

  const { register, handleSubmit } = useForm<PosterFormProps>()
  const { mutate, isLoading, isSuccess, isError } = useAddPhotos()

  async function onSubimitPoster({ nome, peso, idade }: PosterFormProps) {
    const formData = new FormData()
    formData.append('nome', nome)
    formData.append('peso', peso)
    formData.append('idade', idade)
    formData.append('img', img?.raw)
    mutate(formData)
  }

  function handleImgChange(e: any) {
    setImg({
      raw: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0]),
    })
  }

  return (
    <Flex
      style={{ gap: '3rem' }}
      flexWrap="wrap"
      justifyContent="space-between"
    >
      <Form onSubmit={handleSubmit(onSubimitPoster)}>
        <InputField label="Nome" {...register('nome')} />
        <InputField label="Peso" {...register('peso')} />
        <InputField label="Idade" {...register('idade')} />
        <input accept="*" type="file" onChange={handleImgChange} />
        <Choose>
          <Choose.When condition={isLoading}>
            <Button>.Enviando...</Button>
          </Choose.When>
          <Choose.Otherwise>
            <Button>Enviar</Button>
          </Choose.Otherwise>
        </Choose>
        <If condition={isSuccess}>
          <Text>Dados enviado com sucesso</Text>
        </If>
        <If condition={isError}>
          <Text>Não foi possivel enviar</Text>
        </If>
      </Form>
      <If condition={Boolean(img?.preview)}>
        <Flex maxWidth="600px" maxHeight="300px">
          <img src={img?.preview} />
        </Flex>
      </If>
    </Flex>
  )
}
