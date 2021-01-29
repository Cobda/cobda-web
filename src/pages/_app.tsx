import { AppProps } from 'next/app'
import '../styles/main.scss'
import Meta from '../components/Meta'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Meta />
      <Component {...pageProps} />{' '}
    </>
  )
}

export default App
