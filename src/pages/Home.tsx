import { Link } from 'react-router-dom'
import {
  Shield,
  Heart,
  Feather,
  Lock,
  Server,
  FileText,
  Mic,
  Clock,
  CheckCircle2,
  ChevronRight,
  Quote,
} from 'lucide-react'

export function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="organic-shape w-96 h-96 bg-sage-300 top-20 -right-20" />
        <div className="organic-shape w-80 h-80 bg-sand-300 bottom-20 -left-20" />
        <div className="organic-shape w-64 h-64 bg-ocean-200 top-1/2 left-1/3" />

        <div className="container-max section-padding relative z-10 pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ocean-900 leading-tight mb-6 animate-slide-up">
              Finden Sie Ihre Zeit für das{' '}
              <span className="text-sage-600">Wesentliche</span> wieder.
            </h1>

            <p className="text-lg sm:text-xl text-ocean-700 max-w-2xl mx-auto mb-8 leading-relaxed opacity-0 animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              Der erste KI-Assistent, der versteht, was Therapeuten leisten.
              Automatisierte Dokumentation, 100% DSGVO-konform und sicher in
              Deutschland gehostet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <a href="#demo" className="btn-primary text-lg px-8 py-4">
                Demo anfordern
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#funktionen" className="btn-secondary text-lg px-8 py-4">
                Mehr erfahren
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-ocean-600 opacity-0 animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-sage-600" />
                <span>Serverstandort Deutschland (Frankfurt)</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-ocean-300 rounded-full" />
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-sage-600" />
                <span>ISO 27001 zertifizierte Rechenzentren</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-ocean-300 rounded-full" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-sage-600" />
                <span>100% DSGVO-konform (inkl. AVV)</span>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="bg-white rounded-3xl shadow-xl shadow-ocean-900/5 p-6 sm:p-8 border border-sand-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-sand-300" />
                <div className="w-3 h-3 rounded-full bg-sage-300" />
                <div className="w-3 h-3 rounded-full bg-ocean-300" />
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4 p-4 bg-sage-50 rounded-2xl">
                  <div className="w-12 h-12 bg-sage-200 rounded-xl flex items-center justify-center">
                    <Mic className="w-6 h-6 text-sage-700" />
                  </div>
                  <div className="flex-1">
                    <div className="h-3 bg-sage-200 rounded-full w-3/4 mb-2" />
                    <div className="h-2 bg-sage-100 rounded-full w-1/2" />
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-sand-50 rounded-2xl">
                  <div className="w-12 h-12 bg-sand-200 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-sand-700" />
                  </div>
                  <div className="flex-1">
                    <div className="h-3 bg-sand-200 rounded-full w-2/3 mb-2" />
                    <div className="h-2 bg-sand-100 rounded-full w-2/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative gradient-soft">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sand-100 rounded-full text-sand-700 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Wir verstehen Sie</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-ocean-900 mb-6 leading-tight">
              Therapie ist Arbeit am Menschen.
              <br />
              <span className="text-ocean-600">
                Dokumentation ist Arbeit am Papier.
              </span>
            </h2>

            <p className="text-lg text-ocean-700 leading-relaxed mb-8">
              Sie hören jeden Tag stundenlang zu. Sie halten den Raum. Sie geben
              Ihren Patienten Halt und Orientierung. Am Abend wartet dann noch
              die Dokumentation – Stunden, die Ihnen fehlen.
            </p>

            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-ocean-900/5 border border-sand-100">
              <p className="text-xl text-ocean-800 font-medium leading-relaxed">
                <span className="text-sage-600">Sesam</span> nimmt Ihnen diese
                Last, damit Sie Ihren Feierabend wieder haben – und die Energie
                für das, was wirklich zählt: Ihre Patienten und Ihr Leben außerhalb
                der Praxis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="funktionen" className="relative">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100 rounded-full text-sage-700 text-sm font-medium mb-6">
              <Feather className="w-4 h-4" />
              <span>Ihre Funktionen</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-ocean-900 mb-4">
              So einfach wie ein Gespräch
            </h2>
            <p className="text-lg text-ocean-600 max-w-2xl mx-auto">
              Sesam arbeitet im Hintergrund, während Sie sich auf Ihre Patienten
              konzentrieren.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-sand-100 hover:border-sage-200">
              <div className="w-14 h-14 bg-sage-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage-200 transition-colors">
                <Mic className="w-7 h-7 text-sage-700" />
              </div>
              <h3 className="text-xl font-semibold text-ocean-900 mb-3">
                Automatisierte Sitzungsprotokolle
              </h3>
              <p className="text-ocean-600 leading-relaxed mb-4">
                Aufnahme → Transkript → strukturiertes Sitzungsprotokoll in
                Sekunden. SGB-V konform und sofort einsatzbereit.
              </p>
              <div className="flex items-center gap-2 text-sage-600 font-medium">
                <Clock className="w-4 h-4" />
                <span className="text-sm">~3 Minuten gespart pro Sitzung</span>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-sand-100 hover:border-sage-200">
              <div className="w-14 h-14 bg-sand-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sand-200 transition-colors">
                <FileText className="w-7 h-7 text-sand-700" />
              </div>
              <h3 className="text-xl font-semibold text-ocean-900 mb-3">
                Arztbriefe auf Knopfdruck
              </h3>
              <p className="text-ocean-600 leading-relaxed mb-4">
                Generieren Sie professionelle Arztbriefe für Krankenkassen und
                Überweiser automatisch aus Ihren Sitzungsdaten.
              </p>
              <div className="flex items-center gap-2 text-sand-600 font-medium">
                <Clock className="w-4 h-4" />
                <span className="text-sm">~15 Minuten gespart pro Brief</span>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-sand-100 hover:border-sage-200">
              <div className="w-14 h-14 bg-ocean-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ocean-200 transition-colors">
                <Feather className="w-7 h-7 text-ocean-700" />
              </div>
              <h3 className="text-xl font-semibold text-ocean-900 mb-3">
                Unsichtbarer Begleiter
              </h3>
              <p className="text-ocean-600 leading-relaxed mb-4">
                Sesam arbeitet diskret im Hintergrund. Keine Ablenkung während
                der Sitzung, volle Präsenz für Ihre Patienten.
              </p>
              <div className="flex items-center gap-2 text-ocean-600 font-medium">
                <Heart className="w-4 h-4" />
                <span className="text-sm">100% Fokus auf die Therapie</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sicherheit" className="relative bg-ocean-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="organic-shape w-96 h-96 bg-sage-800 opacity-10 top-10 right-10" />
          <div className="organic-shape w-64 h-64 bg-ocean-700 opacity-20 bottom-10 left-10" />
        </div>

        <div className="container-max section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-800 rounded-full text-ocean-200 text-sm font-medium mb-6">
                <Lock className="w-4 h-4" />
                <span>Sicherheit & Datenschutz</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Ihre Daten bleiben{' '}
                <span className="text-sage-400">Ihre Daten.</span>
              </h2>

              <p className="text-ocean-200 text-lg leading-relaxed mb-8">
                Wir wissen, dass Vertrauen in der Psychotherapie alles ist. Deshalb
                behandeln wir Ihre Daten mit der gleichen Sorgfalt, die Sie Ihren
                Patienten entgegenbringen.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sage-600/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-sage-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Kein Training von KI-Modellen mit Ihren Patientendaten
                    </h4>
                    <p className="text-ocean-300 text-sm">
                      Ihre Sitzungsdaten werden niemals zum Training von
                      KI-Modellen verwendet. Garantiert.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sage-600/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Server className="w-5 h-5 text-sage-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Hosting in ISO 27001 zertifizierten Hochsicherheits-Rechenzentren
                    </h4>
                    <p className="text-ocean-300 text-sm">
                      Serverstandort Deutschland (Frankfurt). Infrastruktur nach BSI C5 Kriterien testiert.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sage-600/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Lock className="w-5 h-5 text-sage-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      100% DSGVO-konform (inkl. AVV für Ihre Unterlagen)
                    </h4>
                    <p className="text-ocean-300 text-sm">
                      Wir stellen Ihnen einen vollständigen Auftragsverarbeitungsvertrag
                      für Ihre Dokumentation zur Verfügung.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="bg-ocean-900 rounded-3xl p-8 border border-ocean-800">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-ocean-800/50 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-sage-400 mb-2">
                      100%
                    </div>
                    <div className="text-ocean-300 text-sm">DSGVO-konform</div>
                  </div>
                  <div className="bg-ocean-800/50 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-sage-400 mb-2">
                      AVV
                    </div>
                    <div className="text-ocean-300 text-sm">
                      inklusive
                    </div>
                  </div>
                  <div className="bg-ocean-800/50 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-sage-400 mb-2">
                      ISO
                    </div>
                    <div className="text-ocean-300 text-sm">27001 Hosting</div>
                  </div>
                  <div className="bg-ocean-800/50 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-sage-400 mb-2">
                      FFM
                    </div>
                    <div className="text-ocean-300 text-sm">
                      Serverstandort
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative gradient-soft">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-8">
              <Quote className="w-8 h-8 text-sage-600" />
            </div>

            <blockquote className="text-2xl sm:text-3xl font-medium text-ocean-900 leading-relaxed mb-8">
              „Endlich eine Software, die sich nicht wie Verwaltung anfühlt,
              sondern wie eine{' '}
              <span className="text-sage-600">echte Hilfe</span>. Ich spare ca.{' '}
              <span className="text-sage-600">4 Stunden pro Woche</span>."
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 bg-sand-200 rounded-full flex items-center justify-center">
                <span className="text-sand-700 font-semibold text-lg">JW</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-ocean-900">
                  Dr. med. Julia W.
                </div>
                <div className="text-ocean-600 text-sm">
                  Psychotherapeutin aus Berlin
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="preise" className="relative">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100 rounded-full text-sage-700 text-sm font-medium mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span>Faire Preise</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-ocean-900 mb-4">
              Transparent & flexibel
            </h2>
            <p className="text-lg text-ocean-600 max-w-2xl mx-auto">
              Starten Sie kostenlos und wählen Sie später das Paket, das zu Ihrer
              Praxis passt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-sand-100">
              <div className="text-sm font-medium text-ocean-600 mb-2">
                Starter
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-ocean-900">€0</span>
                <span className="text-ocean-600">/Monat</span>
              </div>
              <p className="text-ocean-600 mb-6">
                Perfekt zum Kennenlernen. Keine Kreditkarte erforderlich.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-ocean-700">
                  <CheckCircle2 className="w-5 h-5 text-sage-600 flex-shrink-0" />
                  <span>5 Sitzungen pro Monat</span>
                </li>
                <li className="flex items-center gap-3 text-ocean-700">
                  <CheckCircle2 className="w-5 h-5 text-sage-600 flex-shrink-0" />
                  <span>Automatische Protokolle</span>
                </li>
                <li className="flex items-center gap-3 text-ocean-700">
                  <CheckCircle2 className="w-5 h-5 text-sage-600 flex-shrink-0" />
                  <span>DSGVO-konforme Speicherung</span>
                </li>
              </ul>

              <a href="#demo" className="btn-secondary w-full">
                Kostenlos starten
              </a>
            </div>

            <div className="bg-gradient-to-br from-sage-600 to-sage-700 rounded-3xl p-8 shadow-xl shadow-sage-600/20 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/20 rounded-full px-3 py-1 text-xs font-medium text-white">
                Beliebt
              </div>

              <div className="text-sm font-medium text-sage-100 mb-2">
                Professional
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-white">€79</span>
                <span className="text-sage-200">/Monat</span>
              </div>
              <p className="text-sage-100 mb-6">
                Für Therapeuten, die keine Zeit verlieren wollen.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-sage-300 flex-shrink-0" />
                  <span>Unbegrenzte Sitzungen</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-sage-300 flex-shrink-0" />
                  <span>Arztbriefe & Berichte</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-sage-300 flex-shrink-0" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-sage-300 flex-shrink-0" />
                  <span>Individuelle Anpassungen</span>
                </li>
              </ul>

              <a
                href="#demo"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-white text-sage-700 font-medium rounded-full hover:bg-sand-50 transition-all duration-300 hover:shadow-lg"
              >
                Demo anfordern
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="relative">
        <div className="container-max section-padding">
          <div className="bg-gradient-to-br from-sand-100 to-sand-50 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="organic-shape w-64 h-64 bg-sage-200 opacity-30 -top-20 -right-20" />
            <div className="organic-shape w-48 h-48 bg-ocean-200 opacity-20 -bottom-10 -left-10" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-ocean-900 mb-4">
                Bereit für mehr Feierabend?
              </h2>
              <p className="text-lg text-ocean-600 max-w-xl mx-auto mb-8">
                Vereinbaren Sie eine unverbindliche Demo und erleben Sie, wie
                Sesam Ihren Praxisalltag verändern kann.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:hallo@meinsesam.de" className="btn-primary text-lg px-8 py-4">
                  Demo anfordern
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>

              <p className="text-sm text-ocean-500 mt-6">
                Keine Verpflichtung • Persönliche Beratung • In 15 Minuten
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative gradient-soft">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-100 rounded-full text-ocean-700 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Über uns</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-ocean-900 mb-6">
              Gebaut von Menschen, die verstehen
            </h2>

            <p className="text-lg text-ocean-600 leading-relaxed mb-8">
              Sesam wurde gegründet von einem Team, das die besonderen
              Herausforderungen der psychotherapeutischen Praxis kennt. Wir
              glauben, dass Technologie dazu da ist, Menschen zu entlasten – nicht
              zu ersetzen.
            </p>

            <Link
              to="/ueber-uns"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Mehr über uns
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

