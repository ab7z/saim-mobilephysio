import { useState } from 'react';

export default function Form() {
    const [submitStatus, setSubmitStatus] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const formData = new FormData(event.currentTarget);
            const response = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as any).toString(),
            });

            if (response.ok) {
                setSubmitStatus('success');
                event.currentTarget.reset();
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
        <>
            <div style={{ padding: '0 4rem', marginBottom: '3rem' }}>
                <p style={{ color: 'black' }}>
                    <b>Sie können gerne das Kontakformular unten ausfüllen:</b>
                </p>
            </div>
            <div className="container">
                <div className="login_box">
                    <h2>Anmeldeformular</h2>
                    <form name="contact" onSubmit={handleFormSubmit}>
                        <input type="hidden" name="form-name" value="contact" />

                        {submitStatus === 'success' && (
                            <div role="alert" className="successMessage" aria-live="polite">
                                Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div role="alert" className="errorMessage" aria-live="polite">
                                Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
                            </div>
                        )}

                        <fieldset className="radioFieldset">
                            <legend className="radioLegend">Haben Sie ein Rezept?</legend>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <input type="radio" name="rezept" id="mit" value="mit" required />
                                    <label htmlFor="mit" style={{ color: 'white', marginLeft: '0.5rem' }}>
                                        mit Rezept
                                    </label>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <input type="radio" name="rezept" id="ohne" value="ohne" required />
                                    <label htmlFor="ohne" style={{ color: 'white', marginLeft: '0.5rem' }}>
                                        ohne Rezept
                                    </label>
                                </div>
                            </div>
                        </fieldset>

                        <div className="user_box">
                            <input type="text" name="name" id="name" required autoComplete="name" aria-required="true" />
                            <label htmlFor="name">Vorname/Name</label>
                        </div>
                        <div className="user_box">
                            <input
                                type="text"
                                name="birthday"
                                id="birthday"
                                required
                                placeholder="TT.MM.JJJJ"
                                pattern="\d{2}\.\d{2}\.\d{4}"
                                autoComplete="bday"
                                aria-required="true"
                                aria-describedby="birthday-hint"
                            />
                            <label htmlFor="birthday">Geb. Datum</label>
                            <span id="birthday-hint" className="hint">Format: TT.MM.JJJJ</span>
                        </div>
                        <div className="user_box">
                            <input type="tel" name="phone" id="phone" required autoComplete="tel" aria-required="true" />
                            <label htmlFor="phone">Telefon</label>
                        </div>
                        <div className="user_box">
                            <input type="email" name="email" id="email" required autoComplete="email" aria-required="true" />
                            <label htmlFor="email">E-Mail</label>
                        </div>
                        <div className="user_box">
                            <input type="text" name="zip" id="zip" required autoComplete="postal-code" aria-required="true" />
                            <label htmlFor="zip">PLZ/Ort</label>
                        </div>
                        <div className="user_box">
                            <input type="text" name="address" id="address" required autoComplete="street-address" aria-required="true" />
                            <label htmlFor="address">Straße/Hausnummer</label>
                        </div>
                        <div>
                            <label htmlFor="message" style={{ color: 'white' }}>Ihre Nachricht (optional)</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={10}
                                style={{ width: '100%', marginTop: '1rem' }}
                                aria-label="Ihre Nachricht an uns"
                            />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Wird gesendet...' : 'Senden'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
