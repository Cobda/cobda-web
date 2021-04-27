import React from 'react'
import { AppProps } from 'next/app'
import '../styles/main.scss'
import Meta from '../components/Meta'
import { Provider } from 'next-auth/client'
import { RecoilRoot } from 'recoil'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Provider session={pageProps.session}>
        <Meta />
        <Component {...pageProps} />
      </Provider>
    </RecoilRoot>
  )
}

export default App
