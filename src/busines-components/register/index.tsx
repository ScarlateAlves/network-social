import { useContext } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { Flex, Text } from 'rebass'
import { useForm } from 'react-hook-form'

import { Button, Input, Form, Section, Heading } from '../../components'

import { schemaValidation } from '../../helpes/validation'
import { Error } from '../../helpes/error'

import { IFormRegister } from '../../types/form-input'
import { ErrorPropsResponse } from '../../types/error'

import { AuthContext } from '../../hooks/context/auth-context'
import { useCreateCredentials } from '../../hooks/use-create-credentials'
import { Choose, If } from 'react-extras'

export const CreateRegister = () => {
  const router = useRouter()

  const { onSubmit } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>({ resolver: yupResolver(schemaValidation) })
  const { mutate, error: err, isError, isLoading } = useCreateCredentials()

  const error = err as ErrorPropsResponse

  const onCreateUser = async ({ username, password, email }: IFormRegister) => {
    mutate(
      { username, password, email },
      {
        onSuccess: (data) => {
          if (data) onSubmit({ username, password })
          router.push('/')
        },
      }
    )
  }

  return (
    <Section>
      <Heading>Cadastro</Heading>

      <Form onSubmit={handleSubmit(onCreateUser)}>
        <Input
          type="text"
          name="username"
          label="Usuário"
          register={register}
        />
        <Error>{errors.username?.message}</Error>
        <Input type="email" name="email" label="Email" register={register} />
        <Error>{errors.email?.message}</Error>
        <Input
          type="password"
          name="password"
          label="Senha"
          register={register}
        />
        <Error>{errors.password?.message}</Error>
        <Choose>
          <Choose.When condition={isLoading}>
            <Button>Carregando...</Button>
          </Choose.When>
          <Choose.Otherwise>
            <Button>Cadastrar</Button>
          </Choose.Otherwise>
        </Choose>
      </Form>

      <If condition={isError}>
        <Error>{error?.response.data.message}</Error>
      </If>

      <Flex mt="2rem" style={{ gap: '1rem' }} flexDirection="column">
        <Text>Já tem cadastro? Então faça login</Text>
        <Button onClick={() => router.push('/login')}>login</Button>
      </Flex>
    </Section>
  )
}
