import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Script from 'next/script'

// 动态导入组件
const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: true,
  loading: () => <div className="h-[100px]" /> // 占位符
})

const NavBlur = dynamic(() => import('@/components/NavBlur'), {
  ssr: true
})

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
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Charles - UI/UX Designer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="/sw-register.js"
        strategy="afterInteractive"
      />
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
