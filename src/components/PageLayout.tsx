import { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    } else {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1))
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [pathname, hash])

  return (
    <div className="min-h-screen bg-warm-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

