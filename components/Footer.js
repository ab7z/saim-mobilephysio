import Link from 'next/link';
import styles from '../styles/components/Footer.module.css';

const Footer = () => {
    return (
        <footer className={ styles.footer }>
            <div className={ styles.inner }>
                <div className={ styles.copyRight }>
                    &copy; { new Date().getFullYear() } Saim Mobilephysio · Faranak Nokhbehzaeem
                </div>
                <nav className={ styles.links } aria-label="Footer-Navigation">
                    <Link href="/terms">Impressum</Link>
                    <Link href="/privacy">Datenschutz</Link>
                    <Link href="/#kontakt">Kontakt</Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
