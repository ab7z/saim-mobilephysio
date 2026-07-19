import styles from '../styles/components/Testimonials.module.css';

export default function Testimonials() {
    return (
        <section className={ styles.section } aria-labelledby="testi-title">
            <header className={ styles.head }>
                <div>
                    <div className={ styles.numTag }>Bewertungen</div>
                </div>
                <div>
                    <h2 id="testi-title" className={ styles.title }>
                        Verifizierbare <span className={ styles.accent }>Rückmeldungen.</span>
                    </h2>
                    <p className={ styles.sub }>
                        Ich veröffentliche hier keine Patientenzitate, solange sie nicht öffentlich
                        belegbar sind.
                    </p>
                </div>
            </header>
            <div className={ styles.card }>
                <div className={ styles.cardLabel }>Google-Unternehmenseintrag</div>
                <p className={ styles.copy }>
                    Der öffentliche Google-Eintrag von Saim Mobilephysio ist verfügbar. Rezensionstexte
                    werden auf dieser Website erst angezeigt, wenn sie eindeutig verifizierbar vorliegen.
                </p>
                <a
                    className={ styles.link }
                    href="https://www.google.com/maps?cid=17047543323511838713"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Google-Eintrag ansehen
                </a>
            </div>
        </section>
    );
}
