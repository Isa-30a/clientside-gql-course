import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import GQLProvider from './gqlProviders'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/*
          Keep your third part providers outside of my providers
          Put your provider as close as the child posible 
          */}

          <GQLProvider>{children}</GQLProvider>
        </Providers>
      </body>
    </html>
  )
}
