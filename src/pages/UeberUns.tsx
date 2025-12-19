import { Heart, Shield, Sparkles, ChevronRight } from 'lucide-react'

const CALENDLY_URL = 'https://calendly.com/raphaelkaiser/20min'

export function UeberUns() {
  return (
    <div className="pt-24">
      {/* Hero - The Story */}
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
          </div>
        </div>
      </section>

      {/* Letter-style Content (Every-inspired) */}
      <section className="relative">
        <div className="container-max px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-2xl mx-auto">
            <article className="prose prose-lg prose-ocean">
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-sand-100">
                <div className="space-y-6 text-ocean-700 leading-relaxed text-lg">
                  <p>
                    Liebe Therapeutinnen, liebe Therapeuten,
                  </p>
                  
                  <p>
                    Sie verbringen Ihre Tage damit, anderen Menschen zu helfen. Sie hören zu. 
                    Sie halten den Raum. Sie tragen die Geschichten von Menschen, die sonst 
                    niemanden haben, dem sie sich anvertrauen können.
                  </p>
                  
                  <p>
                    Und dann, wenn Ihre letzte Patientin gegangen ist, beginnt die 
                    <em> andere</em> Arbeit. Die Dokumentation. Die Arztbriefe. Die Anträge.
                  </p>
                  
                  <p>
                    Wir haben gesehen, wie exzellente Therapeuten unter dieser Last ausbrennen. 
                    Wie sie abends um acht noch am Schreibtisch sitzen, während ihre eigenen 
                    Familien auf sie warten. Wie die Bürokratie ihnen die Energie raubt, die sie 
                    eigentlich für ihre Patienten bräuchten.
                  </p>
                  
                  <p className="text-ocean-900 font-medium">
                    Das ist nicht richtig.
                  </p>
                  
                  <p>
                    Therapie sollte bedeuten: Da sein für den Menschen.
                    <br />
                    Nicht: Da sein für das Papier.
                  </p>
                  
                  <p>
                    Sesam ist unsere Antwort auf eine einfache Frage: <em>Wie kann Technologie 
                    wieder dem Menschen dienen?</em>
                  </p>
                  
                  <p>
                    Wir bauen kein weiteres Tool, das Sie lernen müssen. Wir bauen einen 
                    unsichtbaren Begleiter, der Ihnen die Last abnimmt – damit Sie Ihre 
                    Abende wieder haben. Damit Sie die Energie haben für das, was wirklich 
                    zählt.
                  </p>
                  
                  <p>
                    Wir wissen, dass Vertrauen in der Psychotherapie alles ist. Deshalb stehen 
                    unsere Server in Deutschland. Deshalb werden Ihre Daten niemals für 
                    KI-Training verwendet. Deshalb ist bei uns Datenschutz keine Checkbox, 
                    sondern Überzeugung.
                  </p>
                  
                  <p>
                    Wer anderen hilft, verdient selbst Unterstützung.
                  </p>
                  
                  <p className="text-ocean-900 font-medium">
                    Dafür stehen wir. Jeden Tag.
                  </p>
                  
                  <div className="pt-6 border-t border-sand-100 mt-8">
                    <img 
                      src="/signature.png" 
                      alt="Signatur Raphael & Carlos" 
                      className="h-16 mb-2"
                    />
                    <p className="text-ocean-500 text-base">
                      Gründer von Sesam
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Values Section */}
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

      {/* Mission Statement */}
      <section className="relative gradient-soft">
        <div className="container-max section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <Sparkles className="w-12 h-12 text-sage-500 mx-auto mb-6" />
            <blockquote className="text-2xl sm:text-3xl font-medium text-ocean-900 leading-relaxed mb-8">
              „Wer anderen hilft, verdient selbst Unterstützung."
            </blockquote>
            
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Jetzt 14 Tage gratis starten
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
