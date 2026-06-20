import Image from 'next/image';
import styles from '../styles/components/Pricing.module.css';

export default function Pricing() {
    return (
        <section className={ styles.section } id="preise" aria-labelledby="pricing-title">
            <div className={ styles.wrap }>
                <h2 id="pricing-title" className={ styles.srOnly }>Honorarkatalog</h2>
                <Image
                    src="/preisliste.webp"
                    width={ 1906 }
                    height={ 2040 }
                    alt="Honorarkatalog von Saim Mobilephysio mit Behandlungszeiten und Preisen"
                    className={ styles.list }
                    priority
                    sizes="(max-width: 768px) 90vw, 900px"
                />
            </div>
        </section>
    );
}
