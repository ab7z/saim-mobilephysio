import React from 'react';

export default function Navbar() {
    const scroll = (id: string) => {
        const element = document.querySelector('#' + id);
        if (element) {
            let y = element.getBoundingClientRect().top + window.scrollY;
            if (id === 'intro') y -= 100;
            window.scrollTo({ left: 0, top: y, behavior: 'smooth' });
        }
    };

    return (
        <nav className="nav" aria-label="Hauptnavigation">
            <ul className="ul">
                <li className="li">
                    <img
                        src="/logo.svg"
                        alt="Saim Mobilephysio Logo"
                        width={50}
                        height={50}
                    />
                </li>
                <li>
                    <button
                        className="li"
                        onClick={() => scroll('home')}
                        type="button"
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button
                        className="li"
                        onClick={() => scroll('intro')}
                        type="button"
                    >
                        Über mich
                    </button>
                </li>
                <li>
                    <button
                        className="li"
                        onClick={() => scroll('services')}
                        type="button"
                    >
                        Leistungen
                    </button>
                </li>
                <li>
                    <button
                        className="li"
                        onClick={() => scroll('prices')}
                        type="button"
                    >
                        Preise
                    </button>
                </li>
                <li>
                    <button
                        className="li"
                        onClick={() => scroll('contact')}
                        type="button"
                    >
                        Kontakt
                    </button>
                </li>
            </ul>
        </nav>
    );
}
