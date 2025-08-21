// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GlobalPreloader from '@/components/preloader/GlobalPreloader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Terrafo International - Comprehensive Business Services',
  description: 'Professional business solutions including import-export, technical services, HR consultancy, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalPreloader />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
