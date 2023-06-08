import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import type { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin']
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
    <ChakraProvider>
    <main className={inter.className}>
      {getLayout(<Component {...pageProps} />)}
      <Footer />
    </main>
    </ChakraProvider>
  )
}
