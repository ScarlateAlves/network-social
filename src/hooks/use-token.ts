import { httpAxios } from './use-axios'

import { IFormInput } from '../types/form-input'

export const fetchToken = async ({ username, password }: IFormInput) => {
  return await httpAxios({
    url: 'jwt-auth/v1/token',
    method: 'POST',
    data: {
      username,
      password,
    },
    headers: { 'Content-Type': 'application/json' },
  })
}

export const fetchTokenValidation = async (token: string) => {
  return await httpAxios({
    url: 'jwt-auth/v1/token/validate',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
