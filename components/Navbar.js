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

    const scroll = (event, id) => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const el = document.getElementById(id);
        if (!el) return;

        event.preventDefault();
        const y = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: 'smooth' });
        window.history.pushState(null, '', '#' + id);
        setOpen(false);
    };

    return (
        <nav className={ styles.nav } aria-label="Hauptnavigation">
            <div className={ styles.inner }>
                <a
                    href="#home"
                    className={ styles.brand }
                    onClick={ (event) => scroll(event, 'home') }
                    aria-label="Zum Seitenanfang"
                >
                    <span className={ styles.brandMark } aria-hidden="true">S</span>
                    <span className={ styles.brandName }>
                        <span className={ styles.brandTop }>Saim Mobilephysio</span>
                        <span className={ styles.brandBot }>Privatpraxis · 30 km St. Augustin</span>
                    </span>
                </a>
                <ul className={ styles.links }>
                    { LINKS.map((link) => (
                        <li key={ link.id }>
                            <a
                                href={ `#${link.id}` }
                                className={ styles.linkBtn }
                                onClick={ (event) => scroll(event, link.id) }
                            >
                                { link.label }
                            </a>
                        </li>
                    )) }
                </ul>
                <div className={ styles.right }>
                    <a
                        href="#anmeldung"
                        className={ styles.cta }
                        onClick={ (event) => scroll(event, 'anmeldung') }
                    >
                        Termin anfragen
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                            <path d="M2 5.5h7m-3-3l3 3-3 3" stroke="currentColor" strokeWidth="1.4"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
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
                            <a
                                href={ `#${link.id}` }
                                className={ styles.mobileLink }
                                onClick={ (event) => scroll(event, link.id) }
                            >
                                { link.label }
                            </a>
                        </li>
                    )) }
                    <li>
                        <a
                            href="#anmeldung"
                            className={ styles.mobileCta }
                            onClick={ (event) => scroll(event, 'anmeldung') }
                        >
                            Termin anfragen
                        </a>
                    </li>
                </ul>
            ) }
        </nav>
    );
}
