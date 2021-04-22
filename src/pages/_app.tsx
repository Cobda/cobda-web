import React from 'react'
import { AppProps } from 'next/app'
import '../styles/main.scss'
import Meta from '../components/Meta'
import { Provider } from 'next-auth/client'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <Meta />
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
