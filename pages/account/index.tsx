import type { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { Heading } from '../../src/components'
import { getLayout } from '../../src/components/layout/account-layout'

function Account() {
  return (
    <>
      <Heading>Minha Conta</Heading>
    </>
  )
}

export default Account

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['nextauth.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  return {
    props: {
      title: 'aqui',
    },
  }
}

Account.getLayout = getLayout
