import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'


const inter = Inter({ 
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className={inter.className}>
  <Component {...pageProps} />
  <Footer />
  </main>
   )
}
