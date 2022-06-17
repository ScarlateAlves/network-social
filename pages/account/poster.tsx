import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React from 'react'
import { PosterForm } from '../../src/busines-components/account/poster/poster-from'

import { Heading } from '../../src/components'
import { getLayout } from '../../src/components/layout/account-layout'

function Poster() {
  return (
    <>
      <Heading>Adicionar Fotos</Heading>
      <PosterForm />
    </>
  )
}

export default Poster

Poster.getLayout = getLayout

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
