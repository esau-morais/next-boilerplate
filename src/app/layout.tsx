import { ReactNode } from 'react'

import { Inter as FontSans } from '@next/font/google'
const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter'
})


import './globals.css'

const RootLayout = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <html lang="en" className={fontSans.variable}>
      <head />
      <body>
        <main>
          {children}
        </main>
      </body>
    </html >
  )
}

export default RootLayout
