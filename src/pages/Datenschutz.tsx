import { Shield, AlertTriangle, Server, Lock, Eye, Trash2 } from 'lucide-react'

export function Datenschutz() {
  return (
    <div className="pt-24">
      <section className="relative">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-100 rounded-full text-ocean-700 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Rechtliches</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-ocean-900">
                Datenschutzerklärung
              </h1>
            </div>

            <div className="bg-sage-50 border-2 border-sage-200 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-sage-700" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-ocean-900 mb-2">
                    Hinweis für Berufsgeheimnisträger
                  </h2>
                  <p className="text-ocean-700 leading-relaxed">
                    Wir bieten einen Standard-AVV (Auftragsverarbeitungsvertrag)
                    an, der die Anforderungen nach{' '}
                    <strong>Art. 28 DSGVO</strong> sowie die Wahrung der
                    Berufsgeheimnisse gem. <strong>§ 203 StGB</strong>{' '}
                    berücksichtigt. Diesen erhalten Sie auf Anfrage unter{' '}
                    <a
                      href="mailto:datenschutz@meinsesam.de"
                      className="text-sage-700 underline hover:text-sage-800"
                    >
                      datenschutz@meinsesam.de
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-sand-100">
              <section className="mb-10 pb-10 border-b border-sand-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-ocean-100 rounded-lg flex items-center justify-center">
                    <span className="text-ocean-700 font-bold text-sm">1</span>
                  </div>
                  <h2 className="text-xl font-semibold text-ocean-900">
                    Verantwortlicher
                  </h2>
                </div>
                <div className="text-ocean-700 leading-relaxed pl-11">
                  <p>
                    Verantwortlicher im Sinne der DSGVO ist:
                  </p>
                  <p className="mt-4 font-medium text-ocean-900">
                    Sesam GmbH i.G.
                    <br />
                    Musterstraße 12
                    <br />
                    10115 Berlin
                  </p>
                  <p className="mt-4">
                    E-Mail:{' '}
                    <a
                      href="mailto:datenschutz@meinsesam.de"
                      className="text-sage-600 hover:text-sage-700"
                    >
                      datenschutz@meinsesam.de
                    </a>
                  </p>
                </div>
              </section>

              <section className="mb-10 pb-10 border-b border-sand-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-ocean-100 rounded-lg flex items-center justify-center">
                    <span className="text-ocean-700 font-bold text-sm">2</span>
                  </div>
                  <h2 className="text-xl font-semibold text-ocean-900">
                    Hosting & Infrastruktur
                  </h2>
                </div>
                <div className="text-ocean-700 leading-relaxed pl-11">
                  <div className="flex items-start gap-3 mb-4">
                    <Server className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                    <p>
                      Unsere Server stehen in{' '}
                      <strong className="text-ocean-900">
                        Frankfurt am Main
                      </strong>{' '}
                      (AWS/Google Cloud Region Germany).
                    </p>
                  </div>
                  <p className="mb-4">
                    Die genutzten Rechenzentren sind zertifiziert nach:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>ISO 27001</strong> – Internationaler Standard für
                      Informationssicherheits-Management
                    </li>
                    <li>
                      <strong>BSI C5</strong> – Testiert nach den Kriterien des
                      Bundesamts für Sicherheit in der Informationstechnik
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-10 pb-10 border-b border-sand-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-ocean-100 rounded-lg flex items-center justify-center">
                    <span className="text-ocean-700 font-bold text-sm">3</span>
                  </div>
                  <h2 className="text-xl font-semibold text-ocean-900">
                    Verarbeitung von Patientendaten
                  </h2>
                </div>
                <div className="text-ocean-700 leading-relaxed pl-11">
                  <div className="bg-ocean-50 rounded-xl p-4 mb-4 border border-ocean-100">
                    <p className="font-semibold text-ocean-900 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-ocean-700" />
                      Wichtiger Hinweis:
                    </p>
                    <p className="mt-2">
                      Es erfolgt <strong>kein</strong> Training von KI-Modellen
                      mit Ihren Patientendaten.
                    </p>
                  </div>
                  <p className="mb-4">
                    Die Daten werden ausschließlich zur Erbringung der
                    Dienstleistung verarbeitet:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Transkription von Sitzungsaufnahmen</li>
                    <li>Erstellung von strukturierten Zusammenfassungen</li>
                    <li>Generierung von Arztbriefen</li>
                  </ul>
                  <div className="flex items-start gap-3">
                    <Trash2 className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Löschung:</strong> Daten werden nach Ihrer Weisung
                      und gemäß den gesetzlichen Aufbewahrungsfristen gelöscht.
                      Sie behalten die volle Kontrolle.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-10 pb-10 border-b border-sand-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-ocean-100 rounded-lg flex items-center justify-center">
                    <span className="text-ocean-700 font-bold text-sm">4</span>
                  </div>
                  <h2 className="text-xl font-semibold text-ocean-900">
                    Verschlüsselung
                  </h2>
                </div>
                <div className="text-ocean-700 leading-relaxed pl-11">
                  <div className="flex items-start gap-3 mb-4">
                    <Lock className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                    <p>
                      Alle Daten werden nach höchsten Sicherheitsstandards
                      verschlüsselt:
                    </p>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>AES-256</strong> – Verschlüsselung gespeicherter
                      Daten (at rest)
                    </li>
                    <li>
                      <strong>TLS 1.3</strong> – Verschlüsselung bei der
                      Übertragung (in transit)
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-10 pb-10 border-b border-sand-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-ocean-100 rounded-lg flex items-center justify-center">
                    <span className="text-ocean-700 font-bold text-sm">5</span>
                  </div>
                  <h2 className="text-xl font-semibold text-ocean-900">
                    Ihre Rechte
                  </h2>
                </div>
                <div className="text-ocean-700 leading-relaxed pl-11">
                  <p className="mb-4">
                    Sie haben das Recht auf:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Auskunft</strong> (Art. 15 DSGVO) – Welche Daten
                      wir über Sie speichern
                    </li>
                    <li>
                      <strong>Berichtigung</strong> (Art. 16 DSGVO) – Korrektur
                      unrichtiger Daten
                    </li>
                    <li>
                      <strong>Löschung</strong> (Art. 17 DSGVO) – Löschung Ihrer
                      Daten
                    </li>
                    <li>
                      <strong>Einschränkung</strong> (Art. 18 DSGVO) –
                      Einschränkung der Verarbeitung
                    </li>
                    <li>
                      <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO) –
                      Export Ihrer Daten
                    </li>
                    <li>
                      <strong>Widerspruch</strong> (Art. 21 DSGVO) – Widerspruch
                      gegen die Verarbeitung
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-10 pb-10 border-b border-sand-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-ocean-100 rounded-lg flex items-center justify-center">
                    <span className="text-ocean-700 font-bold text-sm">6</span>
                  </div>
                  <h2 className="text-xl font-semibold text-ocean-900">
                    Cookies
                  </h2>
                </div>
                <div className="text-ocean-700 leading-relaxed pl-11">
                  <p>
                    Diese Website verwendet ausschließlich technisch notwendige
                    Cookies, die für den Betrieb der Website erforderlich sind.
                    Es werden keine Tracking- oder Werbe-Cookies eingesetzt.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-ocean-100 rounded-lg flex items-center justify-center">
                    <span className="text-ocean-700 font-bold text-sm">7</span>
                  </div>
                  <h2 className="text-xl font-semibold text-ocean-900">
                    Beschwerderecht
                  </h2>
                </div>
                <div className="text-ocean-700 leading-relaxed pl-11">
                  <p>
                    Sie haben das Recht, sich bei einer Aufsichtsbehörde zu
                    beschweren. Die für uns zuständige Aufsichtsbehörde ist:
                  </p>
                  <p className="mt-4">
                    Berliner Beauftragte für Datenschutz und Informationsfreiheit
                    <br />
                    Alt-Moabit 59-61
                    <br />
                    10555 Berlin
                  </p>
                </div>
              </section>
            </div>

            <div className="text-center mt-8">
              <p className="text-ocean-500 text-sm">
                Stand: Januar 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

