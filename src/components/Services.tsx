import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

export default function Services() {
    return (
        <section className="services" id="services">
            <div className="left">
                <img
                    src="/service.webp"
                    alt="Professionelle Massage-Behandlung bei Saim Mobile Physiotherapie"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover'
                    }}
                />
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2 className="heading">Leistungen</h2>
                    <div className="description">
                        <ul className="information" aria-label="Physiotherapie Leistungen">
                            <li>Manuelle Therapie (MT)</li>
                            <li>Physiotherapie</li>
                            <li>Manuelle Lymphdrainage (MLD)</li>
                            <li>Atemtherapie</li>
                            <li>Migränetherapie</li>
                            <li>Akupressur</li>
                            <li>Beckenboden- & Rückentraining</li>
                        </ul>
                        <ul className="information" aria-label="Weitere Leistungen">
                            <li>Koordination-, Ausdauer- & Krafttraining</li>
                            <li>Wellnessbehandlungen (Gesicht & Dekolleté)</li>
                            <li>Kinesiologische Tapetechniken</li>
                            <li>Massage</li>
                            <li>Ozontherapie (Hochfrequenztherapie) <sup>*</sup></li>
                            <li>Plasma-One-Therapie <sup>*</sup></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <p>Nimm Kontakt auf</p>
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
                    <p className="additionalInfo">
                        <sup>*</sup> 30 minütige Behandlung wird als volle Stunde abgerechnet
                    </p>
                </div>
            </div>
        </section>
    );
}
