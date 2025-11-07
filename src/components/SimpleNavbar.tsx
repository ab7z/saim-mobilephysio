import React from 'react';

export default function SimpleNavbar() {
    return (
        <nav className="nav">
            <ul className="ul">
                <li className="li">
                    <a href="/">
                        <img
                            src="/logo.svg"
                            alt="logo"
                            width={50}
                            height={50}
                        />
                    </a>
                </li>
                <li className="li">
                    <a href="/" aria-label="Home">
                        Home
                    </a>
                </li>
                <li className="li">
                    <a href="/#intro" aria-label="Über mich">
                        Über mich
                    </a>
                </li>
                <li className="li">
                    <a href="/#services" aria-label="Leistungen">
                        Leistungen
                    </a>
                </li>
                <li className="li">
                    <a href="/#prices" aria-label="Preise">
                        Preise
                    </a>
                </li>
                <li className="li">
                    <a href="/#contact" aria-label="Kontakt">
                        Kontakt
                    </a>
                </li>
            </ul>
        </nav>
    );
}
