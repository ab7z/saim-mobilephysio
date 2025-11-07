import React from 'react';

export default function Intro() {
    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - 2011;

    return (
        <section className="intro" id="intro">
            <div className="wrapper">
                <div className="heading">
                    <h2>Über meine Person</h2>
                </div>
                <div className="desc1">
                    <p className="p">
                        Staatlich anerkannte Manualtherapeutin, Physiotherapeutin,
                        Personaltrainerin, Ödem–Therapeutin, Kosmetikerin und Friseurin. Die
                        Ausbildung zur Physiotherapeutin habe ich in Deutschland (2011) mit {experienceYears} Jahren
                        Berufserfahrung und zuvor im Iran abgeschlossen, wo ich 6 Jahre Berufserfahrung
                        sammeln konnte und zusätzlich mit folgenden Zusatz-Fortbildungen abgerundet:
                    </p>
                    <ul>
                        <li className="li">Manuelle Therapie</li>
                        <li className="li">Manuelle Lymphdrainage</li>
                        <li className="li">Krankengymnastik</li>
                        <li className="li">Vibrafittraining</li>
                        <li className="li">Kinesiologische Tapetechniken</li>
                    </ul>
                </div>
                <div className="desc2">
                    <p className="p">
                        Seitdem arbeite ich ununterbrochen in Festanstellung und biete meine Dienstleistung
                        nebenberuflich auch selbstständig an. Meine Fachkenntnisse im Krankenhausbereich,
                        Teilnehme an Operationen gliedern sich durch:
                    </p>
                    <ul>
                        <li className="li">
                            Helios Klinikum Siegburg in den Abteilungen Chirurgie, Innere Medizin und
                            Kardiologie
                        </li>
                        <li className="li">
                            Sankt Josef Hospital in Bonn in den Abteilungen Orthopädie, Chirurgie und
                            Rückenschmerz
                        </li>
                        <li className="li">
                            und Elisabeth Krankenhaus in Bonn in den Abteilungen Geriatrie und Gynäkologie.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
