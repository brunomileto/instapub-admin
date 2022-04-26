import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles()}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
