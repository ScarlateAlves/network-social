import { useRouter } from 'next/router'
import { HTMLAttributes } from 'react'
import { NavLink } from './style'

interface ActiveLinkProps extends HTMLAttributes<HTMLLinkElement> {
  children: React.ReactNode
  href: string
}

export function ActiveLink({ children, href }: ActiveLinkProps) {
  const router = useRouter()

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <NavLink href={href} onClick={handleClick} pathname={router.asPath}>
      {children}
    </NavLink>
  )
}
