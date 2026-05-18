import styles from '../styles/components/Testimonials.module.css';

const Star = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
        <path d="M7 1l1.8 4 4.2.4-3.2 2.8 1 4.3L7 10.4 3.2 12.5l1-4.3L1 5.4 5.2 5z"/>
    </svg>
);

const Rating = ({ value = 5 }) => (
    <div className={ styles.rating } aria-label={ `${ value } von 5 Sternen` }>
        { Array.from({ length: value }).map((_, i) => <Star key={ i }/>) }
    </div>
);

const QUOTES = [
    {
        quote: 'Nach drei Sitzungen konnte ich meinen Nacken zum ersten Mal seit Monaten wieder schmerzfrei drehen. Frau Nokhbehzaeem nimmt sich wirklich Zeit.',
        name: 'Karin H.',
        role: 'Patientin · Bonn',
        avatar: 'KH',
    },
    {
        quote: 'Die Lymphdrainage zu Hause war für mich nach der OP ein Geschenk. Kein Termin­druck, keine Wege — nur ruhige, kompetente Therapie.',
        name: 'Markus R.',
        role: 'Patient · Sankt Augustin',
        avatar: 'MR',
    },
    {
        quote: 'Sie hat ein Gespür dafür, wo der Körper wirklich Hilfe braucht. Mein Personal Training ist effektiver, meine Migräne deutlich seltener.',
        name: 'Anja L.',
        role: 'Patientin · Hennef',
        avatar: 'AL',
    },
];

export default function Testimonials() {
    return (
        <section className={ styles.section } aria-labelledby="testi-title">
            <header className={ styles.head }>
                <div>
                    <div className={ styles.numTag }>05 / Stimmen</div>
                </div>
                <div>
                    <h2 id="testi-title" className={ styles.title }>
                        Was Patient&shy;innen <span className={ styles.accent }>erzählen.</span>
                    </h2>
                    <p className={ styles.sub }>Auswahl aus Rückmeldungen der vergangenen Monate.</p>
                </div>
            </header>
            <div className={ styles.grid }>
                { QUOTES.map((q) => (
                    <figure className={ styles.card } key={ q.name }>
                        <Rating/>
                        <blockquote className={ styles.quote }>
                            <p>{ q.quote }</p>
                        </blockquote>
                        <figcaption className={ styles.author }>
                            <div className={ styles.avatar } aria-hidden="true">{ q.avatar }</div>
                            <div>
                                <div className={ styles.name }>{ q.name }</div>
                                <div className={ styles.role }>{ q.role }</div>
                            </div>
                        </figcaption>
                    </figure>
                )) }
            </div>
        </section>
    );
}
