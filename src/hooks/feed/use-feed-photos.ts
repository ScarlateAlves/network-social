import { useQuery } from 'react-query'
import { FeedPhotos, FeedPhotosItensProps } from '../../types/feed'
import { httpAxios } from '../use-axios'

export const fetchFeedPhotos = async ({ page, total, user }: FeedPhotos) => {
  return await httpAxios({
    url: 'api/photo/',
    method: 'GET',
    params: {
      page,
      total,
      user,
    },
  })
}

export const useFeedPhotos = ({ page, total, user }: FeedPhotos) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: response, ...restQuery } = useQuery<any>(
    ['useFeedPhotos'],
    () => fetchFeedPhotos({ page, total, user })
  )

  const data = response?.data as FeedPhotosItensProps[]
  return {
    data: data,
    ...restQuery,
  }
}
