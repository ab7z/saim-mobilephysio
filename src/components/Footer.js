import React from "react";
import styles from "../styles/components/Footer.module.css";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className={styles.footer}>
                <div className={styles.copyRight}>
                    <p>&copy; {new Date().getFullYear()} Saim Mobilephysio</p>
                </div>
                <div className={styles.links}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/terms'}>Impressum</Link>
                    <Link to={'/privacy'}>Datenschutz</Link>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;