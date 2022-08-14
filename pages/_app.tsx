import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import { app } from 'firebaseConfig'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
