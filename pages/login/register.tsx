import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

import login from '../../src/assets/login.jpg'

import { CreateRegister } from '../../src/busines-components/register'

import { Wrapper } from '../../src/components'

const Register: NextPage = () => {
  return (
    <>
      <>
        <Wrapper>
          <Image src={login} height="100%" />
          <CreateRegister />
        </Wrapper>
      </>
    </>
  )
}

export default Register
