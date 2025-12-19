import { Heart, Shield, Users, Sparkles } from 'lucide-react'

export function UeberUns() {
  return (
    <div className="pt-24">
      <section className="relative">
        <div className="organic-shape w-96 h-96 bg-sand-300 top-20 -right-20" />
        <div className="organic-shape w-64 h-64 bg-sage-300 bottom-10 -left-10" />

        <div className="container-max section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sand-100 rounded-full text-sand-700 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Unsere Geschichte</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-ocean-900 mb-8 leading-tight">
              Warum wir Sesam <span className="text-sage-600">gebaut haben.</span>
            </h1>

            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg shadow-ocean-900/5 border border-sand-100">
              <p className="text-xl text-ocean-700 leading-relaxed mb-6">
                Wir haben gesehen, wie exzellente Therapeuten unter der Last der
                Dokumentation ausbrennen.
              </p>
              <p className="text-xl text-ocean-700 leading-relaxed mb-6">
                <strong className="text-ocean-900">
                  Therapie sollte bedeuten: Da sein für den Menschen.
                </strong>
                <br />
                Nicht: Da sein für das Papier.
              </p>
              <p className="text-lg text-sage-700 font-medium">
                Sesam ist unsere Antwort auf die Frage: „Wie kann Technik wieder
                dem Menschen dienen?"
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative gradient-soft">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-100 rounded-full text-ocean-700 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Das Team</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-ocean-900 mb-4">
              Menschen, die verstehen
            </h2>
            <p className="text-lg text-ocean-600 max-w-2xl mx-auto">
              Ein kleines Team mit großer Mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-sand-100 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-sage-200 to-sage-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-sage-700">R</span>
              </div>
              <h3 className="text-xl font-bold text-ocean-900 mb-1">
                Raphael
              </h3>
              <div className="text-sage-600 font-medium mb-4">
                Gründer & Produkt
              </div>
              <p className="text-ocean-600 text-sm leading-relaxed">
                Entwickelt Software, die den Rücken freihält. Glaubt daran, dass
                Technologie dem Menschen dienen sollte – nicht umgekehrt.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-sand-100 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-ocean-200 to-ocean-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-ocean-700">Dr.</span>
              </div>
              <h3 className="text-xl font-bold text-ocean-900 mb-1">
                Dr. med. [Name]
              </h3>
              <div className="text-ocean-600 font-medium mb-4">
                Advisory Board
              </div>
              <p className="text-ocean-600 text-sm leading-relaxed">
                Psychologische Aufsicht & Qualitätssicherung. Sorgt dafür, dass
                Sesam den Anforderungen der Praxis gerecht wird.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="bg-ocean-950 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              <div className="organic-shape w-64 h-64 bg-sage-800 opacity-10 -top-20 -right-20" />

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600/20 rounded-full mb-6">
                  <Shield className="w-8 h-8 text-sage-400" />
                </div>

                <h2 className="text-3xl font-bold text-white mb-6">
                  Datenschutz ist kein Feature.
                  <br />
                  <span className="text-sage-400">Er ist unsere DNA.</span>
                </h2>

                <p className="text-ocean-200 text-lg leading-relaxed mb-8">
                  In der Psychotherapie geht es um das Intimste, was ein Mensch
                  hat: seine Gedanken, Ängste und Hoffnungen. Dieses Vertrauen
                  nehmen wir ernst.
                </p>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sage-400 mb-2">
                      100%
                    </div>
                    <div className="text-ocean-300 text-sm">Made in Germany</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sage-400 mb-2">
                      0%
                    </div>
                    <div className="text-ocean-300 text-sm">
                      Daten für KI-Training
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sage-400 mb-2">
                      AVV
                    </div>
                    <div className="text-ocean-300 text-sm">Inklusive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative gradient-soft">
        <div className="container-max section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <Sparkles className="w-12 h-12 text-sage-500 mx-auto mb-6" />
            <blockquote className="text-2xl sm:text-3xl font-medium text-ocean-900 leading-relaxed">
              „Wer anderen hilft, verdient selbst Unterstützung."
            </blockquote>
            <p className="mt-6 text-ocean-600">— Unsere Überzeugung</p>
          </div>
        </div>
      </section>
    </div>
  )
}

