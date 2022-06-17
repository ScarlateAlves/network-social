import React from 'react'
import type { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from '../src/hooks/context/auth-context'

import { GlobalStyle, theme } from '../styles/global-style'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const queryClient = new QueryClient()
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default App
