import { Mail, Phone, MessageCircle, Clock, ChevronRight } from 'lucide-react'

const CALENDLY_URL = 'https://calendly.com/raphaelkaiser/20min'

export function Kontakt() {
  return (
    <div className="pt-24">
      {/* Hero */}
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
              Sprechen Sie direkt mit dem{' '}
              <span className="text-sage-600">Gründer.</span>
            </h1>

            <p className="text-xl text-ocean-600 leading-relaxed">
              Keine Warteschleifen, keine Support-Tickets. Bei Sesam erreichen Sie 
              direkt die Menschen, die das Produkt bauen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="relative">
        <div className="container-max section-padding !pt-8">
          <div className="max-w-2xl mx-auto">
            {/* Main Contact Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-sand-100 mb-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-sage-200 to-sage-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-sage-700">R</span>
                </div>
                <h2 className="text-2xl font-bold text-ocean-900 mb-1">
                  Raphael Kaiser
                </h2>
                <p className="text-ocean-600">Gründer von Sesam</p>
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <a 
                  href="tel:+4915772863455"
                  className="flex items-center gap-4 p-4 bg-sage-50 rounded-2xl hover:bg-sage-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-sage-200 rounded-xl flex items-center justify-center group-hover:bg-sage-300 transition-colors">
                    <Phone className="w-6 h-6 text-sage-700" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-ocean-900">Telefon</div>
                    <div className="text-ocean-600">01577 2863455</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-ocean-400" />
                </a>

                {/* Email */}
                <a 
                  href="mailto:raphael@meinsesam.de"
                  className="flex items-center gap-4 p-4 bg-ocean-50 rounded-2xl hover:bg-ocean-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-ocean-200 rounded-xl flex items-center justify-center group-hover:bg-ocean-300 transition-colors">
                    <Mail className="w-6 h-6 text-ocean-700" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-ocean-900">E-Mail</div>
                    <div className="text-ocean-600">raphael@meinsesam.de</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-ocean-400" />
                </a>
              </div>
            </div>

            {/* Response Promise */}
            <div className="bg-sage-50 rounded-2xl p-6 border border-sage-100 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-sage-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-ocean-900 mb-1">
                    Unser Versprechen
                  </h3>
                  <p className="text-ocean-700 leading-relaxed">
                    Wir antworten auf jede Nachricht innerhalb von{' '}
                    <strong className="text-sage-700">12 Stunden</strong> – 
                    auch an Wochenenden und Feiertagen.
                  </p>
                </div>
              </div>
            </div>

            {/* Demo CTA */}
            <div className="bg-gradient-to-br from-sand-100 to-sand-50 rounded-2xl p-8 text-center border border-sand-200">
              <h3 className="text-xl font-semibold text-ocean-900 mb-3">
                Lieber direkt zeigen lassen?
              </h3>
              <p className="text-ocean-600 mb-6">
                Buchen Sie einen kostenlosen Demo-Termin und erleben Sie Sesam live.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Demo-Termin vereinbaren
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
