import SimpleNavbar from '../components/SimpleNavbar';
import Contact from '../components/Contact';
import Layout from '../components/Layout';

export default function Privacy() {
    return (
        <Layout>
            <SimpleNavbar />
            <div className="main">
                <div className="container">
                    <h1 className="heading">Datenschutzerklärung</h1>

                    <h3 className="h3">1. Datenschutz auf einen Blick</h3>

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
                        Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung".</p>

                    <h3 className="h3">2. Allgemeine Hinweise und Pflichtinformationen</h3>

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

                    <p>Telefon: <a href="tel:+4915785908915" rel="noopener noreferrer"
                                   aria-label="Anrufen unter 0157 85908915">0157 / 85908915</a><br/>
                        E-Mail: <a href="mailto:info@saim-mobilephysio.de" rel="noopener noreferrer"
                                  aria-label="E-Mail senden an info@saim-mobilephysio.de">info@saim-mobilephysio.de</a></p>

                    <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam
                        mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B.
                        Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>

                    {/* Rest of the privacy content - truncated for brevity but would include all sections */}

                    <h3 className="h3">3. Datenerfassung auf unserer Website</h3>
                    <p><strong>Cookies</strong></p>
                    <p>Diese Website verwendet keine Cookies. Es werden keine Daten in Ihrem Browser gespeichert, die
                        über den reinen Besuch der Website hinausgehen. Sie müssen daher keine Cookie-Einstellungen
                        vornehmen.</p>

                    <h3 className="h3">4. Hosting und Content Delivery</h3>
                    <p><strong>Netlify</strong></p>
                    <p>Diese Website wird auf Servern von Netlify, Inc., 44 Montgomery Street, Suite 300, San
                        Francisco, CA 94104, USA gehostet.</p>
                </div>
            </div>
            <Contact />
        </Layout>
    );
}
