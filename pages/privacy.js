import Head from 'next/head';
import SimpleNavbar from '../components/SimpleNavbar';
import Contact from '../components/Contact';
import styles from '../styles/Privacy.module.css';

export default function Privacy() {
    return (
        <>
            <Head>
                <title>Datenschutzerklärung - Saim Mobilephysio</title>
                <meta name='description' content='Datenschutzerklärung von Saim Mobilephysio Sankt Augustin. Informationen zum Umgang mit personenbezogenen Daten.' />
                <meta property='og:title' content='Datenschutzerklärung - Saim Mobilephysio' />
                <meta property='og:url' content='https://saim-mobilephysio.de/privacy' />
                <meta name='robots' content='noindex, follow' />
            </Head>
            <SimpleNavbar />
            <div className={ styles.main }>
                <div className={ styles.container }>
                    <h1 className={styles.heading}>Datenschutzerklärung</h1>

                    <h3 className={styles.h3}>1. Datenschutz auf einen Blick</h3>

                    <p><strong>Allgemeine Hinweise</strong></p>

                    <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                        personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten
                        sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche
                        Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
                        Datenschutzerklärung.</p>

                    <p><strong>Datenerfassung auf unserer Website</strong></p>

                    <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>

                    <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                        Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>

                    <p><strong>Wie erfassen wir Ihre Daten?</strong></p>

                    <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
                        sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>

                    <p>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das
                        sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des
                        Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website
                        betreten.</p>

                    <p><strong>Wofür nutzen wir Ihre Daten?</strong></p>

                    <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                        gewährleisten. Die über das Kontaktformular übermittelten Daten werden ausschließlich zur
                        Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme verwendet.</p>

                    <p><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>

                    <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                        gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die
                        Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren
                        Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen
                        Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
                        Aufsichtsbehörde zu.</p>

                    <p>Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung
                        Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der
                        Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“.</p>

                    <h3 className={styles.h3}>2. Allgemeine Hinweise und Pflichtinformationen</h3>

                    <p><strong>Datenschutz</strong></p>

                    <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                        behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
                        Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

                    <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                        Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die
                        vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie
                        nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>

                    <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per
                        E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
                        durch Dritte ist nicht möglich.</p>

                    <p><strong>Hinweis zur verantwortlichen Stelle</strong></p>

                    <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>

                    <p>Faranak Nokhbehzaeem<br/>
                        Wacholderweg 6<br/>
                        53757 St. Augustin</p>

                    <p>Telefon: <a href="tel:+4915785908915" rel={ 'noopener noreferrer' }
                                   aria-label={ 'Anrufen unter 0157 85908915' }>0157
                        / 85908915</a><br/>
                        E-Mail: <a href="mailto:info@saim-mobilephysio.de" rel={ 'noopener noreferrer' }
                                  aria-label={ 'E-Mail senden an info@saim-mobilephysio.de' }>info@saim-mobilephysio.de</a></p>

                    <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam
                        mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B.
                        Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>

                    <p><strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung</strong></p>

                    <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie
                        können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose
                        Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                        Datenverarbeitung bleibt vom Widerruf unberührt.</p>

                    <p><strong>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
                        Direktwerbung (Art. 21 DSGVO)</strong></p>

                    <p><strong>Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO
                        erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
                        ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies
                        gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige
                        Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser
                        Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen
                        personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende
                        schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und
                        Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder
                        Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).</strong></p>

                    <p><strong>Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so
                        haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender
                        personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das
                        Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen,
                        werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung
                        verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).</strong></p>

                    <p><strong>Beschwerderecht bei der zuständigen Aufsichtsbehörde</strong></p>

                    <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                        Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                        Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
                        unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>

                    <p><strong>Recht auf Datenübertragbarkeit</strong></p>

                    <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
                        Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
                        maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten
                        an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar
                        ist.</p>

                    <p><strong>Auskunft, Sperrung, Löschung und Berichtigung</strong></p>

                    <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                        unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
                        Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung
                        oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
                        können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>

                    <p><strong>Recht auf Einschränkung der Verarbeitung</strong></p>

                    <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                        verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an
                        uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>

                    <ul>
                        <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten,
                            benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben
                            Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                            verlangen.
                        </li>
                        <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah / geschieht,
                            können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
                        </li>
                        <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
                            Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht,
                            statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                            verlangen.
                        </li>
                        <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung
                            zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht,
                            wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung
                            Ihrer personenbezogenen Daten zu verlangen.
                        </li>
                    </ul>

                    <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese
                        Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur
                        Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte
                        einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen
                        öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet
                        werden.</p>

                    <h3 className={styles.h3}>3. Datenerfassung auf unserer Website</h3>

                    <p><strong>Cookies</strong></p>

                    <p>Diese Website verwendet keine Cookies. Es werden keine Daten in Ihrem Browser gespeichert, die
                        über den reinen Besuch der Website hinausgehen. Sie müssen daher keine Cookie-Einstellungen
                        vornehmen.</p>

                    <p><strong>Tracking und Analyse-Tools</strong></p>

                    <p>Diese Website verwendet keine Tracking- oder Analyse-Tools wie Google Analytics, Matomo oder
                        ähnliche Dienste. Ihr Surfverhalten auf unserer Website wird nicht erfasst oder analysiert.
                        Wir verzichten bewusst auf solche Technologien, um Ihre Privatsphäre zu schützen.</p>

                    <p><strong>Server-Log-Dateien</strong></p>

                    <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                        Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>

                    <ul>
                        <li>Browsertyp und Browserversion</li>
                        <li>verwendetes Betriebssystem</li>
                        <li>Referrer URL</li>
                        <li>Hostname des zugreifenden Rechners</li>
                        <li>Uhrzeit der Serveranfrage</li>
                        <li>IP-Adresse</li>
                    </ul>

                    <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>

                    <p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                        Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung
                        und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.</p>

                    <p><strong>Kontaktformular</strong></p>

                    <p>Wenn Sie uns über das Kontaktformular auf unserer Website kontaktieren, werden die von Ihnen
                        eingegebenen Daten zum Zwecke der Bearbeitung Ihrer Anfrage bei uns gespeichert und verarbeitet.
                        Folgende Daten werden über das Kontaktformular erhoben:</p>

                    <ul>
                        <li>Name (Vorname/Name)</li>
                        <li>Geburtsdatum</li>
                        <li>Telefonnummer</li>
                        <li>E-Mail-Adresse</li>
                        <li>Postleitzahl/Ort</li>
                        <li>Straße/Hausnummer</li>
                        <li>Ihre Nachricht</li>
                        <li>Information, ob Sie ein ärztliches Rezept haben</li>
                    </ul>

                    <p>Die Formulardaten werden über Netlify Forms verarbeitet und an uns übermittelt. Netlify ist
                        unser Hosting-Provider. Diese Daten geben wir nicht ohne Ihre Einwilligung an Dritte weiter.</p>

                    <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
                        Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                        vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
                        auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und / oder auf unseren berechtigten
                        Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven
                        Bearbeitung der an uns gerichteten Anfragen haben.</p>

                    <p>Die von Ihnen an uns per Kontaktformular übersandten Daten verbleiben bei uns, bis Sie uns
                        zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
                        Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens).
                        Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben
                        unberührt.</p>

                    <p><strong>Anfrage per E-Mail oder Telefon</strong></p>

                    <p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller
                        daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
                        Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
                        Einwilligung weiter.</p>

                    <h3 className={styles.h3}>4. Hosting und Content Delivery</h3>

                    <p><strong>Netlify</strong></p>

                    <p>Diese Website wird auf Servern von Netlify, Inc., 44 Montgomery Street, Suite 300, San
                        Francisco, CA 94104, USA gehostet. Netlify erfasst automatisch Daten über jeden Zugriff auf
                        die Website (Server-Log-Dateien). Zu diesen Zugriffsdaten gehören unter anderem IP-Adresse,
                        Browsertyp, Betriebssystem und die zuvor besuchte Seite (Referrer URL).</p>

                    <p>Die Verwendung von Netlify erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben
                        ein berechtigtes Interesse an einer zuverlässigen und sicheren Darstellung unserer Website.
                        Weitere Informationen finden Sie in der Datenschutzerklärung von Netlify unter:
                        https://www.netlify.com/privacy/</p>

                    <h3 className={styles.h3}>5. Externe Dienste</h3>

                    <p><strong>Google Fonts (Next.js Optimierung)</strong></p>

                    <p>Diese Website nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts
                        (Open Sans und Roboto), die von Google bereitgestellt werden. Diese werden durch die
                        Next.js-Font-Optimierung geladen, wodurch beim ersten Laden der Seite eine Verbindung zu
                        Google-Servern hergestellt werden kann. Ihr Browser lädt die benötigten Web Fonts in Ihren
                        Browsercache, um Texte und Schriftarten korrekt anzuzeigen.</p>

                    <p>Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google
                        aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse unsere
                        Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse einer
                        einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein
                        berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.</p>

                    <p>Weitere Informationen zu Google Web Fonts finden Sie unter
                        https://developers.google.com/fonts/faq und in der Datenschutzerklärung von Google:
                        https://policies.google.com/privacy</p>
                </div>
            </div>
            <Contact />
        </>
    );
};
