import { Box, Flex } from 'rebass'
import { SideMenu } from '../../navegation/side-menu'
import { getLayout as getMenuLayout } from '../main-layout/index'

interface Account {
  children: React.ReactNode
}

export const MyAccountLayout = ({ children }: Account) => (
  <>
    <Flex style={{ gap: '2rem' }}>
      <SideMenu />
      <Box mx="13rem">{children}</Box>
    </Flex>
  </>
)

export const getLayout = (page: React.ReactNode) =>
  getMenuLayout(<MyAccountLayout>{page}</MyAccountLayout>)
