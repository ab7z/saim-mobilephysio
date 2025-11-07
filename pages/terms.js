import Head from 'next/head';
import SimpleNavbar from '../components/SimpleNavbar';
import Contact from '../components/Contact';
import styles from "../styles/Terms.module.css"

export default function Terms() {
  return (
    <>
      <Head>
        <title>Impressum - Saim Mobilephysio</title>
        <meta name='description' content='Impressum und rechtliche Informationen von Saim Mobilephysio Sankt Augustin, Faranak Nokhbehzaeem.' />
        <meta property='og:title' content='Impressum - Saim Mobilephysio' />
        <meta property='og:url' content='https://saim-mobilephysio.de/terms' />
        <meta name='robots' content='noindex, follow' />
      </Head>
      <SimpleNavbar />
      <div className={styles.main}>
        <div className={styles.container}>
          <h1>Impressum</h1>

          <p>
            <strong>Angaben gemäß § 5 TMG</strong>
          </p>

          <p>
            Faranak Nokhbehzaeem
            <br />
            Saim Mobile Physio
            <br />
            Wacholderweg 6<br />
            53757 St. Augustin
          </p>

          <p>
            <strong>Kontakt</strong>
          </p>

          <p>
            Telefon:{" "}
            <a
              href='tel:+4915785908915'
              rel={"noopener noreferrer"}
              aria-label={"Telefonnummer"}
            >
              0157 / 85908915
            </a>
          </p>
          <p>
            E-Mail:
            <a
              href='mailto:info@saim-mobilephysio.de'
              rel={"noopener noreferrer"}
              aria-label={"E-Mail Adresse"}
            >
              info@saim-mobilephysio.de
            </a>
          </p>

          <p>
            <strong>Berufsbezeichnung und berufsrechtliche Regelungen</strong>
          </p>

          <p>
            Berufsbezeichnung: Physiotherapeutin
            <br />
            Verliehen durch:
            <a
              href='https://daa-nordrhein.de/physiotherapie/schule-bonn/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={"DAA Bonn"}
            >
              DAA Bonn
            </a>{" "}
            am 19.04.2011
            <br />
            Zuständige Kammer:
            <a
              href='https://nrw.physio-deutschland.de/landesverband-nrw.html'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={"Deutscher Verband für Physiotherapie (ZVK)"}
            >
              Deutscher Verband für Physiotherapie (ZVK)
            </a>
            <br />
            Es gelten folgende berufsrechtliche Regelungen: Gesetz über die Berufe in der
            Physiotherapie (MPhG)
            <br />
            Regelungen einsehbar unter:
            <a
              href='https://www.gesetze-im-internet.de/mphg/BJNR108400994.html'
              rel='noopener noreferrer'
              target='_blank'
              aria-label={"Gestze"}
            >
              https://www.gesetze-im-internet.de/mphg/BJNR108400994.html
            </a>
          </p>

          <p>
            <strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</strong>
          </p>

          <p>
            Faranak Nokhbehzaeem
            <br />
            Wacholderweg 6<br />
            53757 St. Augustin
          </p>

          <p>
            <strong>Berufshaftpflichtversicherung</strong>
          </p>

          <p>
            Name und Anschrift des Versicherers:
            <br />
            [Bitte Namen und Anschrift der Berufshaftpflichtversicherung einfügen]
            <br />
            Geltungsbereich: Deutschland
          </p>

          <p>
            <strong>Streitschlichtung</strong>
          </p>

          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <br />
            <a
              href='https://ec.europa.eu/consumers/odr/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={"EU Online-Streitbeilegung"}
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <p>
            <strong>Bildernachweis</strong>
          </p>

          <p>
            Die auf dieser Website verwendeten Bilder sind eigene Aufnahmen oder lizenzfrei.
          </p>

          <p>
            <strong>Haftung für Inhalte</strong>
          </p>

          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>

          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
            erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
            entfernen.
          </p>

          <p>
            <strong>Haftung für Links</strong>
          </p>

          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
            Zeitpunkt der Verlinkung nicht erkennbar.
          </p>

          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>

          <p>
            <strong>Urheberrecht</strong>
          </p>

          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
            nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>

          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
            Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
            bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </div>
      <Contact />
    </>
  )
}
