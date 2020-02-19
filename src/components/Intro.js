import React from "react";
import styles from '../styles/components/Intro.module.css';

const Intro = () => {
    return (
        <React.Fragment>
            <section className={styles.intro} id={'intro'}>
                <div className={styles.wrapper}>
                    <div className={styles.heading}>
                        <h2>Über meine Person</h2>
                    </div>
                    <div className={styles.desc1}>
                        <p>Die Ausbildung zur
                            Physiotherapeutin habe ich im Iran (mit 6 Jahre Berufserfahrung) und anschließend
                            noch einmal in Deutschland abgeschlossen.</p>
                    </div>
                    <div className={styles.desc2}>
                        <p>Seitdem arbeite ich ununterbrochen in Festanstellung. Seit Januar 2018 biete ich meine
                            Dienstleistung nebenberuflich auch selbstständig an.</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Intro;