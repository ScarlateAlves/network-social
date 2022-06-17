import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React from 'react'
import { Heading } from '../../src/components'

import { getLayout } from '../../src/components/layout/account-layout'

function Statistic() {
  return (
    <>
      <Heading>Estatistica</Heading>
    </>
  )
}
export default Statistic

Statistic.getLayout = getLayout

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
    props: {},
  }
}
