import { useState } from 'react';
import styles from '../styles/components/Form.module.css';

export default function Form() {
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [rezept, setRezept] = useState('mit');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const formData = new FormData(event.target);
            const response = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            });

            if (response.ok) {
                setSubmitStatus('success');
                event.target.reset();
                setRezept('mit');
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={ styles.section } id="anmeldung" aria-labelledby="form-title">
            <header className={ styles.head }>
                <div>
                    <div className={ styles.numTag }>Anmeldung</div>
                </div>
                <div>
                    <h2 id="form-title" className={ styles.title }>
                        Termin <span className={ styles.accent }>anfragen.</span>
                    </h2>
                    <p className={ styles.sub }>
                        Schreiben Sie mir kurz, was Sie brauchen — ich melde mich in der Regel
                        innerhalb eines Werktages.
                    </p>
                </div>
            </header>
            <div className={ styles.grid }>
                <aside className={ styles.aside }>
                    <a href="tel:+4915785908915" className={ styles.infoCard }>
                        <div className={ styles.infoLbl }>Telefon</div>
                        <div className={ styles.infoVal }>+49 157 85 90 8915</div>
                    </a>
                    <a href="mailto:info@saim-mobilephysio.de" className={ styles.infoCard }>
                        <div className={ styles.infoLbl }>E-Mail</div>
                        <div className={ styles.infoVal }>info@saim-mobilephysio.de</div>
                    </a>
                    <div className={ `${ styles.infoCard } ${ styles.highlight }` }>
                        <div className={ styles.infoLbl }>Antwortzeit</div>
                        <div className={ styles.infoVal }>≤ 24 Stunden</div>
                    </div>
                </aside>
                <div className={ styles.card }>
                    <form
                        name="contact"
                        className={ styles.form }
                        onSubmit={ handleFormSubmit }
                    >
                        <input type="hidden" name="form-name" value="contact"/>

                        { submitStatus === 'success' && (
                            <div role="alert" className={ styles.successMessage } aria-live="polite">
                                Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                            </div>
                        ) }
                        { submitStatus === 'error' && (
                            <div role="alert" className={ styles.errorMessage } aria-live="polite">
                                Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen
                                Sie es erneut oder kontaktieren Sie uns direkt.
                            </div>
                        ) }

                        <fieldset className={ styles.toggle }>
                            <legend className={ styles.legend }>Haben Sie ein Rezept?</legend>
                            <label className={ rezept === 'mit' ? styles.toggleActive : '' }>
                                <input
                                    type="radio"
                                    name="rezept"
                                    value="mit"
                                    checked={ rezept === 'mit' }
                                    onChange={ () => setRezept('mit') }
                                    required
                                />
                                <span className={ styles.check } aria-hidden="true"/>
                                Mit Rezept
                            </label>
                            <label className={ rezept === 'ohne' ? styles.toggleActive : '' }>
                                <input
                                    type="radio"
                                    name="rezept"
                                    value="ohne"
                                    checked={ rezept === 'ohne' }
                                    onChange={ () => setRezept('ohne') }
                                    required
                                />
                                <span className={ styles.check } aria-hidden="true"/>
                                Ohne Rezept (präventiv)
                            </label>
                        </fieldset>

                        <div className={ styles.field }>
                            <label htmlFor="name">Vorname / Name</label>
                            <input
                                type="text" name="name" id="name" required
                                autoComplete="name" aria-required="true"
                                placeholder="Maria Mustermann"
                            />
                        </div>
                        <div className={ styles.field }>
                            <label htmlFor="birthday">Geb.-Datum</label>
                            <input
                                type="text" name="birthday" id="birthday" required
                                placeholder="TT.MM.JJJJ"
                                pattern="\d{2}\.\d{2}\.\d{4}"
                                autoComplete="bday"
                                aria-required="true"
                                aria-describedby="birthday-hint"
                            />
                            <span id="birthday-hint" className={ styles.hint }>Format: TT.MM.JJJJ</span>
                        </div>
                        <div className={ styles.field }>
                            <label htmlFor="phone">Telefon</label>
                            <input
                                type="tel" name="phone" id="phone" required
                                autoComplete="tel" aria-required="true"
                                placeholder="+49 …"
                            />
                        </div>
                        <div className={ styles.field }>
                            <label htmlFor="email">E-Mail</label>
                            <input
                                type="email" name="email" id="email" required
                                autoComplete="email" aria-required="true"
                                placeholder="ihre@email.de"
                            />
                        </div>
                        <div className={ styles.field }>
                            <label htmlFor="zip">PLZ / Ort</label>
                            <input
                                type="text" name="zip" id="zip" required
                                autoComplete="postal-code" aria-required="true"
                                placeholder="53757 Sankt Augustin"
                            />
                        </div>
                        <div className={ styles.field }>
                            <label htmlFor="address">Straße / Hausnummer</label>
                            <input
                                type="text" name="address" id="address" required
                                autoComplete="street-address" aria-required="true"
                                placeholder="Beispielstraße 12"
                            />
                        </div>
                        <div className={ `${ styles.field } ${ styles.full }` }>
                            <label htmlFor="message">Ihre Nachricht (optional)</label>
                            <textarea
                                name="message" id="message"
                                placeholder="Worum geht es? Beschwerden, Wünsche, Termin­vorlieben …"
                                aria-label="Ihre Nachricht an uns"
                            />
                        </div>
                        <div className={ styles.submit }>
                            <button type="submit" disabled={ isSubmitting }>
                                { isSubmitting ? 'Wird gesendet…' : 'Anfrage senden' }
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                    <path d="M2 7h10m-4-4l4 4-4 4" stroke="currentColor"
                                          strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <small>
                                Mit dem Absenden bestätigen Sie, dass Sie meine
                                Datenschutz­erklärung gelesen haben.
                            </small>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
