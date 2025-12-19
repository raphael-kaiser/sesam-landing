export function Datenschutz() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-ocean-900 mb-4">
              Datenschutzerklärung
            </h1>
            <p className="text-ocean-600">
              Stand: Januar 2025
            </p>
          </div>

          {/* Important Notice for Therapists */}
          <div className="bg-sage-50 border-l-4 border-sage-500 p-6 mb-8">
            <h2 className="text-lg font-semibold text-ocean-900 mb-2">
              Hinweis für Berufsgeheimnisträger
            </h2>
            <p className="text-ocean-700 leading-relaxed">
              Wir bieten einen Standard-AVV (Auftragsverarbeitungsvertrag) an, der die Anforderungen 
              nach <strong>Art. 28 DSGVO</strong> sowie die Wahrung der Berufsgeheimnisse gemäß{' '}
              <strong>§ 203 StGB</strong> berücksichtigt. Diesen erhalten Sie auf Anfrage unter{' '}
              <a href="mailto:datenschutz@meinsesam.de" className="text-sage-700 underline">
                datenschutz@meinsesam.de
              </a>.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-ocean max-w-none">
            <div className="space-y-8 text-ocean-700 leading-relaxed">
              
              {/* 1. Verantwortlicher */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  1. Name und Kontaktdaten des Verantwortlichen
                </h2>
                <p>
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
                </p>
                <p className="mt-4">
                  <strong>Sesam GmbH i.G.</strong><br />
                  Musterstraße 12<br />
                  10115 Berlin<br />
                  Deutschland
                </p>
                <p className="mt-4">
                  E-Mail: <a href="mailto:datenschutz@meinsesam.de" className="text-sage-700">datenschutz@meinsesam.de</a><br />
                  Telefon: 01577 2863455
                </p>
              </section>

              {/* 2. Allgemeines zur Datenverarbeitung */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  2. Allgemeines zur Datenverarbeitung
                </h2>
                
                <h3 className="text-lg font-medium text-ocean-900 mt-6 mb-3">
                  2.1 Umfang der Verarbeitung personenbezogener Daten
                </h3>
                <p>
                  Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies 
                  zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen 
                  erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt 
                  regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, 
                  in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht 
                  möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
                </p>

                <h3 className="text-lg font-medium text-ocean-900 mt-6 mb-3">
                  2.2 Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                </h3>
                <p>
                  Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der 
                  betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage.
                </p>
                <p className="mt-4">
                  Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages, 
                  dessen Vertragspartei die betroffene Person ist, erforderlich ist, dient Art. 6 Abs. 1 
                  lit. b DSGVO als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur 
                  Durchführung vorvertraglicher Maßnahmen erforderlich sind.
                </p>
                <p className="mt-4">
                  Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen 
                  Verpflichtung erforderlich ist, der unser Unternehmen unterliegt, dient Art. 6 Abs. 1 
                  lit. c DSGVO als Rechtsgrundlage.
                </p>
                <p className="mt-4">
                  Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens 
                  oder eines Dritten erforderlich und überwiegen die Interessen, Grundrechte und 
                  Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht, so dient Art. 6 
                  Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.
                </p>

                <h3 className="text-lg font-medium text-ocean-900 mt-6 mb-3">
                  2.3 Datenlöschung und Speicherdauer
                </h3>
                <p>
                  Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, 
                  sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus 
                  erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber in 
                  unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der 
                  Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder Löschung der Daten 
                  erfolgt auch dann, wenn eine durch die genannten Normen vorgeschriebene Speicherfrist 
                  abläuft, es sei denn, dass eine Erforderlichkeit zur weiteren Speicherung der Daten 
                  für einen Vertragsabschluss oder eine Vertragserfüllung besteht.
                </p>
              </section>

              {/* 3. Hosting */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  3. Hosting und Infrastruktur
                </h2>
                <p>
                  Unsere Server stehen ausschließlich in <strong>Frankfurt am Main, Deutschland</strong>. 
                  Wir nutzen Infrastruktur von Amazon Web Services (AWS) und/oder Google Cloud Platform, 
                  jeweils in der Region Germany (eu-central-1 bzw. europe-west3).
                </p>
                <p className="mt-4">
                  Die genutzten Rechenzentren sind zertifiziert nach:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>ISO 27001</strong> – Internationaler Standard für Informationssicherheits-Managementsysteme</li>
                  <li><strong>ISO 27017</strong> – Sicherheit von Cloud-Diensten</li>
                  <li><strong>ISO 27018</strong> – Schutz personenbezogener Daten in der Cloud</li>
                  <li><strong>BSI C5</strong> – Testiert nach den Kriterien des Bundesamts für Sicherheit in der Informationstechnik</li>
                  <li><strong>SOC 1, SOC 2, SOC 3</strong> – Service Organization Controls</li>
                </ul>
              </section>

              {/* 4. Verarbeitung von Patientendaten */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  4. Verarbeitung von Patientendaten im Rahmen der Dienstleistung
                </h2>
                
                <h3 className="text-lg font-medium text-ocean-900 mt-6 mb-3">
                  4.1 Art und Zweck der Verarbeitung
                </h3>
                <p>
                  Im Rahmen unserer Dienstleistung werden folgende Daten verarbeitet:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Audio-Aufnahmen von Therapiesitzungen</li>
                  <li>Transkripte dieser Aufnahmen</li>
                  <li>Daraus generierte Sitzungsprotokolle und Arztbriefe</li>
                </ul>
                <p className="mt-4">
                  Die Verarbeitung erfolgt ausschließlich zum Zweck der Erbringung der vertraglich 
                  vereinbarten Dienstleistung (Transkription, Zusammenfassung, Dokumentenerstellung).
                </p>

                <h3 className="text-lg font-medium text-ocean-900 mt-6 mb-3">
                  4.2 Kein Training von KI-Modellen
                </h3>
                <div className="bg-ocean-50 p-4 rounded-lg border border-ocean-200">
                  <p className="font-medium text-ocean-900">
                    Es erfolgt <strong>kein</strong> Training von KI-Modellen mit Ihren Patientendaten.
                  </p>
                  <p className="mt-2">
                    Die von Ihnen hochgeladenen oder erfassten Daten werden ausschließlich zur Erbringung 
                    der Dienstleistung verwendet und nicht zur Verbesserung oder zum Training unserer 
                    oder fremder KI-Systeme herangezogen.
                  </p>
                </div>

                <h3 className="text-lg font-medium text-ocean-900 mt-6 mb-3">
                  4.3 Auftragsverarbeitung
                </h3>
                <p>
                  Die Verarbeitung von Patientendaten erfolgt im Rahmen einer Auftragsverarbeitung 
                  gemäß Art. 28 DSGVO. Der Kunde (Therapeut/Praxis) bleibt Verantwortlicher im Sinne 
                  der DSGVO. Sesam handelt ausschließlich als weisungsgebundener Auftragsverarbeiter.
                </p>
                <p className="mt-4">
                  Vor Nutzung der Plattform wird ein Auftragsverarbeitungsvertrag (AVV) abgeschlossen, 
                  der auch die besonderen Anforderungen des § 203 StGB (ärztliche Schweigepflicht) 
                  berücksichtigt.
                </p>

                <h3 className="text-lg font-medium text-ocean-900 mt-6 mb-3">
                  4.4 Löschung von Patientendaten
                </h3>
                <p>
                  Die Löschung von Patientendaten erfolgt:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Auf ausdrückliche Weisung des Kunden jederzeit</li>
                  <li>Automatisch nach Ablauf der im Vertrag vereinbarten Speicherfrist</li>
                  <li>Spätestens 30 Tage nach Vertragsende, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen</li>
                </ul>
              </section>

              {/* 5. Verschlüsselung */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  5. Verschlüsselung und technische Sicherheitsmaßnahmen
                </h2>
                <p>
                  Wir setzen umfangreiche technische und organisatorische Maßnahmen ein, um Ihre 
                  Daten zu schützen:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>
                    <strong>Verschlüsselung bei der Übertragung (in transit):</strong> TLS 1.3 für alle 
                    Verbindungen zu unseren Servern
                  </li>
                  <li>
                    <strong>Verschlüsselung bei der Speicherung (at rest):</strong> AES-256 Verschlüsselung 
                    für alle gespeicherten Daten
                  </li>
                  <li>
                    <strong>Zugriffskontrolle:</strong> Strenge Authentifizierung und Autorisierung, 
                    Prinzip der minimalen Rechte
                  </li>
                  <li>
                    <strong>Protokollierung:</strong> Umfassende Audit-Logs für alle Datenzugriffe
                  </li>
                  <li>
                    <strong>Regelmäßige Sicherheitsüberprüfungen:</strong> Penetrationstests und 
                    Vulnerability Scans
                  </li>
                </ul>
              </section>

              {/* 6. Bereitstellung der Website */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  6. Bereitstellung der Website und Erstellung von Logfiles
                </h2>
                
                <h3 className="text-lg font-medium text-ocean-900 mt-6 mb-3">
                  6.1 Beschreibung und Umfang der Datenverarbeitung
                </h3>
                <p>
                  Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten 
                  und Informationen vom Computersystem des aufrufenden Rechners. Folgende Daten 
                  werden hierbei erhoben:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Informationen über den Browsertyp und die verwendete Version</li>
                  <li>Das Betriebssystem des Nutzers</li>
                  <li>Die IP-Adresse des Nutzers</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Websites, von denen das System des Nutzers auf unsere Internetseite gelangt</li>
                </ul>

                <h3 className="text-lg font-medium text-ocean-900 mt-6 mb-3">
                  6.2 Rechtsgrundlage für die Datenverarbeitung
                </h3>
                <p>
                  Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist 
                  Art. 6 Abs. 1 lit. f DSGVO.
                </p>

                <h3 className="text-lg font-medium text-ocean-900 mt-6 mb-3">
                  6.3 Zweck der Datenverarbeitung
                </h3>
                <p>
                  Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um 
                  eine Auslieferung der Website an den Rechner des Nutzers zu ermöglichen. Hierfür 
                  muss die IP-Adresse des Nutzers für die Dauer der Sitzung gespeichert bleiben. Die 
                  Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der Website sicherzustellen 
                  und zur Abwehr von Angriffen.
                </p>

                <h3 className="text-lg font-medium text-ocean-900 mt-6 mb-3">
                  6.4 Dauer der Speicherung
                </h3>
                <p>
                  Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung 
                  nicht mehr erforderlich sind. Im Falle der Speicherung der Daten in Logfiles ist 
                  dies nach spätestens sieben Tagen der Fall.
                </p>
              </section>

              {/* 7. Cookies */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  7. Verwendung von Cookies
                </h2>
                <p>
                  Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den 
                  ordnungsgemäßen Betrieb der Website erforderlich sind. Es werden keine Tracking-, 
                  Analyse- oder Werbe-Cookies eingesetzt.
                </p>
                <p className="mt-4">
                  Technisch notwendige Cookies dienen dazu:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Ihre Anmeldung während einer Sitzung aufrechtzuerhalten</li>
                  <li>Sicherheitsfunktionen zu gewährleisten (z.B. CSRF-Schutz)</li>
                  <li>Ihre Spracheinstellungen zu speichern</li>
                </ul>
                <p className="mt-4">
                  Rechtsgrundlage für die Verwendung technisch notwendiger Cookies ist Art. 6 Abs. 1 
                  lit. f DSGVO (berechtigtes Interesse an der Bereitstellung der Website).
                </p>
              </section>

              {/* 8. Kontaktformular und E-Mail-Kontakt */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  8. Kontaktaufnahme per E-Mail oder Telefon
                </h2>
                <p>
                  Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden die von Ihnen mitgeteilten 
                  Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer sowie der Inhalt 
                  Ihrer Nachricht) von uns gespeichert, um Ihre Anfrage zu bearbeiten.
                </p>
                <p className="mt-4">
                  Rechtsgrundlage für die Verarbeitung der Daten ist Art. 6 Abs. 1 lit. f DSGVO 
                  (berechtigtes Interesse an der Beantwortung von Anfragen). Zielt der Kontakt auf 
                  den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage Art. 6 Abs. 1 
                  lit. b DSGVO.
                </p>
                <p className="mt-4">
                  Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung 
                  nicht mehr erforderlich sind. Dies ist der Fall, wenn die jeweilige Konversation 
                  mit dem Nutzer beendet ist und keine Aufbewahrungspflichten entgegenstehen.
                </p>
              </section>

              {/* 9. Rechte der betroffenen Person */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  9. Rechte der betroffenen Person
                </h2>
                <p>
                  Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i.S.d. 
                  DSGVO und es stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:
                </p>

                <h3 className="text-lg font-medium text-ocean-900 mt-6 mb-3">
                  9.1 Auskunftsrecht (Art. 15 DSGVO)
                </h3>
                <p>
                  Sie haben das Recht, Auskunft darüber zu verlangen, ob und welche personenbezogenen 
                  Daten wir über Sie verarbeiten. Zusätzlich können Sie Auskunft über die 
                  Verarbeitungszwecke, die Kategorien der verarbeiteten Daten, die Empfänger oder 
                  Kategorien von Empfängern und die geplante Speicherdauer verlangen.
                </p>

                <h3 className="text-lg font-medium text-ocean-900 mt-6 mb-3">
                  9.2 Recht auf Berichtigung (Art. 16 DSGVO)
                </h3>
                <p>
                  Sie haben das Recht, unverzüglich die Berichtigung unrichtiger oder die 
                  Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.
                </p>

                <h3 className="text-lg font-medium text-ocean-900 mt-6 mb-3">
                  9.3 Recht auf Löschung (Art. 17 DSGVO)
                </h3>
                <p>
                  Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen 
                  Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf 
                  freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen 
                  Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, 
                  Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.
                </p>

                <h3 className="text-lg font-medium text-ocean-900 mt-6 mb-3">
                  9.4 Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
                </h3>
                <p>
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen 
                  Daten zu verlangen, wenn Sie die Richtigkeit der Daten bestreiten, die Verarbeitung 
                  unrechtmäßig ist, wir die Daten nicht mehr benötigen, Sie diese jedoch zur 
                  Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen, oder 
                  wenn Sie Widerspruch gegen die Verarbeitung eingelegt haben.
                </p>

                <h3 className="text-lg font-medium text-ocean-900 mt-6 mb-3">
                  9.5 Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
                </h3>
                <p>
                  Sie haben das Recht, Ihre personenbezogenen Daten, die Sie uns bereitgestellt 
                  haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. 
                  Außerdem haben Sie das Recht, diese Daten einem anderen Verantwortlichen ohne 
                  Behinderung durch uns zu übermitteln.
                </p>

                <h3 className="text-lg font-medium text-ocean-900 mt-6 mb-3">
                  9.6 Widerspruchsrecht (Art. 21 DSGVO)
                </h3>
                <p>
                  Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, 
                  jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die 
                  aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen.
                </p>

                <h3 className="text-lg font-medium text-ocean-900 mt-6 mb-3">
                  9.7 Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung
                </h3>
                <p>
                  Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit 
                  zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der 
                  aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
                </p>
              </section>

              {/* 10. Beschwerderecht */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  10. Beschwerderecht bei einer Aufsichtsbehörde
                </h2>
                <p>
                  Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen 
                  Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde, 
                  insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes 
                  oder des Orts des mutmaßlichen Verstoßes, zu, wenn Sie der Ansicht sind, dass 
                  die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO 
                  verstößt.
                </p>
                <p className="mt-4">
                  Die für uns zuständige Aufsichtsbehörde ist:
                </p>
                <p className="mt-4">
                  <strong>Berliner Beauftragte für Datenschutz und Informationsfreiheit</strong><br />
                  Alt-Moabit 59-61<br />
                  10555 Berlin<br />
                  Telefon: 030 13889-0<br />
                  E-Mail: mailbox@datenschutz-berlin.de
                </p>
              </section>

              {/* 11. Änderung der Datenschutzerklärung */}
              <section>
                <h2 className="text-xl font-semibold text-ocean-900 mb-4">
                  11. Änderung dieser Datenschutzerklärung
                </h2>
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
                  aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer 
                  Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung 
                  neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
