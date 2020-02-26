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
                        <p className={styles.p}>Staat­lich an­erkan­nte Manual­thera­peutin, Phy­sio­thera­peutin,
                            Per­sonal­train­erin,
                            Ödem–Thera­peutin, Kos­metik­erin und Friseurin. Die Ausbildung zur
                            Physiotherapeutin habe ich im Iran (mit 6 Jahre Berufserfahrung) und anschließend
                            noch einmal in Deutschland abgeschlossen und mit folgenden Zusatz-Fortbildungen abgerundet:
                        </p>
                        <ul>
                            <li className={styles.li}>Manu­elle Thera­pie</li>
                            <li className={styles.li}>Manuelle Lym­phdrainage</li>
                            <li className={styles.li}>Kranken­gym­nastik</li>
                            <li className={styles.li}>Vibra­fit­training</li>
                            <li className={styles.li}>Kine­sio­log­ische Tape­tech­niken</li>
                        </ul>
                    </div>
                    <div className={styles.desc2}>
                        <p className={styles.p}>Seitdem arbeite ich ununterbrochen in Festanstellung und biete meine
                            Dienstleistung nebenberuflich auch selbstständig an. Meine Fach­ken­ntnis­se im
                            Krankenhausbereich, Teilnehme an Operationen gliedern sich durch:
                        </p>
                        <ul>
                            <li className={styles.li}>Helios Klinikum Siegburg in den Abteilungen Chirurgie, Innere
                                Medizin und
                                Kardiologie
                            </li>
                            <li className={styles.li}>Sankt Josef Hospital in Bonn in den Abteilungen Orthopädie,
                                Chirurgie und
                                Rücken­schmerz
                            </li>
                            <li className={styles.li}>und Elisabeth Krankenhaus in Bonn in den Abteilungen Geriatrie
                                    und Gynäkologie.
                                </li>
                            </ul>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Intro;