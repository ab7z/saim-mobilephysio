import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/SimpleNavbar.module.css';

export default function SimpleNavbar() {
    return (
        <>
            <nav className={ styles.nav }>
                <ul className={ styles.ul }>
                    <li className={ styles.li }>
                        <Link href="/">
                            <Image
                                src={ '/logo.svg' }
                                alt={ 'logo' }
                                width={ 50 }
                                height={ 50 }
                                quality={ 80 }
                            />
                        </Link>
                    </li>
                    <li className={ styles.li }>
                        <Link href="/" aria-label={'Home'}>
                            Home
                        </Link>
                    </li>
                    <li className={ styles.li }>
                        <Link href="/#intro" aria-label={'Über mich'}>
                            Über mich
                        </Link>
                    </li>
                    <li className={ styles.li }>
                        <Link href="/#services" aria-label={'Leistungen'}>
                            Leistungen
                        </Link>
                    </li>
                    <li className={ styles.li }>
                        <Link href="/#prices" aria-label={'Preise'}>
                            Preise
                        </Link>
                    </li>
                    <li className={ styles.li }>
                        <Link href="/#contact" aria-label={'Kontakt'}>
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
