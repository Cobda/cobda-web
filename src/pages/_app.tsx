import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import '../styles/main.scss'
import Meta from '../components/Meta'
import { Provider } from 'next-auth/client'
import { RecoilRoot } from 'recoil'
import { useRouter } from 'next/router'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isLoading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleRouteStart = () => {
      setLoading(true)
    }

    const handleRouteEnd = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleRouteStart)
    router.events.on('routeChangeComplete', handleRouteEnd)
    router.events.on('routeChangeError', handleRouteEnd)

    return () => {
      router.events.off('routeChangeStart', handleRouteStart)
      router.events.off('routeChangeComplete', handleRouteEnd)
      router.events.off('routeChangeError', handleRouteEnd)
    }
  }, [])

  const renderAppComponent = () =>
    isLoading ? (
      <img className="loading" src="/icons/loading.svg" alt="Loading Image" />
    ) : (
      <RecoilRoot>
        <Provider session={pageProps.session}>
          <Meta />
          <Component {...pageProps} />
        </Provider>
      </RecoilRoot>
    )

  return renderAppComponent()
}

export default App
