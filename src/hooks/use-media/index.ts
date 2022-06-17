import { useEffect, useState } from 'react'

export const useMedia = (media: string) => {
  const [match, setMatch] = useState<boolean>()

  const changeMatch = () => {
    const { matches } = window.matchMedia(media)
    setMatch(matches)
  }

  useEffect(() => {
    changeMatch()
    window.addEventListener('resize', changeMatch)
    return () => {
      window.removeEventListener('resize', changeMatch)
    }
  }, [media])

  return match
}
