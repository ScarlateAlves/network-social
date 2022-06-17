import { useMutation } from 'react-query'
import { FeedPhotosItemResponse } from '../../types/feed'
import { httpAxios } from '../use-axios'

export const fetchFeedPhotoItens = async (id?: number) => {
  return await httpAxios({
    url: `api/photo/${id}`,
    method: 'GET',
    params: {},
  })
}

export const useFeedPhotoItem = () => {
  const { data: response, ...restQuery } = useMutation(fetchFeedPhotoItens)

  const data = response?.data as FeedPhotosItemResponse
  return {
    data: data,
    ...restQuery,
  }
}
