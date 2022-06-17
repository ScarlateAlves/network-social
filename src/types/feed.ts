export interface FeedPhotos {
  page: number
  total: number
  user: number
}

export interface FeedPhotosItensProps {
  acessos: string
  author: string
  date: string
  id?: number | undefined
  idade: string
  peso: string
  src?: string
  title: string
  total_comments: string
}

export interface FeePhotoComments {
  comment_ID: string
  comment_agent: string
  comment_approved: string
  comment_author: string
  comment_author_IP: string
  comment_author_email: string
  comment_author_url: string
  comment_content: string
  comment_date: string
  comment_date_gmt: string
  comment_karma: string
  comment_parent: string
  comment_post_ID: string
  comment_type: string
  user_id: string
}

export interface FeedPhotosItemResponse {
  photo: FeedPhotosItensProps
  comments: FeePhotoComments[]
}
