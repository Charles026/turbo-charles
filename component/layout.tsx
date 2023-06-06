import '../styles/globals.css'
import { Lexend_Deca } from 'next/font/google'
import Footer from '@/component/Footer';

const lexendDeca = Lexend_Deca({ subsets: ['latin-ext'] })

export const metadata = {
  title: 'Charles Design',
  description: 'Charles Design Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Charles Design</title>
      </head>
      <body className={lexendDeca.className}>{children}

      <Footer/>
      </body>
    </html>
  )
}
