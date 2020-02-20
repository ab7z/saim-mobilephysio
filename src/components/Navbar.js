import React from "react";
import styles from '../styles/components/Navbar.module.css';

const Navbar = () => {

    /**
     *
     * @param {string} id
     */
    const scroll = (id) => {
        let y = document.querySelector('#' + id).offsetTop;
        if (id === 'intro') y -= 100;
        window.scrollTo({left: 0, top: y, behavior: "smooth"});
    };

    return (
        <React.Fragment>
            <nav className={styles.nav}>
                <img src={require('../img/logo.svg')} alt="logo" width={50} height={50}/>
                <li onClick={() => {
                    scroll('home')
                }}>Home
                </li>
                <li onClick={() => {
                    scroll('intro')
                }}>Über mich
                </li>
                <li onClick={() => {
                    scroll('services')
                }}>Leistungen
                </li>
                <li onClick={() => {
                    scroll('prices')
                }}>Preise
                </li>
                <li onClick={() => {
                    scroll('contact')
                }}>Kontakt
                </li>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;