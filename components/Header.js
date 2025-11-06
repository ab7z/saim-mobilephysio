import styles from '../styles/components/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import Navbar from './Navbar';
import Image from 'next/image';

export default function Header() {
    return (
        <>
            <header className={ styles.wrapper } id={ 'home' }>
                <div className={ styles.left }>
                    <div className={ styles.svg }/>
                    <div className={ styles.container }>
                        <Navbar/>
                        <div className={ styles.helper }>
                            <h1 className={ styles.h1 }>
                                Saim Mobile Physiotherapie
                            </h1>
                            <h2 className={ styles.h2 }>
                                Privat
                            </h2>
                            <div className={ styles.subHeading }>
                                <div>
                                    <p>{ new Date().getFullYear() - 1999 } Jahre Berufserfahrung</p>
                                </div>
                                <div>
                                    <p>
                                        Staatlich anerkannte Manualtherapeutin, Physiotherapeutin,
                                        Ödemtherapeutin und Personal Trainerin
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={ styles.icons }>
                            <a href={ 'tel:+4915785908915' }
                               rel={ 'noopener noreferrer' }
                               aria-label={ 'Telefonnummer' }
                            >
                                <FontAwesomeIcon icon={ faPhone } size={ '2x' }/>
                            </a>
                            <a href={ 'mailto:info@saim-mobilephysio.de' }
                               rel={ 'noopener noreferrer' }
                               aria-label={ 'E-Mail Adresse' }
                            >
                                <FontAwesomeIcon icon={ faEnvelope } size={ '2x' }/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={ styles.right }>
                    <Image
                        src="/f.webp"
                        alt="Saim Mobile Physiotherapie"
                        fill
                        priority
                        fetchPriority="high"
                        sizes="(max-width: 768px) 50vw, 33vw"
                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    />
                </div>
            </header>
        </>
    );
};
