import { useMutation } from 'react-query'
import { IFormRegister } from '../types/form-input'
import { httpAxios } from './use-axios'

export const fetchCreateUser = async ({
  username,
  password,
  email,
}: IFormRegister) => {
  return await httpAxios({
    url: 'api/user',
    method: 'POST',
    params: {
      username,
      password,
      email,
    },
    headers: { 'Content-Type': 'application/json' },
  })
}

export const useCreateCredentials = () => {
  const { data: data, ...restQuery } = useMutation(fetchCreateUser)

  const response = data

  return { data: response?.data, ...restQuery }
}
