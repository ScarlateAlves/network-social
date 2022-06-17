import { parseCookies } from 'nookies'
import { useMutation } from 'react-query'
import { httpAxios } from './use-axios'

export const fetchAddPhotos = async (formData: FormData) => {
  const { 'nextauth.token': token } = parseCookies()
  return await httpAxios({
    url: 'api/photo',
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    data: formData,
  })
}

export const useAddPhotos = () => {
  const { data: data, ...restQuery } = useMutation(fetchAddPhotos)

  const response = data

  return { data: response?.data, ...restQuery }
}
