import React from 'react';
import SimpleNavbar from '../components/SimpleNavbar';
import Contact from '../components/Contact';
import Layout from '../components/Layout';

export default function Terms() {
    return (
        <Layout>
            <SimpleNavbar />
            <div className="main">
                <div className="container">
                    <h1>Impressum</h1>

                    <p><strong>Angaben gemäß § 5 TMG</strong></p>

                    <p>
                        Faranak Nokhbehzaeem<br />
                        Saim Mobile Physio<br />
                        Wacholderweg 6<br />
                        53757 St. Augustin
                    </p>

                    <p><strong>Kontakt</strong></p>

                    <p>
                        Telefon:{' '}
                        <a
                            href="tel:+4915785908915"
                            rel="noopener noreferrer"
                            aria-label="Anrufen unter 0157 85908915"
                        >
                            0157 / 85908915
                        </a>
                    </p>
                    <p>
                        E-Mail:{' '}
                        <a
                            href="mailto:info@saim-mobilephysio.de"
                            rel="noopener noreferrer"
                            aria-label="E-Mail senden an info@saim-mobilephysio.de"
                        >
                            info@saim-mobilephysio.de
                        </a>
                    </p>

                    <p><strong>Berufsbezeichnung und berufsrechtliche Regelungen</strong></p>

                    <p>
                        Berufsbezeichnung: Physiotherapeutin<br />
                        Verliehen durch:{' '}
                        <a
                            href="https://daa-nordrhein.de/physiotherapie/schule-bonn/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="DAA Bonn"
                        >
                            DAA Bonn
                        </a>{' '}
                        am 19.04.2011<br />
                        Zuständige Kammer:{' '}
                        <a
                            href="https://nrw.physio-deutschland.de/landesverband-nrw.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Deutscher Verband für Physiotherapie (ZVK)"
                        >
                            Deutscher Verband für Physiotherapie (ZVK)
                        </a>
                        <br />
                        Es gelten folgende berufsrechtliche Regelungen: Gesetz über die Berufe in der
                        Physiotherapie (MPhG)<br />
                        Regelungen einsehbar unter:{' '}
                        <a
                            href="https://www.gesetze-im-internet.de/mphg/BJNR108400994.html"
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label="Gesetz über die Berufe in der Physiotherapie auf gesetze-im-internet.de öffnen"
                        >
                            https://www.gesetze-im-internet.de/mphg/BJNR108400994.html
                        </a>
                    </p>

                    <p><strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</strong></p>

                    <p>
                        Faranak Nokhbehzaeem<br />
                        Wacholderweg 6<br />
                        53757 St. Augustin
                    </p>

                    <p><strong>Berufshaftpflichtversicherung</strong></p>

                    <p>
                        Name und Anschrift des Versicherers:<br />
                        [Bitte Namen und Anschrift der Berufshaftpflichtversicherung einfügen]<br />
                        Geltungsbereich: Deutschland
                    </p>

                    <p><strong>Streitschlichtung</strong></p>

                    <p>
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                        Verbraucherschlichtungsstelle teilzunehmen.
                    </p>

                    <p>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
                        <a
                            href="https://ec.europa.eu/consumers/odr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="EU Online-Streitbeilegung"
                        >
                            https://ec.europa.eu/consumers/odr/
                        </a>
                        <br />
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>

                    <p><strong>Bildernachweis</strong></p>

                    <p>Die auf dieser Website verwendeten Bilder sind eigene Aufnahmen oder lizenzfrei.</p>

                    <p><strong>Haftung für Inhalte</strong></p>

                    <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                        nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                        Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                        Tätigkeit hinweisen.
                    </p>

                    <p><strong>Urheberrecht</strong></p>

                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                        dem deutschen Urheberrecht.
                    </p>
                </div>
            </div>
            <Contact />
        </Layout>
    );
}
