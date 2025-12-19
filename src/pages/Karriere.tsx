import { Briefcase, Mail, Sparkles, Code, HeartHandshake } from 'lucide-react'

export function Karriere() {
  return (
    <div className="pt-24">
      <section className="relative">
        <div className="organic-shape w-96 h-96 bg-sage-300 top-20 -right-20" />
        <div className="organic-shape w-64 h-64 bg-sand-300 bottom-10 -left-10" />

        <div className="container-max section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100 rounded-full text-sage-700 text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              <span>Karriere bei Sesam</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-ocean-900 mb-6 leading-tight">
              Wir suchen <span className="text-sage-600">Verstärkung.</span>
            </h1>

            <p className="text-xl text-ocean-600 leading-relaxed">
              Helfen Sie uns, die psychotherapeutische Versorgung in Deutschland
              zu verbessern.
            </p>
          </div>
        </div>
      </section>

      <section className="relative gradient-soft">
        <div className="container-max section-padding">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-sand-100 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sand-100 rounded-full mb-6">
                <Sparkles className="w-8 h-8 text-sand-600" />
              </div>

              <h2 className="text-2xl font-bold text-ocean-900 mb-4">
                Aktuell sind alle Positionen besetzt.
              </h2>

              <p className="text-ocean-600 leading-relaxed mb-8">
                Wir wachsen jedoch schnell und freuen uns immer über
                Initiativbewerbungen, besonders in den Bereichen:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-sage-50 rounded-2xl">
                  <div className="w-10 h-10 bg-sage-200 rounded-xl flex items-center justify-center">
                    <Code className="w-5 h-5 text-sage-700" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-ocean-900">
                      Software Engineering
                    </div>
                    <div className="text-sm text-ocean-600">React / Python</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-ocean-50 rounded-2xl">
                  <div className="w-10 h-10 bg-ocean-200 rounded-xl flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5 text-ocean-700" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-ocean-900">Sales</div>
                    <div className="text-sm text-ocean-600">Healthcare</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-sand-100 pt-8">
                <p className="text-ocean-700 mb-4">
                  Haben Sie Interesse? Schreiben Sie uns:
                </p>
                <a
                  href="mailto:bewerbung@meinsesam.de"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  bewerbung@meinsesam.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-ocean-900 mb-6">
              Warum bei Sesam arbeiten?
            </h2>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-sand-100">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold text-ocean-900 mb-2">
                  Echte Wirkung
                </h3>
                <p className="text-sm text-ocean-600">
                  Ihre Arbeit hilft Therapeuten, mehr Zeit für Patienten zu
                  haben.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-sm border border-sand-100">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-semibold text-ocean-900 mb-2">
                  Frühphase
                </h3>
                <p className="text-sm text-ocean-600">
                  Gestalten Sie von Anfang an mit – echte Ownership, echte
                  Verantwortung.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-sm border border-sand-100">
                <div className="text-3xl mb-3">🇩🇪</div>
                <h3 className="font-semibold text-ocean-900 mb-2">
                  Made in Germany
                </h3>
                <p className="text-sm text-ocean-600">
                  Remote-first, aber mit Fokus auf den deutschen Gesundheitsmarkt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

