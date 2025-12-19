import { Link } from 'react-router-dom'
import { Server } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-ocean-950 text-ocean-200">
      <div className="container-max section-padding !py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/sesam-logo-white.svg" 
                alt="Sesam" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-semibold text-white">Sesam</span>
            </Link>
            <p className="text-ocean-400 text-sm leading-relaxed">
              Der KI-Assistent, der Therapeuten ihre Zeit zurückgibt.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Produkt</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#funktionen"
                  className="text-ocean-400 hover:text-white transition-colors text-sm"
                >
                  Funktionen
                </Link>
              </li>
              <li>
                <Link
                  to="/#sicherheit"
                  className="text-ocean-400 hover:text-white transition-colors text-sm"
                >
                  Sicherheit
                </Link>
              </li>
              <li>
                <Link
                  to="/#preise"
                  className="text-ocean-400 hover:text-white transition-colors text-sm"
                >
                  Preise
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/ueber-uns"
                  className="text-ocean-400 hover:text-white transition-colors text-sm"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  to="/karriere"
                  className="text-ocean-400 hover:text-white transition-colors text-sm"
                >
                  Karriere
                </Link>
              </li>
              <li>
                <a
                  href="mailto:raphael@meinsesam.de"
                  className="text-ocean-400 hover:text-white transition-colors text-sm"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/impressum"
                  className="text-ocean-400 hover:text-white transition-colors text-sm"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  to="/datenschutz"
                  className="text-ocean-400 hover:text-white transition-colors text-sm"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  to="/agb"
                  className="text-ocean-400 hover:text-white transition-colors text-sm"
                >
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ocean-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ocean-500 text-sm">
            © 2025 Sesam GmbH i.G. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-ocean-500 text-sm">
              <Server className="w-4 h-4" />
              Made with ❤️ in Germany
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

