import type { NextPage } from 'next'
import type { NextComponentType } from 'next/dist/next-server/lib/utils'

declare module 'next' {
  // eslint-disable-next-line @typescript-eslint/ban-types
  export declare type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout: (component: NextComponentType) => JSX.Element
  }
}
