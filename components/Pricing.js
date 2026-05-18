import { useEffect, useRef } from 'react';
import styles from '../styles/components/Pricing.module.css';

const Arrow = () => (
    <svg className={ styles.arrow } width="120" height="64" viewBox="0 0 120 64" fill="none"
         aria-hidden="true">
        <path d="M2 22 H72 V8 L118 32 L72 56 V42 H2 Z" fill="#2c8410" stroke="#2c8410"
              strokeWidth="2" strokeLinejoin="round"/>
        <path d="M8 28 H66 V20 L106 32 L66 44 V36 H8 Z" fill="#ffffff"/>
    </svg>
);

const FigureOutline = () => (
    <svg width="100" height="120" viewBox="0 0 100 120" fill="none" aria-hidden="true">
        <circle cx="62" cy="22" r="9" stroke="#2c8410" strokeWidth="3"/>
        <path d="M18 70 C 26 50, 46 38, 62 38 C 76 38, 80 50, 72 60 C 64 70, 46 72, 30 72 Z"
              stroke="#2c8410" strokeWidth="3" fill="none" strokeLinejoin="round"/>
        <path d="M30 70 L 24 86 L 16 90" stroke="#2c8410" strokeWidth="3" fill="none"
              strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M50 64 L 50 84 L 40 92" stroke="#2c8410" strokeWidth="3" fill="none"
              strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M68 60 L 80 84 L 92 96 L 70 96" stroke="#2c8410" strokeWidth="3" fill="none"
              strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const FigureFilled = () => (
    <svg width="100" height="120" viewBox="0 0 100 120" fill="#2c8410" aria-hidden="true">
        <circle cx="62" cy="22" r="9"/>
        <path d="M18 70 C 26 50, 46 38, 62 38 C 76 38, 80 50, 72 60 C 64 70, 46 72, 30 72 Z"
              strokeLinejoin="round"/>
        <path d="M28 68 L 22 88 L 14 92 L 18 96 L 28 92 L 34 76 Z"/>
        <path d="M48 62 L 48 86 L 36 94 L 42 98 L 56 90 L 56 64 Z"/>
        <path d="M66 58 L 82 86 L 96 96 L 96 100 L 68 100 L 60 76 Z"/>
    </svg>
);

const Ticks = ({ id }) => {
    const ref = useRef(null);
    useEffect(() => {
        const g = ref.current;
        if (!g || g.dataset.populated) return;
        const ns = 'http://www.w3.org/2000/svg';
        for (let i = 0; i < 60; i++) {
            const a = (i * 6 - 90) * Math.PI / 180;
            const isMajor = i % 5 === 0;
            const r1 = isMajor ? 86 : 88;
            const r2 = 96;
            const x1 = 100 + Math.cos(a) * r1;
            const y1 = 100 + Math.sin(a) * r1;
            const x2 = 100 + Math.cos(a) * r2;
            const y2 = 100 + Math.sin(a) * r2;
            const line = document.createElementNS(ns, 'line');
            line.setAttribute('x1', x1);
            line.setAttribute('y1', y1);
            line.setAttribute('x2', x2);
            line.setAttribute('y2', y2);
            line.setAttribute('stroke', '#1a1612');
            line.setAttribute('stroke-width', isMajor ? 2 : 1);
            g.appendChild(line);
        }
        g.dataset.populated = '1';
    }, [id]);
    return <g ref={ ref } id={ id }/>;
};

const ClockA = () => (
    <div className={ styles.clockWrap }>
        <div className={ styles.clock }>
            <svg viewBox="0 0 200 200" aria-hidden="true">
                <Ticks id="ticksA"/>
                <circle cx="100" cy="100" r="78" fill="none" stroke="#2c8410" strokeWidth="14"
                        strokeDasharray="122.5 367.5" transform="rotate(-90 100 100)"/>
            </svg>
            <div className={ styles.clockC }>
                <div className={ styles.big }>1 × 15</div>
                <div className={ styles.min }>min</div>
            </div>
        </div>
    </div>
);

const ClockB = () => (
    <div className={ styles.clockWrap }>
        <div className={ styles.clock }>
            <svg viewBox="0 0 200 200" aria-hidden="true">
                <Ticks id="ticksB"/>
                <circle cx="100" cy="100" r="78" fill="none" stroke="#a9c2e0" strokeWidth="14"
                        strokeDasharray="122.5 367.5" strokeDashoffset="0" transform="rotate(-90 100 100)"/>
                <circle cx="100" cy="100" r="78" fill="none" stroke="#2c8410" strokeWidth="14"
                        strokeDasharray="122.5 367.5" strokeDashoffset="-122.5" transform="rotate(-90 100 100)"/>
                <circle cx="100" cy="100" r="78" fill="none" stroke="#d9a070" strokeWidth="14"
                        strokeDasharray="122.5 367.5" strokeDashoffset="-245" transform="rotate(-90 100 100)"/>
                <circle cx="100" cy="100" r="78" fill="none" stroke="#2c8410" strokeWidth="14"
                        strokeDasharray="122.5 367.5" strokeDashoffset="-367.5" transform="rotate(-90 100 100)"/>
            </svg>
            <div className={ styles.clockC }>
                <div className={ styles.big }>4 × 15</div>
                <div className={ styles.min }>min</div>
            </div>
        </div>
    </div>
);

const THERAPIE = [
    { name: 'Physiotherapeutischer Erstbefund zur Erstellung eines Behandlungsplans', time: '', price: '40,00 €' },
    { name: 'Arztbericht (kurz)', time: '', price: '20,00 €' },
    { name: 'Krankengymnastik', time: '', price: '39,80 €' },
    { name: 'Manuelle Therapie', time: '15 min', price: '43,00 €' },
    { name: 'Triggerpunktbehandlung', time: '15 min', price: '45,00 €' },
    { name: 'Manuelle Lymphdrainage (eine Region)', time: '30 min', price: '81,91 €' },
    { name: 'Kompressionsbandagierung', time: '', price: '25,00 €' },
    { name: 'Klassische Massage', time: '30 min', price: '86,00 €' },
    { name: 'Bindegewebsmassage', time: '15 min', price: '43,00 €' },
    { name: 'Beckenbodentraining', time: '15 min', price: '39,80 €' },
    { name: 'CMD – Kiefergelenksbehandlung', time: '15 min', price: '42,00 €' },
];

const PHYSIKAL = [
    { name: 'Niedrig/Hoch Frequenz (Ozontherapie) mit MFT gleichzeitig', time: '30 min', price: '150,00 €' },
    { name: 'Kryotherapie / Eis', time: '10 min', price: '20,00 €' },
    { name: 'Heiße Rolle', time: '10 min', price: '30,00 €' },
    { name: 'Myofasziales Kinesio-Taping', time: '', price: '15,00 €' },
    { name: 'Hausbesuche (zzgl. 0,50 € / km)', time: '', price: '28,00 €' },
];

export default function Pricing() {
    return (
        <section className={ styles.section } id="preise" aria-labelledby="pricing-title">
            <div className={ styles.wrap }>
                <header className={ styles.titleBlock }>
                    <div className={ styles.h1 }>Saim-mobilephysio</div>
                    <h2 id="pricing-title" className={ styles.h2 }>Honorarkatalog</h2>
                </header>

                <div className={ styles.kalk }>
                    {/* Row 1 */}
                    <div className={ styles.kalkText }>
                        <div className={ styles.kalkHd }>Kluge Menschen können rechnen:</div>
                        <div>
                            In der Praxis erhält man für eine normale Krankengymnastik meist nur bis
                            zu 15 Minuten Behandlung (die Zeit zum Umziehen nicht mitgerechnet) und
                            zahlt dafür 42 Euro!
                        </div>
                    </div>
                    <Arrow/>
                    <ClockA/>
                    <Arrow/>
                    <div className={ styles.fig }><FigureOutline/></div>

                    {/* Row 2 */}
                    <div className={ styles.kalkText }>
                        <div className={ styles.aber }>Aber…</div>
                        <div>
                            Bei mir bekommt man mehr Behandlung!<br/>
                            also <em>eine reine Behandlungszeit</em> von
                        </div>
                    </div>
                    <Arrow/>
                    <ClockB/>
                    <Arrow/>
                    <div className={ styles.fig }><FigureFilled/></div>
                </div>

                <p className={ styles.warn }>
                    Vor Beginn der Behandlung sollten Sie sich über Ihre Versicherungs&shy;bedingungen
                    informieren.
                </p>

                <table className={ styles.table }>
                    <caption className={ styles.srOnly }>Honorarkatalog Therapieangebote und Physikalische Maßnahmen</caption>
                    <thead>
                        <tr className={ styles.sec }>
                            <th colSpan="2" scope="col">Therapieangebote</th>
                            <th className={ styles.r } scope="col">Zeit</th>
                            <th className={ styles.r } scope="col">Honorar</th>
                        </tr>
                    </thead>
                    <tbody>
                        { THERAPIE.map((row) => (
                            <tr className={ styles.row } key={ row.name }>
                                <td className={ styles.lbl } colSpan="2">{ row.name }</td>
                                <td className={ styles.time }>{ row.time }</td>
                                <td className={ styles.price }>{ row.price }</td>
                            </tr>
                        )) }
                    </tbody>
                    <thead>
                        <tr className={ styles.sec }>
                            <th colSpan="4" scope="col">Physikalische Maßnahmen</th>
                        </tr>
                    </thead>
                    <tbody>
                        { PHYSIKAL.map((row) => (
                            <tr className={ styles.row } key={ row.name }>
                                <td className={ styles.lbl } colSpan="2">{ row.name }</td>
                                <td className={ styles.time }>{ row.time }</td>
                                <td className={ styles.price }>{ row.price }</td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </section>
    );
}
