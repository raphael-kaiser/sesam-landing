import { Mail, MapPin, Phone, MessageCircle, Shield, Headphones } from 'lucide-react'

export function Kontakt() {
  return (
    <div className="pt-24">
      <section className="relative">
        <div className="organic-shape w-96 h-96 bg-ocean-200 top-20 -right-20" />
        <div className="organic-shape w-64 h-64 bg-sage-300 bottom-10 -left-10" />

        <div className="container-max section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-100 rounded-full text-ocean-700 text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              <span>Kontakt</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-ocean-900 mb-6 leading-tight">
              Wir sind <span className="text-sage-600">für Sie da.</span>
            </h1>

            <p className="text-xl text-ocean-600 leading-relaxed">
              Haben Sie Fragen zu Sesam? Wir helfen Ihnen gerne weiter.
            </p>
          </div>
        </div>
      </section>

      <section className="relative gradient-soft">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-sand-100 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-7 h-7 text-sage-700" />
                </div>
                <h3 className="text-lg font-semibold text-ocean-900 mb-2">
                  Allgemeine Anfragen
                </h3>
                <p className="text-ocean-600 text-sm mb-4">
                  Für alle Fragen rund um Sesam
                </p>
                <a
                  href="mailto:hallo@meinsesam.de"
                  className="text-sage-600 font-medium hover:text-sage-700 transition-colors"
                >
                  hallo@meinsesam.de
                </a>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm border border-sand-100 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-ocean-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Headphones className="w-7 h-7 text-ocean-700" />
                </div>
                <h3 className="text-lg font-semibold text-ocean-900 mb-2">
                  Support & Sicherheit
                </h3>
                <p className="text-ocean-600 text-sm mb-4">
                  Technische Hilfe & Datenschutzanfragen
                </p>
                <a
                  href="mailto:hilfe@meinsesam.de"
                  className="text-ocean-600 font-medium hover:text-ocean-700 transition-colors"
                >
                  hilfe@meinsesam.de
                </a>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm border border-sage-200 text-center hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className="absolute top-3 right-3 bg-sage-100 rounded-full px-2 py-1 text-xs font-medium text-sage-700">
                  Direkt
                </div>
                <div className="w-14 h-14 bg-sand-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-7 h-7 text-sand-700" />
                </div>
                <h3 className="text-lg font-semibold text-ocean-900 mb-2">
                  Gründer-Direktkontakt
                </h3>
                <p className="text-ocean-600 text-sm mb-4">
                  Feedback direkt an den Gründer
                </p>
                <a
                  href="mailto:raphael@meinsesam.de"
                  className="text-sand-700 font-medium hover:text-sand-800 transition-colors"
                >
                  raphael@meinsesam.de
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-sand-100 max-w-xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ocean-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-ocean-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ocean-900 mb-3">
                    Postanschrift
                  </h3>
                  <address className="text-ocean-600 not-italic leading-relaxed">
                    Sesam GmbH i.G.
                    <br />
                    Musterstraße 12
                    <br />
                    10115 Berlin
                    <br />
                    Deutschland
                  </address>
                </div>
              </div>

              <div className="border-t border-sand-100 mt-6 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-sage-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ocean-900 mb-1">
                      Telefon
                    </h3>
                    <a
                      href="tel:+493012345678"
                      className="text-ocean-600 hover:text-sage-600 transition-colors"
                    >
                      +49 (0) 30 12345678
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="container-max section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-sage-50 rounded-3xl p-8 border border-sage-100">
              <h3 className="text-xl font-semibold text-ocean-900 mb-3">
                Unser Versprechen
              </h3>
              <p className="text-ocean-600 leading-relaxed">
                Wir antworten auf alle Anfragen innerhalb von{' '}
                <strong className="text-sage-700">24 Stunden</strong> an
                Werktagen. Ihr Anliegen ist uns wichtig.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

