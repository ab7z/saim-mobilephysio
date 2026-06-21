import Image from 'next/image';
import faranak from '../public/f.webp';
import styles from '../styles/components/About.module.css';
import {
    GERMANY_QUALIFICATION_YEAR,
    IRAN_EXPERIENCE_YEARS,
    IRAN_QUALIFICATION_YEAR,
    getTotalExperienceYears,
} from '../lib/experience';

const Check = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function About() {
    const currentYear = new Date().getFullYear();
    const totalExperienceYears = getTotalExperienceYears();

    return (
        <section className={ styles.section } id="about" aria-labelledby="about-title">
            <header className={ styles.head }>
                <div>
                    <div className={ styles.num }>
                        <span className={ styles.numTag }>01 / Über mich</span>
                    </div>
                </div>
                <div>
                    <h2 id="about-title" className={ styles.title }>
                        Eine Therapeutin,<br/>die <span className={ styles.accent }>zuhört</span>
                        &nbsp;&mdash; bevor sie behandelt.
                    </h2>
                    <p className={ styles.sub }>
                        { totalExperienceYears } Jahre Berufserfahrung in Klinik und Privatpraxis &mdash;
                        vom Helios Klinikum Siegburg bis zur eigenen mobilen Praxis.
                    </p>
                </div>
            </header>
            <div className={ styles.grid }>
                <aside className={ styles.card }>
                    <div className={ styles.cardHead }>
                        <span>Faranak Nokhbehzaeem</span><span>{ currentYear }</span>
                    </div>
                    <div className={ styles.img }>
                        <Image
                            src={ faranak }
                            alt="Faranak Nokhbehzaeem, Physiotherapeutin"
                            placeholder="blur"
                            sizes="(max-width: 980px) 180px, 180px"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div className={ styles.caption }>
                        <strong>Faranak Nokhbehzaeem</strong>
                        Physio&shy;therapeutin · { totalExperienceYears } Jahre Erfahrung
                    </div>
                    <div className={ styles.cardFoot }>
                        <div className={ styles.row }>
                            <span className={ styles.k }>Spezialisierung</span>
                            <span className={ styles.v }>Manual / Lymph</span>
                        </div>
                        <div className={ styles.row }>
                            <span className={ styles.k }>Ausbildung</span>
                            <span className={ styles.v }>DE { GERMANY_QUALIFICATION_YEAR } · IR { IRAN_QUALIFICATION_YEAR }</span>
                        </div>
                        <div className={ styles.row }>
                            <span className={ styles.k }>Erfahrung</span>
                            <span className={ styles.v }>{ totalExperienceYears } Jahre</span>
                        </div>
                        <div className={ styles.row }>
                            <span className={ styles.k }>Sprachen</span>
                            <span className={ styles.v }>Deutsch · Persisch</span>
                        </div>
                    </div>
                </aside>
                <div className={ styles.body }>
                    <p className={ styles.lead }>
                        Mein Name ist <span className={ styles.accent }>Faranak Nokhbehzaeem</span>.
                        Seit { totalExperienceYears } Jahren begleite ich Menschen zurück in einen Körper,
                        der sich gut anfühlt.
                    </p>
                    <p className={ styles.p }>
                        Staatlich anerkannte Manual&shy;thera&shy;peutin, Physio&shy;thera&shy;peutin,
                        Personal&shy;trainerin und Ödem-Therapeutin. Meine Aus&shy;bildung habe ich
                        { ' ' }{ GERMANY_QUALIFICATION_YEAR } in Deutsch&shy;land abgeschlossen &mdash; auf Basis von { IRAN_EXPERIENCE_YEARS } Jahren
                        Berufs&shy;erfahrung im Iran.
                    </p>
                    <p className={ styles.p }>
                        Seither arbeite ich ununter&shy;brochen in Festanstellung &mdash; unter anderem
                        am <strong>Helios Klinikum Siegburg</strong> (Chirurgie, Innere Medizin,
                        Kardiologie), am <strong>Sankt Josef Hospital Bonn</strong>
                        (Orthopädie, Chirurgie, Rückenschmerz) sowie am
                        <strong> Elisabeth Krankenhaus Bonn</strong> (Geriatrie, Gynäkologie)
                        &mdash; und biete meine Dienst&shy;leistung neben&shy;beruflich
                        selbstständig an.
                    </p>
                    <div className={ styles.creds }>
                        <div className={ styles.cred }><Check/>Manuelle Therapie</div>
                        <div className={ styles.cred }><Check/>Manuelle Lymphdrainage</div>
                        <div className={ styles.cred }><Check/>Krankengymnastik</div>
                        <div className={ styles.cred }><Check/>Vibrafit-Training</div>
                        <div className={ styles.cred }><Check/>Kinesio-Taping</div>
                        <div className={ styles.cred }><Check/>Ödemtherapie</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
