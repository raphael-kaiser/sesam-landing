import { FileText, Mail, Phone, MapPin, Building } from 'lucide-react'

export function Impressum() {
  return (
    <div className="pt-24">
      <section className="relative">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-100 rounded-full text-ocean-700 text-sm font-medium mb-6">
                <FileText className="w-4 h-4" />
                <span>Rechtliches</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-ocean-900">
                Impressum
              </h1>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-sand-100">
              <section className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-5 h-5 text-sage-600" />
                  <h2 className="text-xl font-semibold text-ocean-900">
                    Angaben gemäß § 5 TMG
                  </h2>
                </div>
                <div className="text-ocean-700 leading-relaxed pl-8">
                  <p className="font-semibold text-ocean-900">
                    Sesam GmbH i.G. (in Gründung)
                  </p>
                  <p className="mt-2">
                    Musterstraße 12
                    <br />
                    10115 Berlin
                    <br />
                    Deutschland
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  Vertreten durch
                </h2>
                <p className="text-ocean-700 leading-relaxed">
                  Raphael [Nachname]
                  <br />
                  Geschäftsführer
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  Kontakt
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-ocean-700">
                    <Mail className="w-5 h-5 text-sage-600" />
                    <a
                      href="mailto:hallo@meinsesam.de"
                      className="hover:text-sage-600 transition-colors"
                    >
                      hallo@meinsesam.de
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-ocean-700">
                    <Phone className="w-5 h-5 text-sage-600" />
                    <a
                      href="tel:+493012345678"
                      className="hover:text-sage-600 transition-colors"
                    >
                      +49 (0) 30 12345678
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-ocean-700">
                    <MapPin className="w-5 h-5 text-sage-600" />
                    <span>10115 Berlin, Deutschland</span>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  Registereintrag
                </h2>
                <p className="text-ocean-700 leading-relaxed">
                  Eintragung im Handelsregister folgt in Kürze.
                  <br />
                  Registergericht: Amtsgericht Berlin-Charlottenburg
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  Umsatzsteuer-Identifikationsnummer
                </h2>
                <p className="text-ocean-700 leading-relaxed">
                  gemäß § 27 a Umsatzsteuergesetz:
                  <br />
                  DE (folgt)
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  Haftung für Inhalte
                </h2>
                <p className="text-ocean-600 text-sm leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                  hinweisen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  Haftung für Links
                </h2>
                <p className="text-ocean-600 text-sm leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                  die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich. Die
                  verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                  mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                  zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

