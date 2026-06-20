import styles from '../styles/components/Faq.module.css';

const FAQ = [
    {
        q: 'Erstattet meine private Krankenversicherung die Behandlung?',
        a: 'In der Regel ja. Bei einer Behandlung mit ärztlichem Rezept reichen Sie die Rechnung bei Ihrer PKV ein und erhalten die verordneten Kosten erstattet. Den genauen Erstattungs­rahmen klärt Ihr Versicherer.',
    },
    {
        q: 'Was bringe ich zum ersten Termin mit?',
        a: 'Ihr ärztliches Rezept (sofern vorhanden), bequeme Kleidung und gegebenenfalls Vorbefunde. Ich bringe alles Übrige mit — Liege, Materialien, Tapes.',
    },
    {
        q: 'Wie lange dauert eine Sitzung?',
        a: 'Verlässlich 60 Minuten. Ich nehme mir die Zeit, die nötig ist — ohne Wechsel zwischen Patienten und ohne den typischen Praxis­rhythmus.',
    },
    {
        q: 'Kann ich auch ohne ärztliche Verordnung behandelt werden?',
        a: 'Ja. Wenn Sie präventiv arbeiten möchten — Personal Training, Wellness oder vorbeugende Manualtherapie — ist das jederzeit möglich. Es gelten die Sätze des Honorar­katalogs; bitte sprechen Sie mich für ein individuelles Angebot an.',
    },
    {
        q: 'Behandeln Sie auch außerhalb von Sankt Augustin?',
        a: 'Ich fahre regelmäßig in einem Radius von 30 km. Falls Ihr Wohnort weiter entfernt liegt, sprechen Sie mich gern an — vieles lässt sich individuell einrichten.',
    },
];

export default function Faq() {
    return (
        <section className={ styles.section } aria-labelledby="faq-title">
            <header className={ styles.head }>
                <div>
                    <div className={ styles.numTag }>FAQ</div>
                </div>
                <div>
                    <h2 id="faq-title" className={ styles.title }>
                        Antworten auf häufige <span className={ styles.accent }>Fragen.</span>
                    </h2>
                    <p className={ styles.sub }>
                        Klären Sie häufige Punkte vor dem ersten Termin — oder sprechen Sie mich
                        direkt an.
                    </p>
                </div>
            </header>
            <div className={ styles.list }>
                { FAQ.map((item, i) => (
                    <article className={ styles.item } key={ item.q }>
                        <div className={ styles.summary }>
                            <span className={ styles.num }>
                                { String(i + 1).padStart(2, '0') }
                            </span>
                            <h3 className={ styles.q }>{ item.q }</h3>
                        </div>
                        <div className={ styles.a }>{ item.a }</div>
                    </article>
                )) }
            </div>
        </section>
    );
}
