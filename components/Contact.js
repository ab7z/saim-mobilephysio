import styles from '../styles/components/Contact.module.css';

const Arrow = () => (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
        <path d="M2 5.5h7m-3-3l3 3-3 3" stroke="currentColor" strokeWidth="1.4"
              strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function Contact() {
    return (
        <section className={ styles.section } id="kontakt" aria-labelledby="contact-title">
            <header className={ styles.head }>
                <div>
                    <div className={ styles.numTag }>08 / Kontakt</div>
                </div>
                <div>
                    <h2 id="contact-title" className={ styles.title }>
                        Lieber <span className={ styles.accent }>persönlich?</span> Gerne.
                    </h2>
                    <p className={ styles.sub }>
                        Drei direkte Wege, mit mir in Verbindung zu treten.
                    </p>
                </div>
            </header>
            <div className={ styles.grid }>
                <a
                    href="tel:+4915785908915"
                    className={ styles.card }
                    aria-label="Anrufen unter +49 157 85 90 8915"
                >
                    <div className={ styles.icon }>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                            <path d="M3 4c0 7 4 11 11 11l1.5-3-3.5-1-1 1.5c-2-.5-3.5-2-4-4l1.5-1-1-3.5z"
                                  stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className={ styles.lbl }>Telefon</div>
                    <div className={ styles.val }>+49 157 85 90 8915</div>
                    <span className={ styles.arrow }>Anrufen <Arrow/></span>
                </a>
                <a
                    href="mailto:info@saim-mobilephysio.de"
                    className={ styles.card }
                    aria-label="E-Mail senden an info@saim-mobilephysio.de"
                >
                    <div className={ styles.icon }>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                            <rect x="2" y="4" width="14" height="10" rx="1.5"
                                  stroke="currentColor" strokeWidth="1.4"/>
                            <path d="M2.5 5l6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.4"/>
                        </svg>
                    </div>
                    <div className={ styles.lbl }>E-Mail</div>
                    <div className={ styles.val }>info@saim-mobilephysio.de</div>
                    <span className={ styles.arrow }>Schreiben <Arrow/></span>
                </a>
                <a
                    href="https://www.google.de/maps/place/Sankt+Augustin+Zentrum/@50.7768778,7.1532109,13z/data=!4m5!3m4!1s0x47bee743b959f025:0xcddcf985aab0d659!8m2!3d50.7768778!4d7.1882297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ styles.card }
                    aria-label="Standort auf Google Maps ansehen — 30 km um Sankt Augustin"
                >
                    <div className={ styles.icon }>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                            <path d="M9 16s6-5 6-10a6 6 0 10-12 0c0 5 6 10 6 10z"
                                  stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                            <circle cx="9" cy="6" r="2" stroke="currentColor" strokeWidth="1.4"/>
                        </svg>
                    </div>
                    <div className={ styles.lbl }>Einzugsgebiet</div>
                    <div className={ styles.val }>30 km um Sankt Augustin</div>
                    <span className={ styles.arrow }>Karte ansehen <Arrow/></span>
                </a>
            </div>
        </section>
    );
}
