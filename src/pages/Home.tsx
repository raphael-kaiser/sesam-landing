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
  Sparkles,
  Play,
  ArrowRight,
} from 'lucide-react'

const CALENDLY_URL = 'https://calendly.com/raphaelkaiser/20min'

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
              <a 
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                Jetzt 14 Tage gratis starten
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

          {/* Enhanced Hero Illustration */}
          <div className="mt-16 max-w-4xl mx-auto opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="bg-white rounded-3xl shadow-2xl shadow-ocean-900/10 p-6 sm:p-8 border border-sand-100 relative overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-4">
                  <div className="h-6 bg-sand-100 rounded-lg w-48 mx-auto" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Recording Panel */}
                <div className="bg-gradient-to-br from-sage-50 to-sage-100/50 rounded-2xl p-6 border border-sage-200/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-sage-500 rounded-xl flex items-center justify-center">
                        <Mic className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-ocean-900 text-sm">Sitzungsaufnahme</div>
                        <div className="text-xs text-ocean-500">Aktiv • 23:45</div>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  </div>
                  
                  {/* Waveform visualization */}
                  <div className="flex items-center justify-center gap-1 h-16 mb-4">
                    {[...Array(24)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-1.5 bg-sage-400 rounded-full transition-all"
                        style={{ 
                          height: `${20 + Math.sin(i * 0.5) * 15 + Math.random() * 20}px`,
                          opacity: 0.6 + Math.random() * 0.4
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center gap-4">
                    <button className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-ocean-600 hover:bg-sage-50 transition-colors">
                      <Play className="w-5 h-5 ml-0.5" />
                    </button>
                  </div>
                </div>
                
                {/* Generated Document Panel */}
                <div className="bg-gradient-to-br from-sand-50 to-sand-100/50 rounded-2xl p-6 border border-sand-200/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-sand-500 rounded-xl flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-ocean-900 text-sm">Sitzungsprotokoll</div>
                      <div className="text-xs text-ocean-500">Automatisch erstellt</div>
                    </div>
                  </div>
                  
                  {/* Document preview */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-sage-500" />
                      <div className="h-2.5 bg-sand-300 rounded-full flex-1" />
                    </div>
                    <div className="pl-6 space-y-2">
                      <div className="h-2 bg-sand-200 rounded-full w-full" />
                      <div className="h-2 bg-sand-200 rounded-full w-4/5" />
                      <div className="h-2 bg-sand-200 rounded-full w-11/12" />
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <Sparkles className="w-4 h-4 text-sage-500" />
                      <div className="h-2.5 bg-sand-300 rounded-full w-32" />
                    </div>
                    <div className="pl-6 space-y-2">
                      <div className="h-2 bg-sand-200 rounded-full w-full" />
                      <div className="h-2 bg-sand-200 rounded-full w-3/4" />
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-sand-200 flex items-center justify-between">
                    <span className="text-xs text-ocean-500">SGB-V konform</span>
                    <CheckCircle2 className="w-4 h-4 text-sage-500" />
                  </div>
                </div>
              </div>
              
              {/* Flow arrow */}
              <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-sage-200">
                  <ArrowRight className="w-5 h-5 text-sage-600" />
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

      {/* New Pricing Section */}
      <section id="preise" className="relative">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100 rounded-full text-sage-700 text-sm font-medium mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span>Faire Preise</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-ocean-900 mb-4">
              Preise, so transparent wie unsere Arbeit.
            </h2>
          </div>

          {/* Trust-Based Trial Promise */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-sage-50 rounded-2xl p-6 border border-sage-200 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sage-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sage-600" />
                  <span className="font-medium">14 Tage kostenlos testen</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sage-600" />
                  <span className="font-medium">Keine Kreditkarte erforderlich</span>
                </div>
              </div>
              <p className="text-sage-700 mt-3 text-sm">
                Testphase endet automatisch – keine Kündigung notwendig.
              </p>
            </div>
          </div>

          {/* Single Pricing Card */}
          <div className="max-w-lg mx-auto">
            <div className="bg-gradient-to-br from-sage-600 to-sage-700 rounded-3xl p-8 sm:p-10 shadow-xl shadow-sage-600/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="text-sage-100 font-medium mb-2">
                  Praxis-Lizenz
                </div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold text-white">99€</span>
                  <span className="text-sage-200 text-lg">/ Monat</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-sage-300 flex-shrink-0" />
                    <span>Unbegrenzte Sitzungsaufzeichnungen</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-sage-300 flex-shrink-0" />
                    <span>Automatische Arztbriefe & Anträge</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-sage-300 flex-shrink-0" />
                    <span>DSGVO-konforme Server in Deutschland</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-sage-300 flex-shrink-0" />
                    <span>AVV inklusive</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-sage-300 flex-shrink-0" />
                    <span>Monatlich kündbar</span>
                  </li>
                </ul>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-white text-sage-700 font-semibold rounded-full hover:bg-sand-50 transition-all duration-300 hover:shadow-lg text-lg"
                >
                  Jetzt 14 Tage gratis starten
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Starten Sie Ihre kostenlose Testphase und erleben Sie, wie
                Sesam Ihren Praxisalltag verändern kann.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Jetzt 14 Tage gratis starten
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>

              <p className="text-sm text-ocean-500 mt-6">
                Keine Kreditkarte • Endet automatisch • In 2 Minuten startklar
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
