import React from 'react';
import styles from '../styles/components/Header.module.css';

const Header = () => {
    return (
        <React.Fragment>
            <header className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.svg}/>
                    <div className={styles.container}>
                        <nav></nav>
                        <h1 children={"Saim Mobile Physiotherapie"}
                            className={styles.h1}
                        />
                        <h2 children={"Privatpatienten"}
                            className={styles.h2}
                        />
                        <div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}/>
            </header>
        </React.Fragment>
    )
};

export default Header;