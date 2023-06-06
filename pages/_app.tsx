import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Lexend_Deca } from 'next/font/google'

const lexendDeca = Lexend_Deca({ 
  subsets: ['latin-ext'] ,
  weight: ["300", "400", "500", "600", "700"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className={lexendDeca.className}>
  <Component {...pageProps} />
  </main>
   )
}
