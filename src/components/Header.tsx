import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import Navbar from './Navbar';

export default function Header() {
    return (
        <header className="wrapper" id="home">
            <div className="left">
                <div className="svg" aria-hidden="true" />
                <div className="container">
                    <Navbar />
                    <div className="helper">
                        <h1 className="h1">
                            Saim Mobile Physiotherapie
                        </h1>
                        <h2 className="h2">
                            Privat
                        </h2>
                        <div className="subHeading">
                            <div>
                                <p>{new Date().getFullYear() - 1999} Jahre Berufserfahrung</p>
                            </div>
                            <div>
                                <p>
                                    Staatlich anerkannte Manualtherapeutin, Physiotherapeutin,
                                    Ödemtherapeutin und Personal Trainerin
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="icons">
                        <a
                            href="tel:+4915785908915"
                            rel="noopener noreferrer"
                            aria-label="Anrufen unter 0157 85908915"
                        >
                            <FontAwesomeIcon icon={faPhone} size="2x" aria-hidden="true" />
                        </a>
                        <a
                            href="mailto:info@saim-mobilephysio.de"
                            rel="noopener noreferrer"
                            aria-label="E-Mail senden an info@saim-mobilephysio.de"
                        >
                            <FontAwesomeIcon icon={faEnvelope} size="2x" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="right">
                <img
                    src="/f.webp"
                    alt="Faranak Nokhbehzaeem, Physiotherapeutin bei Saim Mobile Physiotherapie"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        background: 'transparent'
                    }}
                />
            </div>
        </header>
    );
}
