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
            <nav className={ styles.nav }>
                <ul className={ styles.ul }>
                    <li className={ styles.li }
                        children={
                            <Image
                                src={ '/logo.svg' }
                                alt={ 'logo' }
                                width={ 50 }
                                height={ 50 }
                                quality={ 80 }
                            />
                        }
                    />
                    <li className={ styles.li }
                        onClick={ () => scroll('home') }
                        aria-label={'Home'}
                        children={ 'Home' }
                    />
                    <li className={ styles.li }
                        onClick={ () => scroll('intro') }
                        aria-label={'Über mich'}
                        children={ 'Über mich' }
                    />
                    <li className={ styles.li }
                        onClick={ () => scroll('services') }
                        aria-label={'Leistungen'}
                        children={ 'Leistungen' }
                    />
                    <li className={ styles.li }
                        onClick={ () => scroll('prices') }
                        aria-label={'Preise'}
                        children={ 'Preise' }
                    />
                    <li className={ styles.li }
                        onClick={ () => scroll('contact') }
                        aria-label={'Kontakt'}
                        children={ 'Kontakt' }
                    />
                </ul>
            </nav>
        </>
    );
};