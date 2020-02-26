import React from "react";
import styles from '../styles/components/Prices.module.css';
import PDF from '../media/Anmeldung_2019.pdf';

const Prices = () => {
    return (
        <React.Fragment>
            <section className={styles.prices} id={'prices'}>
                <div className={styles.wrapper}>
                    <h2 className={styles.heading}>Preise &mdash; 120€ pro 60 Minuten</h2>
                    <div>
                        <p className={styles.p}>Ich bin eine Privat­praxis und habe keinen Vertrag mit einer
                            gesetz­lichen Kranken­kas­se.
                            Ich stelle meine Rech­nung direkt an Sie als Patient und Sie reichen diese an Ihre private
                            Kran­ken­ver­sich­erung (PKV) zur Er­stat­tung weiter. Ihre Ver­sicher­ung er­stat­tet
                            ent­spre­chend die ver­ord­neten Kosten.
                        </p>
                        <p>Die The­rapie­dauer be­trägt 60 Minuten.</p>
                    </div>
                    <div className={styles.pricing}>
                        <p>Es gibt zwei Mög­lich­kei­ten:</p>
                        <div>
                            <div className={[styles.rect, styles.effect5].join(' ')}>
                                <p>Im Normal­fall (Be­hand­lung aufgrund einer Krank­heit) legen Sie mir ein Rezept von
                                    Ihrem Arzt vor. Der Preis pro The­rapie­sit­zung (60 Minuten) be­trägt in diesem
                                    Fall <b>120€</b>. Mehrwertsteuer fällt nicht an.</p>
                            </div>
                            <div className={[styles.rect, styles.effect5].join(' ')}>
                                <p>Wenn Sie keine Beschwerden haben, sondern präventiv (ohne ärztliche Verordnung) von
                                    mir behandelt werden möchten, liegt der Preis bei <b>140€</b> inkl. Mehrwertsteuer.</p>
                            </div>
                        </div>
                        <p>Zu­sätz­liche Kosten für An- und Ab­fahrt be­rech­ne ich nicht.</p>
                    </div>
                    <div>
                        <p><b>Füllen Sie vor Ihrer ersten Behandlung bitte das <a href={PDF}
                                                                                  target={'_blank'}
                                                                                  rel={"noopener noreferrer"}
                                                                                  aria-label={"Anmeldeformular in PDF Format"}><i><u>Anmeldeformular</u></i></a> aus.
                        </b></p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Prices;