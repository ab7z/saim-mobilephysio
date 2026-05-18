import Link from 'next/link';
import styles from '../styles/components/SimpleNavbar.module.css';

const LINKS = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'Über mich' },
    { href: '/#leistungen', label: 'Leistungen' },
    { href: '/#preise', label: 'Preise' },
    { href: '/#kontakt', label: 'Kontakt' },
];

export default function SimpleNavbar() {
    return (
        <nav className={ styles.nav } aria-label="Hauptnavigation">
            <div className={ styles.inner }>
                <Link href="/" className={ styles.brand } aria-label="Zur Startseite">
                    <span className={ styles.brandMark } aria-hidden="true">S</span>
                    <span className={ styles.brandName }>
                        <span className={ styles.brandTop }>Saim Mobilephysio</span>
                        <span className={ styles.brandBot }>Privatpraxis · 30 km St. Augustin</span>
                    </span>
                </Link>
                <ul className={ styles.links }>
                    { LINKS.map((link) => (
                        <li key={ link.href }>
                            <Link href={ link.href }>{ link.label }</Link>
                        </li>
                    )) }
                </ul>
            </div>
        </nav>
    );
}
