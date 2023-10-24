import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Signika_Negative } from 'next/font/google'
import Favicon from '../../public/imgs/favicon/ui.ico'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const SignikaNegative = Signika_Negative({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-SignikaNegative",
});

export const metadata: Metadata = {
  title: {
    default: '10-ui',
    template: "%s | 10-ui"
  },
  description: 'simple admin tool for All developers',
  icons: [{rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${SignikaNegative.className}`}>{children}</body>
    </html>
  )
}
