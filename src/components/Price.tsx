export default function Price() {
    return (
        <section className="prices" id="prices">
            <div className="wrapper">
                <h2 className="heading">Preise &mdash; 170€ pro 60 Minuten</h2>
                <div>
                    <p className="p">
                        Ich bin eine Privatpraxis und habe keinen Vertrag mit einer gesetzlichen
                        Krankenkasse. Ich stelle meine Rechnung direkt an Sie als Patient und Sie reichen
                        diese an Ihre private Krankenversicherung (PKV) zur Erstattung weiter. Ihre
                        Versicherung erstattet entsprechend die verordneten Kosten.
                    </p>
                    <p>Die Therapiedauer beträgt 60 Minuten.</p>
                </div>
                <div className="pricing">
                    <p>Es gibt zwei Möglichkeiten:</p>
                    <div>
                        <div className="rect effect5">
                            <p>
                                Im Normalfall (Behandlung aufgrund einer Krankheit) legen Sie mir ein Rezept von
                                Ihrem Arzt vor. Der Preis pro Therapiesitzung (60 Minuten) beträgt in diesem
                                Fall <b>170€</b>. Mehrwertsteuer fällt nicht an.
                            </p>
                        </div>
                        <div className="rect effect5">
                            <p>
                                Wenn Sie keine Beschwerden haben, sondern präventiv (ohne ärztliche Verordnung) von
                                mir behandelt werden möchten, liegt der Preis bei <b>190€</b> inkl. Mehrwertsteuer.
                            </p>
                        </div>
                    </div>
                </div>

                <img
                    src="/preisliste.webp"
                    width={1906}
                    height={2040}
                    alt="Detaillierte Preisliste für Physiotherapie-Leistungen mit ärztlichem Rezept (170€) und ohne Rezept (190€) pro 60-minütiger Behandlung"
                    className="list"
                />
            </div>
        </section>
    );
}
