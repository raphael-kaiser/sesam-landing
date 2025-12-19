import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const isHomePage = location.pathname === '/'

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-warm-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max section-padding !py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/sesam-logo.svg" 
              alt="Sesam" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-semibold text-ocean-900">Sesam</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection('funktionen')}
                  className="text-ocean-700 hover:text-sage-600 transition-colors font-medium"
                >
                  Funktionen
                </button>
                <button
                  onClick={() => scrollToSection('sicherheit')}
                  className="text-ocean-700 hover:text-sage-600 transition-colors font-medium"
                >
                  Sicherheit
                </button>
                <button
                  onClick={() => scrollToSection('preise')}
                  className="text-ocean-700 hover:text-sage-600 transition-colors font-medium"
                >
                  Preise
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/#funktionen"
                  className="text-ocean-700 hover:text-sage-600 transition-colors font-medium"
                >
                  Funktionen
                </Link>
                <Link
                  to="/#sicherheit"
                  className="text-ocean-700 hover:text-sage-600 transition-colors font-medium"
                >
                  Sicherheit
                </Link>
                <Link
                  to="/#preise"
                  className="text-ocean-700 hover:text-sage-600 transition-colors font-medium"
                >
                  Preise
                </Link>
              </>
            )}
            <Link
              to="/ueber-uns"
              className="text-ocean-700 hover:text-sage-600 transition-colors font-medium"
            >
              Über uns
            </Link>
          </div>

          <div className="hidden md:block">
            <Link to="/#demo" className="btn-primary">
              Kostenlos testen
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-ocean-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menü öffnen"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-sand-200">
            <div className="flex flex-col gap-4 pt-4">
              <Link
                to="/#funktionen"
                className="text-ocean-700 hover:text-sage-600 transition-colors font-medium"
              >
                Funktionen
              </Link>
              <Link
                to="/#sicherheit"
                className="text-ocean-700 hover:text-sage-600 transition-colors font-medium"
              >
                Sicherheit
              </Link>
              <Link
                to="/#preise"
                className="text-ocean-700 hover:text-sage-600 transition-colors font-medium"
              >
                Preise
              </Link>
              <Link
                to="/ueber-uns"
                className="text-ocean-700 hover:text-sage-600 transition-colors font-medium"
              >
                Über uns
              </Link>
              <Link to="/#demo" className="btn-primary text-center mt-2">
                Kostenlos testen
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

