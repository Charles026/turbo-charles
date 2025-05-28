import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import NavBlur from '@/components/NavBlur'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

type NextPageWithLayout = {
  getLayout?: (page: ReactNode) => ReactNode
} & AppProps

type ComponentWithLayout = React.ComponentType & {
  getLayout?: (page: ReactNode) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = (Component as ComponentWithLayout).getLayout || ((page: ReactNode) => <>{page}</>);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <ThemeProvider>
        <main className={inter.className}>
          <NavBlur/>
          {getLayout(<Component {...pageProps} />)}
          <Footer />
        </main>
      </ThemeProvider>
    </>
  )
}
