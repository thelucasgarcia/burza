import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({subsets: ['latin']});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body className='bg-stone-900'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
