import Image from 'next/image'
import React from 'react'

import login from '../../src/assets/login.jpg'

import { LoginForm } from '../../src/busines-components/login-form'

import { Wrapper } from '../../src/components'
import { getLayout } from '../../src/components/layout/main-layout'

function Login() {
  return (
    <>
      <Wrapper>
        <Image src={login} height="100%" />
        <LoginForm />
      </Wrapper>
    </>
  )
}

export default Login

Login.getLayout = getLayout
