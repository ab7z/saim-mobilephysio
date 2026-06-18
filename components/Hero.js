import styles from '../styles/components/Hero.module.css';
import Navbar from './Navbar';
import HeroBackdrop from './HeroBackdrop';

const ChevronRight = ({ size = 14 }) => (
    <svg width={ size } height={ size } viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M2 7h10m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="1.4"
              strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const Check = ({ size = 14 }) => (
    <svg width={ size } height={ size } viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function Hero() {
    return (
        <>
            <Navbar/>
            <section className={ styles.hero } id="home" aria-labelledby="hero-title">
                <HeroBackdrop/>
                <div className={ styles.inner }>
                    <div className={ styles.top }>
                        <div className={ styles.tag }>
                            <span className={ styles.dot } aria-hidden="true"/>
                            Mobile Physiotherapie · Hausbesuch
                        </div>
                        <h1 id="hero-title" className={ styles.title }>
                            Professionelle Physio&shy;therapie. <span className={ styles.accent }>Bei Ihnen zu&nbsp;Hause.</span>
                        </h1>
                        <p className={ styles.lede }>
                            Faranak Nokhbehzaeem &mdash; staatlich anerkannte Manual&shy;therapeutin
                            mit 26 Jahren Berufserfahrung. Ohne Wartezeit, ohne Anfahrt, in der
                            Privat&shy;sphäre Ihres Zuhauses.
                        </p>
                        <div className={ styles.actions }>
                            <a href="#anmeldung" className={ styles.btnPrimary }>
                                Termin anfragen <ChevronRight/>
                            </a>
                            <a href="#leistungen" className={ styles.btnSecondary }>
                                Leistungen ansehen
                            </a>
                        </div>
                    </div>

                    <div className={ styles.bottomRow }>
                        <div className={ styles.statsGrid }>
                            <div className={ styles.statCell }>
                                <div className={ styles.statNum }>26<span>Jahre</span></div>
                                <div className={ styles.statLbl }>Berufs&shy;erfahrung</div>
                            </div>
                            <div className={ styles.statCell }>
                                <div className={ styles.statNum }>30<span>km</span></div>
                                <div className={ styles.statLbl }>Einzugs&shy;gebiet</div>
                            </div>
                            <div className={ styles.statCell }>
                                <div className={ styles.statNum }>60<span>Minuten</span></div>
                                <div className={ styles.statLbl }>Pro Sitzung</div>
                            </div>
                            <div className={ styles.statCell }>
                                <div className={ styles.statNum }>12</div>
                                <div className={ styles.statLbl }>Behandlungs&shy;formen</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={ styles.trust }>
                    <div className={ styles.trustInner }>
                        <span className={ styles.trustLbl }>Qualifikationen</span>
                        <span className={ styles.trustItem }><Check/>Staatlich anerkannt</span>
                        <span className={ styles.trustItem }><Check/>Manualtherapie</span>
                        <span className={ styles.trustItem }><Check/>Ödemtherapie</span>
                        <span className={ styles.trustItem }><Check/>Personal Training</span>
                        <span className={ styles.trustItem }><Check/>Helios Klinikum</span>
                    </div>
                </div>
            </section>
        </>
    );
}
