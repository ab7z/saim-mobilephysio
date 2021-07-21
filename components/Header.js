import styles from '../styles/components/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import Navbar from './Navbar';

export default function Header() {
    return (
        <>
            <header className={ styles.wrapper } id={ 'home' }>
                <div className={ styles.left }>
                    <div className={ styles.svg }/>
                    <div className={ styles.container }>
                        <Navbar/>
                        <div className={ styles.helper }>
                            <h1 children={ 'Saim Mobile Physiotherapie' }
                                className={ styles.h1 }
                            />
                            <h2 children={ 'Privat' }
                                className={ styles.h2 }
                            />
                            <div className={ styles.subHeading }>
                                <div>
                                    <p children={ `${ new Date().getFullYear() - 1999 } Jahre Berufserfahrung` }/>
                                </div>
                                <div>
                                    <p
                                        children={ `Staatlich anerkannte Manualtherapeutin, Physiotherapeutin,
                                        Ödemtherapeutin und Personal Trainerin` }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={ styles.icons }>
                            <a href={ 'tel:+4915785908915' }
                               rel={ 'noopener noreferrer' }
                               aria-label={ 'Telefonnummer' }
                               children={ <FontAwesomeIcon icon={ faPhone } size={ '2x' }/> }
                            />
                            <a href={ 'mailto:info@saim-mobilephysio.de' }
                               rel={ 'noopener noreferrer' }
                               aria-label={ 'E-Mail Adresse' }
                               children={ <FontAwesomeIcon icon={ faEnvelope } size={ '2x' }/> }
                            />
                        </div>
                    </div>
                </div>
                <div className={ styles.right }/>
            </header>
        </>
    );
};
