import React from 'react';
import styles from '../styles/components/Header.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import Navbar from "./Navbar";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.wrapper} id={'home'}>
                <div className={styles.left}>
                    <div className={styles.svg}/>
                    <div className={styles.container}>
                        <Navbar/>
                        <div className={styles.helper}>
                            <h1 children={"Saim Mobile Physiotherapie"}
                                className={styles.h1}
                            />
                            <h2 children={"Privat"}
                                className={styles.h2}
                            />
                            <div className={styles.subHeading}>
                                <div>
                                    <p>{new Date().getFullYear() - 1999} Jahre Berufserfahrung</p>
                                </div>
                                <div>
                                    <p>Staatlich anerkannte Manualtherapeutin, Physiotherapeutin, Ödemtherapeutin und
                                        Personal Trainerin</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.icons}>
                            <a href={"tel:+4915785908915"} rel={"noopener noreferrer"}
                               aria-label={"Telefonnummer"}><FontAwesomeIcon icon={faPhone} size={'2x'}/></a>
                            <a href={'mailto:info@saim-mobilephysio.de'} rel={"noopener noreferrer"}
                               aria-label={"E-Mail Adresse"}><FontAwesomeIcon icon={faEnvelope}
                                                                              size={'2x'}/></a>
                        </div>
                    </div>
                </div>
                <div className={[styles.right, (props.isWebpEnable ? styles.right_webp : styles.right_jp2)].join(' ')}/>
            </header>
        </React.Fragment>
    )
};

export default Header;