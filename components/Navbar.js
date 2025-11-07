import Image from 'next/image';
import styles from '../styles/components/Navbar.module.css';

export default function Navbar() {
    /**
     * This scroll the page to the given id on landing page
     * @param {string} id the given id
     */
    const scroll = id => {
        let y = document.querySelector('#' + id).offsetTop;
        if (id === 'intro') y -= 100;
        window.scrollTo({ left: 0, top: y, behavior: 'smooth' });
    };

    return (
        <>
            <nav className={ styles.nav } aria-label="Hauptnavigation">
                <ul className={ styles.ul }>
                    <li className={ styles.li }>
                        <Image
                            src={ '/logo.svg' }
                            alt={ 'Saim Mobilephysio Logo' }
                            width={ 50 }
                            height={ 50 }
                            quality={ 80 }
                        />
                    </li>
                    <li>
                        <button
                            className={ styles.li }
                            onClick={ () => scroll('home') }
                            type="button"
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            className={ styles.li }
                            onClick={ () => scroll('intro') }
                            type="button"
                        >
                            Über mich
                        </button>
                    </li>
                    <li>
                        <button
                            className={ styles.li }
                            onClick={ () => scroll('services') }
                            type="button"
                        >
                            Leistungen
                        </button>
                    </li>
                    <li>
                        <button
                            className={ styles.li }
                            onClick={ () => scroll('prices') }
                            type="button"
                        >
                            Preise
                        </button>
                    </li>
                    <li>
                        <button
                            className={ styles.li }
                            onClick={ () => scroll('contact') }
                            type="button"
                        >
                            Kontakt
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
};