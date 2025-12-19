import { 
  Briefcase, 
  Mail, 
  Code, 
  Heart, 
  MapPin, 
  Target,
  ChevronRight,
  ArrowRight,
  Laptop,
  Building
} from 'lucide-react'

export function Karriere() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative">
        <div className="organic-shape w-96 h-96 bg-sage-300 top-20 -right-20" />
        <div className="organic-shape w-64 h-64 bg-ocean-200 bottom-10 -left-10" />

        <div className="container-max section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100 rounded-full text-sage-700 text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              <span>Karriere</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-ocean-900 mb-6 leading-tight">
              Bauen Sie mit uns die Zukunft der{' '}
              <span className="text-sage-600">psychischen Gesundheit.</span>
            </h1>

            <p className="text-xl text-ocean-600 leading-relaxed mb-8">
              Wir verbinden Empathie mit High-Tech. Für Therapeuten, die mehr Zeit 
              für Menschen brauchen.
            </p>

            <a 
              href="#positionen" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Zu den offenen Stellen
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Values / Culture Grid */}
      <section className="relative gradient-soft">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ocean-900 mb-4">
              Warum Sesam?
            </h2>
            <p className="text-lg text-ocean-600">
              Was uns als Team ausmacht.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand-100">
              <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center mb-4">
                <Laptop className="w-6 h-6 text-sage-700" />
              </div>
              <h3 className="font-semibold text-ocean-900 mb-2">
                Modernster Tech-Stack
              </h3>
              <p className="text-sm text-ocean-600 leading-relaxed">
                React, Python, OpenAI, AWS/Azure. Wir lösen harte Probleme, keine Legacy-Tickets.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand-100">
              <div className="w-12 h-12 bg-sand-100 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-sand-700" />
              </div>
              <h3 className="font-semibold text-ocean-900 mb-2">
                Mental Health First
              </h3>
              <p className="text-sm text-ocean-600 leading-relaxed">
                Wir verkaufen nicht nur psychische Gesundheit, wir leben sie. Respektvolle Arbeitszeiten sind Pflicht.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand-100">
              <div className="w-12 h-12 bg-ocean-100 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-ocean-700" />
              </div>
              <h3 className="font-semibold text-ocean-900 mb-2">
                Remote-First & Berlin
              </h3>
              <p className="text-sm text-ocean-600 leading-relaxed">
                Arbeiten Sie von zu Hause oder in unserem Hub in Berlin.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand-100">
              <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-sage-700" />
              </div>
              <h3 className="font-semibold text-ocean-900 mb-2">
                Echter Impact
              </h3>
              <p className="text-sm text-ocean-600 leading-relaxed">
                Jede Zeile Code entlastet Therapeuten in ganz Deutschland.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Board Section */}
      <section id="positionen" className="relative">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ocean-900 mb-4">
                Offene Positionen
              </h2>
              <p className="text-lg text-ocean-600">
                Wir suchen laufend nach außergewöhnlichen Talenten.
              </p>
            </div>

            {/* Product & Engineering */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-sage-100 rounded-lg flex items-center justify-center">
                  <Code className="w-4 h-4 text-sage-700" />
                </div>
                <h3 className="text-lg font-semibold text-ocean-900">
                  Product & Engineering
                </h3>
              </div>

              <div className="space-y-3">
                <a 
                  href="mailto:bewerbung@meinsesam.de?subject=Bewerbung: Senior Full Stack Engineer"
                  className="block bg-white rounded-xl p-5 border border-sand-100 hover:border-sage-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-ocean-900">
                          Senior Full Stack Engineer (m/w/d)
                        </h4>
                        <span className="px-2 py-0.5 bg-sage-100 text-sage-700 text-xs font-medium rounded-full">
                          Initiativ
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-ocean-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          Remote / Berlin
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-ocean-400 group-hover:text-sage-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </a>

                <a 
                  href="mailto:bewerbung@meinsesam.de?subject=Bewerbung: Machine Learning Engineer"
                  className="block bg-white rounded-xl p-5 border border-sand-100 hover:border-sage-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-ocean-900">
                          Machine Learning Engineer (m/w/d)
                        </h4>
                        <span className="px-2 py-0.5 bg-ocean-100 text-ocean-700 text-xs font-medium rounded-full">
                          Talent Pool
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-ocean-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          Remote
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-ocean-400 group-hover:text-sage-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              </div>
            </div>

            {/* Growth & Sales */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-sand-100 rounded-lg flex items-center justify-center">
                  <Building className="w-4 h-4 text-sand-700" />
                </div>
                <h3 className="text-lg font-semibold text-ocean-900">
                  Growth & Sales
                </h3>
              </div>

              <div className="space-y-3">
                <a 
                  href="mailto:bewerbung@meinsesam.de?subject=Bewerbung: Account Executive Healthcare"
                  className="block bg-white rounded-xl p-5 border border-sand-100 hover:border-sage-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-ocean-900">
                          Account Executive Healthcare (m/w/d)
                        </h4>
                        <span className="px-2 py-0.5 bg-sage-100 text-sage-700 text-xs font-medium rounded-full">
                          Initiativ
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-ocean-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          Berlin / Remote
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-ocean-400 group-hover:text-sage-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              </div>
            </div>

            {/* Closing CTA */}
            <div className="bg-sand-50 rounded-2xl p-8 text-center border border-sand-100">
              <h3 className="text-xl font-semibold text-ocean-900 mb-3">
                Nicht das Richtige dabei?
              </h3>
              <p className="text-ocean-600 mb-6 leading-relaxed">
                Wir schaffen Rollen für die richtigen Menschen. Schreiben Sie uns direkt:
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
      </section>
    </div>
  )
}
