import styles from '../styles/components/Services.module.css';

const SERVICES = [
    {
        code: 'MT',
        roman: 'i.',
        name: 'Manuelle Therapie',
        desc: 'Gezielte Mobilisation von Gelenken, Wirbeln und Muskel­gewebe nach modernen manuell­therapeutischen Standards.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M9 5v8M5 9h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
        ),
    },
    {
        code: 'PT',
        roman: 'ii.',
        name: 'Physiotherapie',
        desc: 'Kranken­gymnastik bei Verletzungen, Operationen, neurologischen und orthopädischen Beschwerden.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 9c2-3 4-3 6 0s4 3 6 0" stroke="currentColor" strokeWidth="1.4"
                      strokeLinecap="round" fill="none"/>
            </svg>
        ),
    },
    {
        code: 'MLD',
        roman: 'iii.',
        name: 'Manuelle Lymphdrainage',
        desc: 'Sanfte Ödemtherapie zur Entstauung des Lymph­systems — nach OP, bei Schwellungen oder chronischen Beschwerden.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M9 3c1.5 2 3 4 3 6a3 3 0 11-6 0c0-2 1.5-4 3-6z" stroke="currentColor"
                      strokeWidth="1.4" strokeLinejoin="round"/>
            </svg>
        ),
    },
    {
        code: 'AT',
        roman: 'iv.',
        name: 'Atemtherapie',
        desc: 'Übungen zur Vertiefung der Atmung, Verbesserung der Lungen­kapazität und Linderung von Atemwegs­beschwerden.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.4"/>
                <circle cx="9" cy="9" r="5" stroke="currentColor" strokeWidth="1.4" opacity="0.5"/>
                <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.4" opacity="0.25"/>
            </svg>
        ),
    },
    {
        code: 'MIG',
        roman: 'v.',
        name: 'Migränetherapie',
        desc: 'Manuelle Behandlung der Hals- und Kiefer­muskulatur zur Reduktion von Häufigkeit und Intensität von Migräne.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 12c2-2 3-5 6-5s4 3 6 5" stroke="currentColor" strokeWidth="1.4"
                      strokeLinecap="round" fill="none"/>
                <circle cx="6" cy="6" r="1.5" fill="currentColor"/>
            </svg>
        ),
    },
    {
        code: 'AKP',
        roman: 'vi.',
        name: 'Akupressur',
        desc: 'Druck­behandlung gezielter Energie­punkte — eine sanfte, nadel­freie Alternative zur Akupunktur.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
                <circle cx="9" cy="9" r="2" fill="currentColor"/>
            </svg>
        ),
    },
    {
        code: 'BBR',
        roman: 'vii.',
        name: 'Beckenboden & Rückentraining',
        desc: 'Stärkung der Tiefen­muskulatur für mehr Stabilität, Halt und ein gesundes Körper­bewusstsein.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <rect x="3" y="6" width="12" height="6" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M6 6V4M12 6V4" stroke="currentColor" strokeWidth="1.4"/>
            </svg>
        ),
    },
    {
        code: 'TRN',
        roman: 'viii.',
        name: 'Koordination, Ausdauer & Krafttraining',
        desc: 'Personal Training auf Ihre individuelle Konstitution und Ziele zuge­schnitten.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 9h12M9 3v12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.4" opacity="0.5"/>
            </svg>
        ),
    },
    {
        code: 'WLN',
        roman: 'ix.',
        name: 'Wellnessbehandlungen',
        desc: 'Wohltuende Anwendungen für Gesicht und Dekolleté — als Ergänzung oder eigenständige Auszeit.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 11c0-3 2-5 5-5s5 2 5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                <path d="M4 14h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
        ),
    },
    {
        code: 'KIN',
        roman: 'x.',
        name: 'Kinesiologische Tapetechniken',
        desc: 'Elastische Tapes zur Unter­stützung von Muskeln und Gelenken — im Sport und im Alltag.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 6l4-3 8 8-4 3z" stroke="currentColor" strokeWidth="1.4"
                      strokeLinejoin="round" fill="none"/>
                <path d="M5 8l5 5" stroke="currentColor" strokeWidth="1.4"/>
            </svg>
        ),
    },
    {
        code: 'MAS',
        roman: 'xi.',
        name: 'Massage',
        desc: 'Klassische und gezielte Massagetechniken zur Lösung von Verspannungen und Förderung der Durchblutung.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 4l10 10M4 14l10-10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
        ),
    },
    {
        code: 'OZN',
        roman: 'xii.',
        name: 'Ozon- / Plasma-Therapie *',
        time: '30 / 60 min',
        desc: 'Hochfrequenz­therapie und Plasma-Anwendung zur Anregung von Zell- und Haut­regeneration sowie Geweb­eheilung.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="2" fill="currentColor"/>
                <path d="M9 1.5v3M9 13.5v3M1.5 9h3M13.5 9h3M3.5 3.5l2 2M12.5 12.5l2 2M3.5 14.5l2-2M12.5 5.5l2-2"
                      stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
        ),
    },
];

export default function Services() {
    return (
        <section className={ styles.section } id="leistungen" aria-labelledby="services-title">
            <header className={ styles.head }>
                <div>
                    <div className={ styles.numTag }>Leistungen</div>
                </div>
                <div>
                    <h2 id="services-title" className={ styles.title }>
                        Das volle <span className={ styles.accent }>Spektrum</span>
                        &nbsp;— in Ihrer eigenen Wohnung.
                    </h2>
                    <p className={ styles.sub }>
                        Zwölf Behandlungs&shy;formen für jeden Bedarf — von der akuten Manuelltherapie
                        bis zur präventiven Wellness&shy;anwendung.
                    </p>
                </div>
            </header>
            <div className={ styles.grid } role="list" aria-label="Physiotherapie Leistungen">
                { SERVICES.map((s) => (
                    <article className={ styles.card } key={ s.code } role="listitem">
                        <div className={ styles.cardHead }>
                            <span className={ styles.icon }>{ s.icon }</span>
                            <span className={ styles.tag }>{ s.roman }</span>
                        </div>
                        <h3 className={ styles.name }>{ s.name }</h3>
                        <p className={ styles.desc }>{ s.desc }</p>
                        <div className={ styles.foot }>
                            <span>{ s.code }</span>
                            <span className={ styles.price }>{ s.time || '60 min' }</span>
                        </div>
                    </article>
                )) }
            </div>
            <p className={ styles.note }>
                <em>*</em> 30-minütige Behandlungen werden als volle Stunde abgerechnet.
            </p>
        </section>
    );
}
