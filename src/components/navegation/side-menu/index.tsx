import { useEffect, useState } from 'react'
import { Box } from 'rebass'
import { useMedia } from '../../../hooks/use-media'
import { MainMenu } from './main-menu'
import { HeaderMenu, MobileButton } from './styles'

export const SideMenu = () => {
  const [mobile, setMobile] = useState<boolean>(false)
  const mobiles = useMedia('(max-width: 40rem)')

  useEffect(() => {
    if (mobiles) setMobile(false)
  }, [mobiles])

  return (
    <>
      {mobiles && (
        <MobileButton
          mobile={mobile}
          aria-label="Menu"
          onClick={() => setMobile(!mobile)}
        ></MobileButton>
      )}
      <Box>
        <HeaderMenu mobile={mobile} display={mobiles}>
          <MainMenu />
        </HeaderMenu>
      </Box>
    </>
  )
}
