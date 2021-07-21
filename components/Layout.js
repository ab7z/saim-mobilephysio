import Footer from './Footer';
import styles from '../styles/components/Layout.module.css';

export default function Layout({ children }) {
    return (
        <>
            <main className={ styles.main }>
                { children }
            </main>
            <Footer/>
        </>
    );
}