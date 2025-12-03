import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'valani.dev',
  description: 'Portfolio de Valentin Hammani, développeur web.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  )
}
