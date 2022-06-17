import React, { ReactNode } from 'react'
import { FeedStyle } from './styles'

interface FeedProps {
  children: ReactNode
}

export const FeedLayout = ({ children }: FeedProps) => {
  return <FeedStyle>{children}</FeedStyle>
}
