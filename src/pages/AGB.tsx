export function AGB() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-semibold text-ocean-900 mb-4">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="text-ocean-600">
              der Sesam GmbH i.G. für die Nutzung der Sesam-Plattform
            </p>
            <p className="text-ocean-500 text-sm mt-2">
              Stand: Januar 2025
            </p>
          </div>

          {/* B2B Notice */}
          <div className="bg-ocean-50 border-l-4 border-ocean-500 p-6 mb-8">
            <p className="text-ocean-800">
              <strong>Geltungsbereich:</strong> Diese Allgemeinen Geschäftsbedingungen gelten 
              ausschließlich für Unternehmer im Sinne des § 14 BGB (niedergelassene 
              Psychotherapeuten, Psychologische Psychotherapeuten, Ärzte, Medizinische 
              Versorgungszentren, Kliniken und vergleichbare Einrichtungen). Eine Nutzung durch 
              Verbraucher im Sinne des § 13 BGB ist nicht vorgesehen.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-ocean max-w-none">
            <div className="space-y-8 text-ocean-700 leading-relaxed">

              {/* §1 */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  § 1 Vertragsgegenstand und Leistungsbeschreibung
                </h2>
                <p>
                  (1) Sesam stellt dem Kunden eine cloudbasierte Software-Plattform zur 
                  automatisierten Dokumentation von Therapiesitzungen bereit („die Plattform" 
                  oder „der Dienst").
                </p>
                <p className="mt-4">
                  (2) Die Plattform umfasst insbesondere folgende Funktionen:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Aufzeichnung von Therapiesitzungen (Audio)</li>
                  <li>Automatische Transkription der Aufnahmen</li>
                  <li>Erstellung von strukturierten Sitzungsprotokollen</li>
                  <li>Generierung von Arztbriefen, Berichten und Anträgen</li>
                  <li>Sichere Speicherung der erstellten Dokumente</li>
                </ul>
                <p className="mt-4">
                  (3) Der konkrete Leistungsumfang ergibt sich aus der jeweiligen 
                  Produktbeschreibung auf der Website sowie dem vom Kunden gewählten Tarif.
                </p>
                <p className="mt-4">
                  (4) Sesam behält sich vor, die Plattform weiterzuentwickeln und zu verbessern. 
                  Wesentliche Einschränkungen des Funktionsumfangs werden dem Kunden mit 
                  angemessener Frist angekündigt.
                </p>
              </section>

              {/* §2 */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  § 2 Vertragsschluss und Registrierung
                </h2>
                <p>
                  (1) Die Darstellung der Leistungen auf der Website stellt kein rechtlich 
                  bindendes Angebot, sondern eine Aufforderung zur Abgabe eines Angebots dar.
                </p>
                <p className="mt-4">
                  (2) Durch die Registrierung auf der Plattform und Bestätigung dieser AGB gibt 
                  der Kunde ein verbindliches Angebot zum Abschluss eines Nutzungsvertrags ab.
                </p>
                <p className="mt-4">
                  (3) Sesam nimmt dieses Angebot durch Freischaltung des Kundenkontos oder durch 
                  ausdrückliche Bestätigung per E-Mail an. Mit der Annahme kommt der Vertrag zustande.
                </p>
                <p className="mt-4">
                  (4) Der Kunde versichert, dass die bei der Registrierung angegebenen Daten 
                  vollständig und richtig sind. Änderungen sind Sesam unverzüglich mitzuteilen.
                </p>
              </section>

              {/* §3 */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  § 3 Kostenlose Testphase
                </h2>
                <div className="bg-sage-50 p-4 rounded-lg border border-sage-200 mb-4">
                  <p className="font-medium text-sage-800">
                    Kein Abo-Zwang – Die Testphase endet automatisch.
                  </p>
                </div>
                <p>
                  (1) Neukunden können die Plattform im Rahmen einer kostenfreien Testphase von 
                  14 Tagen unverbindlich testen.
                </p>
                <p className="mt-4">
                  (2) <strong>Die Testphase endet automatisch nach Ablauf von 14 Tagen</strong>, 
                  ohne dass eine Kündigung erforderlich ist. Es erfolgt keine automatische 
                  Umwandlung in ein kostenpflichtiges Abonnement.
                </p>
                <p className="mt-4">
                  (3) Für die Nutzung der Testphase ist die Angabe von Zahlungsdaten nicht 
                  erforderlich.
                </p>
                <p className="mt-4">
                  (4) Der Funktionsumfang während der Testphase kann gegenüber dem 
                  kostenpflichtigen Tarif eingeschränkt sein.
                </p>
                <p className="mt-4">
                  (5) Nach Ablauf der Testphase werden alle während der Testphase erhobenen 
                  Patientendaten gelöscht, sofern der Kunde nicht in einen kostenpflichtigen 
                  Tarif wechselt.
                </p>
              </section>

              {/* §4 */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  § 4 Vergütung und Zahlungsbedingungen
                </h2>
                <p>
                  (1) Die Vergütung richtet sich nach dem vom Kunden gewählten Tarif gemäß der 
                  zum Zeitpunkt des Vertragsschlusses gültigen Preisliste.
                </p>
                <p className="mt-4">
                  (2) Alle Preise verstehen sich als Nettopreise zuzüglich der jeweils gültigen 
                  gesetzlichen Umsatzsteuer (derzeit 19%).
                </p>
                <p className="mt-4">
                  (3) Die Abrechnung erfolgt monatlich im Voraus. Die Rechnung wird dem Kunden 
                  in elektronischer Form (PDF per E-Mail) zur Verfügung gestellt.
                </p>
                <p className="mt-4">
                  (4) Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug 
                  zur Zahlung fällig.
                </p>
                <p className="mt-4">
                  (5) Bei Zahlungsverzug ist Sesam berechtigt, Verzugszinsen in Höhe von 9 
                  Prozentpunkten über dem Basiszinssatz zu verlangen (§ 288 Abs. 2 BGB).
                </p>
                <p className="mt-4">
                  (6) Sesam behält sich das Recht vor, den Zugang zur Plattform bei 
                  Zahlungsverzug von mehr als 14 Tagen nach vorheriger Mahnung zu sperren.
                </p>
              </section>

              {/* §5 */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  § 5 Datenschutz und Schweigepflicht
                </h2>
                <div className="bg-ocean-50 p-4 rounded-lg border border-ocean-200 mb-4">
                  <p className="font-medium text-ocean-900">
                    Der Kunde bleibt „Herr der Daten" – Sesam ist weisungsgebundener Auftragsverarbeiter.
                  </p>
                </div>
                <p>
                  (1) <strong>Der Kunde bleibt Verantwortlicher</strong> im Sinne der DSGVO für 
                  alle über die Plattform verarbeiteten personenbezogenen Daten, insbesondere 
                  Patientendaten.
                </p>
                <p className="mt-4">
                  (2) Sesam agiert ausschließlich als <strong>weisungsgebundener Auftragsverarbeiter</strong> 
                  gemäß Art. 28 DSGVO.
                </p>
                <p className="mt-4">
                  (3) Vor Beginn der Datenverarbeitung wird zwischen dem Kunden und Sesam ein 
                  Auftragsverarbeitungsvertrag (AVV) geschlossen, der die Anforderungen des 
                  Art. 28 DSGVO erfüllt und die besonderen Anforderungen für Berufsgeheimnisträger 
                  gemäß § 203 StGB berücksichtigt.
                </p>
                <p className="mt-4">
                  (4) <strong>Sesam verpflichtet sich, Patientendaten nicht zum Training von 
                  KI-Modellen zu verwenden.</strong> Die Daten werden ausschließlich zur 
                  Erbringung der vertraglich vereinbarten Dienstleistungen verarbeitet.
                </p>
                <p className="mt-4">
                  (5) Sesam setzt ausschließlich Unterauftragsverarbeiter ein, die sich zur 
                  Einhaltung der datenschutzrechtlichen Anforderungen verpflichtet haben. 
                  Eine aktuelle Liste der Unterauftragsverarbeiter wird dem Kunden auf 
                  Anfrage zur Verfügung gestellt.
                </p>
                <p className="mt-4">
                  (6) Der Kunde ist dafür verantwortlich, die erforderlichen Einwilligungen 
                  seiner Patienten für die Nutzung der Plattform einzuholen, soweit diese 
                  erforderlich sind.
                </p>
              </section>

              {/* §6 */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  § 6 Verfügbarkeit und Service Level
                </h2>
                <p>
                  (1) Sesam strebt eine Verfügbarkeit der Plattform von <strong>99% im 
                  Jahresmittel</strong> an, gemessen an der Kernzeit (Montag bis Freitag, 
                  8:00 bis 20:00 Uhr MEZ/MESZ).
                </p>
                <p className="mt-4">
                  (2) Von der Verfügbarkeitsberechnung ausgenommen sind:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Geplante Wartungsarbeiten, die mindestens 48 Stunden im Voraus angekündigt werden</li>
                  <li>Störungen, die auf höhere Gewalt zurückzuführen sind</li>
                  <li>Störungen, die durch Handlungen des Kunden oder Dritter verursacht werden</li>
                  <li>Störungen der Internetanbindung außerhalb des Einflussbereichs von Sesam</li>
                </ul>
                <p className="mt-4">
                  (3) Geplante Wartungsarbeiten finden nach Möglichkeit außerhalb der Kernzeiten 
                  statt, vorzugsweise nachts oder am Wochenende.
                </p>
                <p className="mt-4">
                  (4) Störungen sind unverzüglich an support@meinsesam.de zu melden.
                </p>
              </section>

              {/* §7 */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  § 7 Pflichten des Kunden
                </h2>
                <p>
                  (1) Der Kunde verpflichtet sich, die Plattform nur für die vorgesehenen 
                  Zwecke zu nutzen und alle anwendbaren Gesetze und Vorschriften einzuhalten.
                </p>
                <p className="mt-4">
                  (2) Der Kunde ist für die Sicherheit seiner Zugangsdaten verantwortlich und 
                  hat diese vor dem Zugriff Dritter zu schützen. Bei Verdacht auf Missbrauch 
                  ist Sesam unverzüglich zu informieren.
                </p>
                <p className="mt-4">
                  (3) Der Kunde stellt sicher, dass die Nutzung der Plattform im Einklang mit 
                  seinen berufsrechtlichen Pflichten erfolgt, insbesondere hinsichtlich der 
                  ärztlichen Schweigepflicht.
                </p>
                <p className="mt-4">
                  (4) Der Kunde informiert seine Patienten in geeigneter Weise über die 
                  Nutzung der Plattform zur Dokumentation und holt erforderlichenfalls deren 
                  Einwilligung ein.
                </p>
                <p className="mt-4">
                  (5) Der Kunde unterlässt es, die Plattform in einer Weise zu nutzen, die 
                  deren Betrieb beeinträchtigen könnte oder die gegen geltendes Recht verstößt.
                </p>
              </section>

              {/* §8 */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  § 8 Nutzungsrechte
                </h2>
                <p>
                  (1) Sesam räumt dem Kunden für die Dauer des Vertragsverhältnisses ein 
                  einfaches, nicht übertragbares und nicht unterlizenzierbares Recht zur 
                  Nutzung der Plattform im Rahmen dieser AGB ein.
                </p>
                <p className="mt-4">
                  (2) Die durch die Plattform generierten Dokumente (Protokolle, Arztbriefe etc.) 
                  stehen im Eigentum des Kunden. Sesam erwirbt an diesen Dokumenten keine Rechte.
                </p>
                <p className="mt-4">
                  (3) Der Kunde darf die Plattform nicht:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Kopieren, modifizieren oder abgeleitete Werke erstellen</li>
                  <li>Reverse Engineering durchführen oder versuchen, den Quellcode zu extrahieren</li>
                  <li>An Dritte weiterverkaufen, vermieten oder unterlizenzieren</li>
                  <li>Für illegale oder vertragswidrige Zwecke nutzen</li>
                </ul>
              </section>

              {/* §9 */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  § 9 Vertragslaufzeit und Kündigung
                </h2>
                <p>
                  (1) Der Vertrag wird auf unbestimmte Zeit geschlossen.
                </p>
                <p className="mt-4">
                  (2) <strong>Der Vertrag kann von beiden Seiten jederzeit zum Ende des 
                  laufenden Abrechnungsmonats gekündigt werden</strong> (monatliche Kündbarkeit).
                </p>
                <p className="mt-4">
                  (3) Die Kündigung bedarf der Textform (E-Mail ist ausreichend).
                </p>
                <p className="mt-4">
                  (4) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt 
                  unberührt. Ein wichtiger Grund liegt insbesondere vor, wenn:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Der Kunde mit der Zahlung trotz Mahnung mehr als 30 Tage in Verzug ist</li>
                  <li>Der Kunde wiederholt gegen wesentliche Vertragspflichten verstößt</li>
                  <li>Die Fortsetzung des Vertragsverhältnisses aus anderen Gründen unzumutbar ist</li>
                </ul>
                <p className="mt-4">
                  (5) Nach Vertragsende werden alle Kundendaten innerhalb von 30 Tagen gelöscht, 
                  sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Auf Wunsch 
                  erhält der Kunde vorab einen Export seiner Daten in einem gängigen Format.
                </p>
              </section>

              {/* §10 */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  § 10 Gewährleistung und Haftung
                </h2>
                <p>
                  (1) Sesam gewährleistet, dass die Plattform im Wesentlichen der 
                  Leistungsbeschreibung entspricht und mit der gebotenen Sorgfalt betrieben wird.
                </p>
                <p className="mt-4">
                  (2) <strong>Haftung für Schäden:</strong>
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    Sesam haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des 
                    Körpers oder der Gesundheit sowie für Vorsatz und grobe Fahrlässigkeit.
                  </li>
                  <li>
                    Für leichte Fahrlässigkeit haftet Sesam nur bei Verletzung wesentlicher 
                    Vertragspflichten (Kardinalpflichten). In diesem Fall ist die Haftung auf 
                    den vertragstypisch vorhersehbaren Schaden begrenzt.
                  </li>
                  <li>
                    Die Haftung für mittelbare Schäden, Folgeschäden und entgangenen Gewinn 
                    ist bei leichter Fahrlässigkeit ausgeschlossen.
                  </li>
                </ul>
                <p className="mt-4">
                  (3) Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.
                </p>
                <p className="mt-4">
                  (4) Sesam haftet nicht für die inhaltliche Richtigkeit der durch die 
                  Plattform generierten Dokumente. Der Kunde bleibt für die Überprüfung und 
                  Freigabe aller Dokumente verantwortlich.
                </p>
                <p className="mt-4">
                  (5) Eine über die vorstehenden Absätze hinausgehende Haftung ist ohne 
                  Rücksicht auf die Rechtsnatur des geltend gemachten Anspruchs ausgeschlossen.
                </p>
              </section>

              {/* §11 */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  § 11 Änderungen der AGB
                </h2>
                <p>
                  (1) Sesam behält sich vor, diese AGB mit Wirkung für die Zukunft zu ändern, 
                  soweit dies unter Berücksichtigung der Interessen von Sesam für den Kunden 
                  zumutbar ist.
                </p>
                <p className="mt-4">
                  (2) Änderungen werden dem Kunden mindestens 30 Tage vor ihrem Inkrafttreten 
                  in Textform (per E-Mail) mitgeteilt.
                </p>
                <p className="mt-4">
                  (3) Widerspricht der Kunde den geänderten Bedingungen nicht innerhalb von 
                  30 Tagen nach Zugang der Änderungsmitteilung, gelten die geänderten 
                  Bedingungen als akzeptiert. Auf diese Rechtsfolge wird der Kunde in der 
                  Änderungsmitteilung besonders hingewiesen.
                </p>
                <p className="mt-4">
                  (4) Widerspricht der Kunde fristgerecht, besteht das Vertragsverhältnis zu 
                  den bisherigen Bedingungen fort. Sesam ist in diesem Fall berechtigt, das 
                  Vertragsverhältnis mit einer Frist von 30 Tagen zum Monatsende zu kündigen.
                </p>
              </section>

              {/* §12 */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  § 12 Schlussbestimmungen
                </h2>
                <p>
                  (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des 
                  UN-Kaufrechts (CISG).
                </p>
                <p className="mt-4">
                  (2) Ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im 
                  Zusammenhang mit diesem Vertrag ist Berlin, sofern der Kunde Kaufmann, 
                  juristische Person des öffentlichen Rechts oder öffentlich-rechtliches 
                  Sondervermögen ist.
                </p>
                <p className="mt-4">
                  (3) Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar 
                  sein oder werden, so wird dadurch die Wirksamkeit der übrigen Bestimmungen 
                  nicht berührt. An die Stelle der unwirksamen oder undurchführbaren Bestimmung 
                  tritt diejenige wirksame und durchführbare Regelung, die dem wirtschaftlichen 
                  Zweck der unwirksamen oder undurchführbaren Bestimmung am nächsten kommt.
                </p>
                <p className="mt-4">
                  (4) Mündliche Nebenabreden bestehen nicht. Änderungen und Ergänzungen dieses 
                  Vertrages bedürfen der Textform. Dies gilt auch für die Aufhebung dieses 
                  Schriftformerfordernisses.
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
