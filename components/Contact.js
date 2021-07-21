import styles from '../styles/components/Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons/faLocationArrow';

export default function Contact() {
    return (
        <>
            <section className={ styles.contact } id={ 'contact' }>
                <h2 className={ styles.heading }>Kontakt</h2>
                <div className={ styles.container }>
                    <div className={ styles.rect }>
                        <div>
                            <FontAwesomeIcon icon={ faPhone } size={ '2x' }/>
                        </div>
                        <div>
                            <a
                                className={ styles.link }
                                href="tel:+4915785908915"
                                rel={ 'noopener noreferrer' }
                                aria-label={ 'Telefonnummer' }
                                children={ '+49 157 85 90 8915' }
                            />
                        </div>
                    </div>
                    <div className={ styles.rect }>
                        <div>
                            <FontAwesomeIcon icon={ faEnvelope } size={ '2x' }/>
                        </div>
                        <div>
                            <a
                                className={ styles.link }
                                href="mailto:info@saim-mobilephysio.de"
                                rel={ 'noopener noreferrer' }
                                aria-label={ 'E-Mail Adresse' }
                                children={ 'info@saim-mobilephysio.de' }
                            />
                        </div>
                    </div>
                    <div className={ styles.rect }>
                        <div>
                            <FontAwesomeIcon icon={ faLocationArrow } size={ '2x' }/>
                        </div>
                        <div>
                            <a
                                className={ styles.link }
                                href={ 'https://www.google.de/maps/place/Sankt+Augustin+Zentrum/@50.7768778,7.1532109,13z' +
                                '/data=!4m5!3m4!1s0x47bee743b959f025:0xcddcf985aab0d659!8m2!3d50.7768778!4d7' +
                                '.1882297' }
                                target={ '_blank' }
                                rel={ 'noopener noreferrer' }
                                aria-label={ 'Adresse aif Google Map' }
                                children={ '30 km um St. Augustin' }
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
