import { parseCookies } from 'nookies'
import { useMutation } from 'react-query'
import { FormComments } from '../../components/photo/photo-comment/photo-comments-form'

import { httpAxios } from '.././use-axios'

export const fetchComment = async ({ id, comment }: FormComments) => {
  const { 'nextauth.token': token } = parseCookies()
  return await httpAxios({
    url: `api/comment/${id}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data: {
      comment,
    },
  })
}

export const useFeedComment = () => {
  const { data: data, ...restQuery } = useMutation(fetchComment)

  const response = data

  return { data: response?.data, ...restQuery }
}
