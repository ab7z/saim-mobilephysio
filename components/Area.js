import styles from '../styles/components/Area.module.css';

const CITIES = [
    { name: 'Sankt Augustin', km: '0 km', primary: true },
    { name: 'Bonn', km: '9 km', primary: true },
    { name: 'Siegburg', km: '5 km' },
    { name: 'Troisdorf', km: '8 km' },
    { name: 'Hennef', km: '11 km' },
    { name: 'Königswinter', km: '12 km' },
    { name: 'Bad Honnef', km: '17 km' },
    { name: 'Niederkassel', km: '10 km' },
    { name: 'Lohmar', km: '9 km' },
    { name: 'Much', km: '22 km' },
];

export default function Area() {
    return (
        <section className={ styles.section } id="einzugsgebiet" aria-labelledby="area-title">
            <header className={ styles.head }>
                <div>
                    <div className={ styles.numTag }>04 / Einzugsgebiet</div>
                </div>
                <div>
                    <h2 id="area-title" className={ styles.title }>
                        30 km um <span className={ styles.accent }>Sankt Augustin.</span>
                    </h2>
                    <p className={ styles.sub }>
                        Hausbesuche in Sankt Augustin, Bonn, Siegburg und Umgebung.
                        Außerhalb? Sprechen Sie mich an.
                    </p>
                </div>
            </header>
            <div className={ styles.grid }>
                <div className={ styles.info }>
                    <p className={ styles.intro }>
                        Ich behandle Patientinnen und Patienten in einem Umkreis von 30 km um
                        Sankt Augustin. Hier eine Auswahl der Orte, in denen ich regelmäßig
                        Hausbesuche durchführe:
                    </p>
                    <ul className={ styles.list }>
                        { CITIES.map((c) => (
                            <li key={ c.name } className={ c.primary ? styles.primary : '' }>
                                <span>{ c.name }</span>
                                <span className={ styles.km }>{ c.km }</span>
                            </li>
                        )) }
                    </ul>
                    <p className={ styles.outro }>
                        Ihre Stadt ist nicht dabei? Schreiben Sie mir &mdash; vieles lässt sich
                        einrichten.
                    </p>
                </div>
                <div className={ styles.mapCard }>
                    <div className={ styles.mapHead }>
                        <span>Einzugs&shy;gebiet · Radius 30 km</span>
                        <span>50.7768° N, 7.1882° E</span>
                    </div>
                    <div className={ styles.map }>
                        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"
                             style={{ width: '100%', height: '100%' }} role="img"
                             aria-label="Karte des Einzugsgebiets mit Sankt Augustin im Zentrum und 30 km Radius">
                            <defs>
                                <radialGradient id="rg2" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#c98a5a" stopOpacity="0.18"/>
                                    <stop offset="100%" stopColor="#c98a5a" stopOpacity="0.02"/>
                                </radialGradient>
                                <pattern id="grid2" width="30" height="30" patternUnits="userSpaceOnUse">
                                    <path d="M30 0 H0 V30" fill="none" stroke="#1a1612"
                                          strokeWidth="0.5" opacity="0.06"/>
                                </pattern>
                            </defs>
                            <rect width="600" height="600" fill="url(#grid2)"/>
                            <circle cx="300" cy="300" r="240" fill="url(#rg2)" stroke="#c98a5a"
                                    strokeWidth="1" strokeDasharray="4 4"/>
                            <circle cx="300" cy="300" r="160" fill="none" stroke="#c98a5a"
                                    strokeWidth="0.6" strokeDasharray="2 4" opacity="0.7"/>
                            <circle cx="300" cy="300" r="80" fill="none" stroke="#c98a5a"
                                    strokeWidth="0.6" strokeDasharray="2 4" opacity="0.7"/>
                            <line x1="300" y1="40" x2="300" y2="80" stroke="#1a1612" strokeWidth="0.6" opacity="0.3"/>
                            <line x1="300" y1="520" x2="300" y2="560" stroke="#1a1612" strokeWidth="0.6" opacity="0.3"/>
                            <line x1="40" y1="300" x2="80" y2="300" stroke="#1a1612" strokeWidth="0.6" opacity="0.3"/>
                            <line x1="520" y1="300" x2="560" y2="300" stroke="#1a1612" strokeWidth="0.6" opacity="0.3"/>
                            <g>
                                <circle cx="300" cy="300" r="8" fill="#1a1612"/>
                                <circle cx="300" cy="300" r="14" fill="none" stroke="#1a1612" strokeWidth="1.2"/>
                                <circle cx="220" cy="320" r="4" fill="#1a1612" opacity="0.75"/>
                                <circle cx="370" cy="240" r="4" fill="#1a1612" opacity="0.75"/>
                                <circle cx="350" cy="380" r="4" fill="#1a1612" opacity="0.75"/>
                                <circle cx="240" cy="380" r="4" fill="#1a1612" opacity="0.75"/>
                                <circle cx="180" cy="270" r="4" fill="#1a1612" opacity="0.75"/>
                                <circle cx="420" cy="320" r="4" fill="#1a1612" opacity="0.75"/>
                                <circle cx="270" cy="200" r="4" fill="#1a1612" opacity="0.75"/>
                                <circle cx="400" cy="430" r="4" fill="#1a1612" opacity="0.75"/>
                            </g>
                            <g fontFamily="Manrope, sans-serif" fontSize="12" fill="#1a1612" fontWeight="600">
                                <text x="316" y="296">Sankt Augustin</text>
                            </g>
                            <g fontFamily="Manrope, sans-serif" fontSize="11" fill="#1a1612" opacity="0.75">
                                <text x="208" y="338">Bonn</text>
                                <text x="378" y="240">Siegburg</text>
                                <text x="358" y="394">Königswinter</text>
                                <text x="246" y="394">Niederkassel</text>
                                <text x="186" y="266">Bornheim</text>
                                <text x="426" y="320">Hennef</text>
                                <text x="278" y="196">Troisdorf</text>
                                <text x="408" y="446">Bad Honnef</text>
                            </g>
                            <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#a8703f">
                                <text x="540" y="306">30km</text>
                                <text x="380" y="306">15km</text>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
