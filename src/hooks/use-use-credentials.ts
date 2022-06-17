import { AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

import { UserProps } from '../types/form-input'

import { httpAxios } from './use-axios'

export const fetchUser = async (token: string) => {
  return await httpAxios({
    url: 'api/user',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const useCredentials = () => {
  const { data: data, ...restQuery } = useMutation(fetchUser)

  const response = data as AxiosResponse<UserProps>

  return { data: response?.data, ...restQuery }
}
