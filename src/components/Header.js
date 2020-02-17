import React from 'react';
import styles from '../styles/components/Header.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";

const Header = () => {
    return (
        <React.Fragment>
            <header className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.svg}/>
                    <div className={styles.container}>
                        <nav className={styles.nav}>
                            <img src={require('../img/logo.svg')} alt="logo" width={50} height={50}/>
                            <a href="">Home</a>
                            <a href="">Über mich</a>
                            <a href="">Leistungen</a>
                            <a href="">Preise</a>
                            <a href="">Kontakt</a>
                        </nav>
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
                        <div className={styles.icons}>
                            <a><FontAwesomeIcon icon={faPhone} size={'2x'}/></a>
                            <a><FontAwesomeIcon icon={faEnvelope} size={'2x'}/></a>
                        </div>
                    </div>
                </div>
                <div className={styles.right}/>
            </header>
        </React.Fragment>
    )
};

export default Header;