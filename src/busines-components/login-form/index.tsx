import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { Flex, Text } from 'rebass'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Choose, If } from 'react-extras'

import { Button, Input } from '../../components'
import { Section } from '../../components/section'

import { IFormInput } from '../../types/form-input'
import { schemaValidation } from '../../helpes/validation'
import { Error } from '../../helpes/error'

import { AuthContext } from '../../hooks/context/auth-context'

import { LineLink } from './styles'
import { Heading } from '../../components/heading'
import { Form } from '../../components/form'

export const LoginForm = () => {
  const router = useRouter()

  const [error, setError] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schemaValidation) })

  const { onSubmit, isError, isLoading } = useContext(AuthContext)

  const onSingIn = async ({ username, password }: IFormInput) => {
    try {
      await onSubmit({ username, password })
    } catch (error) {
      if (error) {
        setError(true)
      }
    }
  }

  return (
    <>
      <Section>
        <Heading>Login</Heading>

        <Form onSubmit={handleSubmit(onSingIn)}>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            style={{ gap: '1rem' }}
          >
            <Input
              type="text"
              name="username"
              label="Usuário"
              register={register}
            />
            <Error>{errors.username?.message}</Error>
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
                <Button>Entrar</Button>
              </Choose.Otherwise>
            </Choose>
          </Flex>
        </Form>

        <If condition={error && isError}>
          <Error>Email ou senha incorreto</Error>
        </If>

        <Link href="/login/forget">
          <LineLink>Esqueceu a senha?</LineLink>
        </Link>

        <Flex mt="2rem" flexDirection="column" style={{ gap: '1.5rem' }}>
          <Heading size="2rem">Cadastre-se</Heading>
          <Text>Ainda não possue conta? Cadastre-se</Text>
          <Button onClick={() => router.push('/login/register')}>
            Cadastro
          </Button>
        </Flex>
      </Section>
    </>
  )
}
