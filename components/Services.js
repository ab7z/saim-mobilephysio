import styles from '../styles/components/Services.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import service from '../public/service.webp';
import Image from 'next/image';

export default function Services() {
    return (
        <>
            <section className={ styles.services } id={ 'services' }>
                <div className={ styles.left }>
                    <Image
                        src={ service }
                        alt={ 'massage mobile physio saim' }
                        placeholder={ 'blur' }
                        sizes='(max-width: 740px) 100vw, 40vw'
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover'
                        }}
                    />
                </div>
                <div className={ styles.right }>
                    <div className={ styles.wrapper }>
                        <h2 className={ styles.heading }>Leistungen</h2>
                        <div className={ styles.description }>
                            <ul className={ styles.information }>
                                <li>Manuelle Therapie (MT)</li>
                                <li>Physio­the­rapie</li>
                                <li>Manuelle Lymph­drainage (MLD)</li>
                                <li>Atem­therapie</li>
                                <li>Migrän­etherapie</li>
                                <li>Aku­pres­sur</li>
                                <li>Becken­boden- & Rücken­training</li>
                            </ul>
                            <ul className={ styles.information }>
                                <li>Ko­or­dina­tion-, Ausdauer- & Kraft­training</li>
                                <li>Well­ness­be­hand­lungen (Gesicht & Dekolleté)</li>
                                <li>Kine­sio­log­ische Tape­tech­niken</li>
                                <li>Mas­sage</li>
                                <li>Ozontherapie (Hochfrequenztherapie) <sup>*</sup></li>
                                <li>Plasma-One-Therapie <sup>*</sup></li>
                            </ul>
                        </div>
                        <div className={ styles.contact }>
                            <p>Nimm Kontakt auf</p>
                            <a href={ 'tel:+4915785908915' } rel={ 'noopener noreferrer' }
                               aria-label={ 'Telefonnummer' }>
                                <FontAwesomeIcon icon={ faPhone } size={ '2x' }/>
                            </a>
                            <a href={ 'mailto:info@saim-mobilephysio.de' } rel={ 'noopener noreferrer' }
                               aria-label={ 'E-Mail Adresse' }>
                                <FontAwesomeIcon icon={ faEnvelope } size={ '2x' }/>
                            </a>
                        </div>
                        <p className={ styles.additionalInfo }><sup>*</sup> 30 minütige Behandlung wird als volle Stunde
                            abgerechnet</p>
                    </div>
                </div>
            </section>
        </>
    );
};
