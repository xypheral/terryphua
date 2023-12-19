import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
  title = 'Terry Phua', // Add a title prop with a default value
}: {
  children: React.ReactNode
  title?: string // Make the title prop optional
}) {
  return (
    <>
      <Head>
        <title>{title}</title> {/* Use the title prop here */}
      </Head>
      <div className={inter.className}>
        <Navbar />
        {children}
      </div>
    </>
  )
}