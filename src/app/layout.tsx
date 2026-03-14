import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Donalds Delivery',
  description: 'A Hamburguer Delivery App ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt_BR"
      className={cn('font-sans', poppins.className, 'antialiased')}
    >
      <body>{children}</body>
    </html>
  )
}
