import { useState } from 'react';
import styles from '../styles/components/Navbar.module.css';

const LINKS = [
    { id: 'about', label: 'Über mich' },
    { id: 'leistungen', label: 'Leistungen' },
    { id: 'preise', label: 'Preise' },
    { id: 'einzugsgebiet', label: 'Einzugsgebiet' },
    { id: 'kontakt', label: 'Kontakt' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const scroll = (id) => {
        const el = document.querySelector('#' + id);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setOpen(false);
    };

    return (
        <nav className={ styles.nav } aria-label="Hauptnavigation">
            <div className={ styles.inner }>
                <button
                    type="button"
                    className={ styles.brand }
                    onClick={ () => window.scrollTo({ top: 0, behavior: 'smooth' }) }
                    aria-label="Zum Seitenanfang"
                >
                    <span className={ styles.brandMark } aria-hidden="true">S</span>
                    <span className={ styles.brandName }>
                        <span className={ styles.brandTop }>Saim Mobilephysio</span>
                        <span className={ styles.brandBot }>Privatpraxis · 30 km St. Augustin</span>
                    </span>
                </button>
                <ul className={ styles.links }>
                    { LINKS.map((link) => (
                        <li key={ link.id }>
                            <button
                                type="button"
                                className={ styles.linkBtn }
                                onClick={ () => scroll(link.id) }
                            >
                                { link.label }
                            </button>
                        </li>
                    )) }
                </ul>
                <div className={ styles.right }>
                    <button
                        type="button"
                        className={ styles.cta }
                        onClick={ () => scroll('anmeldung') }
                    >
                        Termin anfragen
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                            <path d="M2 5.5h7m-3-3l3 3-3 3" stroke="currentColor" strokeWidth="1.4"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button
                        type="button"
                        className={ styles.toggle }
                        onClick={ () => setOpen((v) => !v) }
                        aria-expanded={ open }
                        aria-controls="mobile-nav-menu"
                        aria-label={ open ? 'Menü schließen' : 'Menü öffnen' }
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d={ open ? 'M3 3l8 8M3 11l8-8' : 'M2 4h10M2 10h10' }
                                  stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            { open && (
                <ul id="mobile-nav-menu" className={ styles.mobileMenu }>
                    { LINKS.map((link) => (
                        <li key={ link.id }>
                            <button
                                type="button"
                                className={ styles.mobileLink }
                                onClick={ () => scroll(link.id) }
                            >
                                { link.label }
                            </button>
                        </li>
                    )) }
                    <li>
                        <button
                            type="button"
                            className={ styles.mobileCta }
                            onClick={ () => scroll('anmeldung') }
                        >
                            Termin anfragen
                        </button>
                    </li>
                </ul>
            ) }
        </nav>
    );
}
