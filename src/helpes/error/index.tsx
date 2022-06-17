import { ErrorProps } from '../../types/error'
import { ErrorStyles } from './styles'

export const Error = ({ children }: ErrorProps) => {
  if (!children) return null
  return <ErrorStyles>{children}</ErrorStyles>
}
