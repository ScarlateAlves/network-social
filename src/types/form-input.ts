import { InputProps as InputPropsRebass } from '@rebass/forms'
import { Path, UseFormRegister, RegisterOptions } from 'react-hook-form'

export type AuthContextType = {
  isAuthenticated: boolean
  user: UserProps | null
  onSubmit: ({ username, password }: IFormInput) => Promise<void>
  handleDestroyCookie: () => void
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
}

export interface TokenProps {
  token: string
  user_display_name: string
  user_email: string
  user_nicename: string
}

export interface TokenResponse {
  data: TokenProps
}

//response
export interface UserProps {
  email: string
  id: number
  nome: string
  username: string
}

export interface UserPropsResponse {
  data: UserProps
}

//input
export interface IFormInput {
  username: string
  password: string
}

export interface IFormRegister {
  username: string
  password: string
  email?: string
}

export interface PosterFormProps {
  nome: string
  peso: string
  idade: string
  img: string
}

export interface InputRegisterProps extends RegisterOptions {
  name: Path<IFormInput | IFormRegister>
  label: string
  register: UseFormRegister<IFormRegister | IFormInput>
}

export type InputProps = InputPropsRebass & InputRegisterProps
