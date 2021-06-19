import React from "react";
import styles from '../styles/components/Form.module.css'
import PDF from "../media/Anmeldung_2019.pdf";

const Form = props => {
    return (
        <>
            <div style={{padding: '0 4rem', marginBottom: '3rem'}}>
                <p style={{color: 'black'}}>
                    <b>Füllen Sie vor Ihrer ersten Behandlung bitte das
                        <a style={{color: 'black'}}
                           href={PDF} target={'_blank'} rel={"noopener noreferrer"}
                           aria-label={"Anmeldeformular in PDF Format"}>
                            <i><u>Anmeldeformular</u></i>
                        </a> aus.
                    </b>
                </p>
                <p style={{color: 'black'}}>
                    <b>
                        Sie können auch gernedas Kontakformular unten ausfüllen:
                    </b>
                </p>
            </div>
            <div className={styles.container}>
                <div className={styles.login_box}>
                    <h2>Anmeldeformular</h2>
                    <form name="contact" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact"/>
                        <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '1.5rem'}}>
                            <div style={{display: 'flex'}}>
                                <input type="radio" name="rezept" id='mit' required={true}/>
                                <label style={{color: 'white'}}>mit Rezept</label>
                            </div>
                            <div style={{display: 'flex'}}>
                                <input type="radio" name="rezept" id='ohne' required={true}/>
                                <label style={{color: 'white'}}>ohne Rezept</label>
                            </div>
                        </div>
                        <div className={styles.user_box}>
                            <input type="text" name="name" required={true}/>
                            <label>Vorname/Name</label>
                        </div>
                        <div className={styles.user_box}>
                            <input type="text" name="birthday" required={true}/>
                            <label>Geb. Datum</label>
                        </div>
                        <div className={styles.user_box}>
                            <input type="tel" name="phone" required={true}/>
                            <label>Telefon</label>
                        </div>
                        <div className={styles.user_box}>
                            <input type="email" name="email" required={true}/>
                            <label>email</label>
                        </div>
                        <div className={styles.user_box}>
                            <input type="text" name="zip" required={true}/>
                            <label>PLZ/Ort</label>
                        </div>
                        <div className={styles.user_box}>
                            <input type="text" name="address" required={true}/>
                            <label>Straße/Hausnummer</label>
                        </div>
                        <div>
                            <label style={{color: 'white'}}>Ihre Nachricht</label>
                            <textarea name="message" required={false} rows={10}
                                      style={{width: '100%', marginTop: '1rem'}}/>
                        </div>
                        <button type="submit">Senden</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;