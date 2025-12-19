import { FileText, CheckCircle2, Shield, Clock, AlertCircle } from 'lucide-react'

export function AGB() {
  return (
    <div className="pt-24">
      <section className="relative">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-100 rounded-full text-ocean-700 text-sm font-medium mb-6">
                <FileText className="w-4 h-4" />
                <span>Rechtliches</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-ocean-900">
                Allgemeine Geschäftsbedingungen
              </h1>
              <p className="text-ocean-600 mt-4">
                der Sesam GmbH i.G. für die Nutzung der Sesam-Plattform
              </p>
            </div>

            <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-ocean-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-ocean-700" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-ocean-900 mb-2">
                    Geltungsbereich
                  </h2>
                  <p className="text-ocean-700 leading-relaxed">
                    Diese AGB gelten ausschließlich für{' '}
                    <strong>Unternehmer im Sinne des § 14 BGB</strong>{' '}
                    (niedergelassene Psychotherapeuten, Ärzte, MVZ, Kliniken).
                    Eine Nutzung durch Verbraucher (§ 13 BGB) ist nicht
                    vorgesehen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-sand-100">
              <section className="mb-10 pb-10 border-b border-sand-100">
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  § 1 Vertragsgegenstand
                </h2>
                <div className="text-ocean-700 leading-relaxed space-y-3">
                  <p>
                    (1) Sesam stellt eine cloudbasierte Software-Plattform zur
                    automatisierten Dokumentation von Therapiesitzungen bereit
                    („die Plattform").
                  </p>
                  <p>
                    (2) Die Plattform umfasst insbesondere:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Transkription von Audiomitschnitten</li>
                    <li>Erstellung von strukturierten Sitzungsprotokollen</li>
                    <li>Generierung von Arztbriefen und Berichten</li>
                  </ul>
                  <p>
                    (3) Der konkrete Leistungsumfang ergibt sich aus der
                    jeweiligen Produktbeschreibung und dem gewählten Tarif.
                  </p>
                </div>
              </section>

              <section className="mb-10 pb-10 border-b border-sand-100">
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-6 h-6 text-sage-600 flex-shrink-0" />
                  <h2 className="text-xl font-semibold text-ocean-900">
                    § 2 Testphase
                  </h2>
                </div>
                <div className="text-ocean-700 leading-relaxed space-y-3">
                  <div className="bg-sage-50 rounded-xl p-4 border border-sage-100">
                    <p className="flex items-center gap-2 font-medium text-sage-800">
                      <CheckCircle2 className="w-5 h-5" />
                      Kein Abo-Zwang
                    </p>
                  </div>
                  <p>
                    (1) Neukunden können die Plattform im Rahmen einer
                    kostenfreien Testphase unverbindlich testen.
                  </p>
                  <p>
                    (2){' '}
                    <strong className="text-ocean-900">
                      Die Testphase endet automatisch
                    </strong>
                    , ohne dass eine Kündigung erforderlich ist. Es erfolgt
                    keine automatische Umwandlung in ein kostenpflichtiges
                    Abonnement.
                  </p>
                  <p>
                    (3) Eine Zahlungsmethode muss für die Testphase nicht
                    hinterlegt werden.
                  </p>
                </div>
              </section>

              <section className="mb-10 pb-10 border-b border-sand-100">
                <div className="flex items-start gap-3 mb-4">
                  <Shield className="w-6 h-6 text-sage-600 flex-shrink-0" />
                  <h2 className="text-xl font-semibold text-ocean-900">
                    § 3 Datenschutz & Schweigepflicht
                  </h2>
                </div>
                <div className="text-ocean-700 leading-relaxed space-y-3">
                  <div className="bg-ocean-50 rounded-xl p-4 border border-ocean-100">
                    <p className="font-medium text-ocean-900">
                      Der Kunde bleibt „Herr der Daten"
                    </p>
                  </div>
                  <p>
                    (1){' '}
                    <strong className="text-ocean-900">
                      Der Kunde bleibt Verantwortlicher
                    </strong>{' '}
                    im Sinne der DSGVO für alle über die Plattform verarbeiteten
                    Patientendaten.
                  </p>
                  <p>
                    (2) Sesam agiert ausschließlich als{' '}
                    <strong className="text-ocean-900">
                      weisungsgebundener Auftragsverarbeiter
                    </strong>{' '}
                    gemäß Art. 28 DSGVO.
                  </p>
                  <p>
                    (3) Vor Nutzung der Plattform wird ein
                    Auftragsverarbeitungsvertrag (AVV) abgeschlossen, der auch
                    die Anforderungen des § 203 StGB (ärztliche Schweigepflicht)
                    berücksichtigt.
                  </p>
                  <p>
                    (4) Sesam verpflichtet sich, Patientendaten{' '}
                    <strong className="text-ocean-900">nicht</strong> zum
                    Training von KI-Modellen zu verwenden.
                  </p>
                </div>
              </section>

              <section className="mb-10 pb-10 border-b border-sand-100">
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  § 4 Verfügbarkeit
                </h2>
                <div className="text-ocean-700 leading-relaxed space-y-3">
                  <p>
                    (1) Sesam strebt eine Verfügbarkeit der Plattform von{' '}
                    <strong className="text-ocean-900">
                      99% im Jahresmittel
                    </strong>{' '}
                    an (gemessen an der Kernzeit Mo-Fr 8-20 Uhr).
                  </p>
                  <p>
                    (2) Geplante Wartungsarbeiten werden mindestens 48 Stunden
                    im Voraus angekündigt und finden nach Möglichkeit außerhalb
                    der Kernzeiten statt.
                  </p>
                  <p>
                    (3) Von der Verfügbarkeitsgarantie ausgenommen sind
                    Störungen, die auf höhere Gewalt, Handlungen des Kunden oder
                    Dritter zurückzuführen sind.
                  </p>
                </div>
              </section>

              <section className="mb-10 pb-10 border-b border-sand-100">
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  § 5 Vergütung & Zahlungsbedingungen
                </h2>
                <div className="text-ocean-700 leading-relaxed space-y-3">
                  <p>
                    (1) Die Vergütung richtet sich nach dem vom Kunden gewählten
                    Tarif gemäß der aktuellen Preisliste.
                  </p>
                  <p>
                    (2) Alle Preise verstehen sich zuzüglich der gesetzlichen
                    Mehrwertsteuer.
                  </p>
                  <p>
                    (3) Die Abrechnung erfolgt monatlich im Voraus. Rechnungen
                    sind innerhalb von 14 Tagen nach Rechnungsstellung fällig.
                  </p>
                </div>
              </section>

              <section className="mb-10 pb-10 border-b border-sand-100">
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  § 6 Vertragslaufzeit & Kündigung
                </h2>
                <div className="text-ocean-700 leading-relaxed space-y-3">
                  <p>
                    (1) Der Vertrag wird auf unbestimmte Zeit geschlossen.
                  </p>
                  <p>
                    (2) Die Kündigung ist jederzeit zum Ende des laufenden
                    Abrechnungsmonats möglich.
                  </p>
                  <p>
                    (3) Das Recht zur außerordentlichen Kündigung aus wichtigem
                    Grund bleibt unberührt.
                  </p>
                  <p>
                    (4) Nach Vertragsende werden alle Kundendaten innerhalb von
                    30 Tagen gelöscht, sofern keine gesetzlichen
                    Aufbewahrungspflichten entgegenstehen. Auf Wunsch erhält der
                    Kunde vorab einen Export seiner Daten.
                  </p>
                </div>
              </section>

              <section className="mb-10 pb-10 border-b border-sand-100">
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  § 7 Haftung
                </h2>
                <div className="text-ocean-700 leading-relaxed space-y-3">
                  <p>
                    (1) Sesam haftet unbeschränkt für Schäden aus der Verletzung
                    des Lebens, des Körpers oder der Gesundheit sowie für
                    Vorsatz und grobe Fahrlässigkeit.
                  </p>
                  <p>
                    (2) Für leichte Fahrlässigkeit haftet Sesam nur bei
                    Verletzung wesentlicher Vertragspflichten
                    (Kardinalpflichten), begrenzt auf den vertragstypisch
                    vorhersehbaren Schaden.
                  </p>
                  <p>
                    (3) Die Haftung nach dem Produkthaftungsgesetz bleibt
                    unberührt.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  § 8 Schlussbestimmungen
                </h2>
                <div className="text-ocean-700 leading-relaxed space-y-3">
                  <p>
                    (1) Es gilt das Recht der Bundesrepublik Deutschland unter
                    Ausschluss des UN-Kaufrechts.
                  </p>
                  <p>
                    (2) Gerichtsstand für alle Streitigkeiten aus diesem Vertrag
                    ist Berlin.
                  </p>
                  <p>
                    (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein,
                    bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
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

