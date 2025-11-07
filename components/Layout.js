import Footer from './Footer';
import styles from '../styles/components/Layout.module.css';

export default function Layout({ children }) {
    return (
        <>
            <a href="#main-content" className={ styles.skipLink }>
                Zum Hauptinhalt springen
            </a>
            <main id="main-content" className={ styles.main }>
                { children }
            </main>
            <Footer/>
        </>
    );
}