import React from 'react';
import './App.css';
import LogRocket from "logrocket";
import * as Sentry from "@sentry/browser";


function App() {
    if (process.env.NODE_ENV === 'production') {
        LogRocket.init('s3mkoe/saim-mobilephysio');
        LogRocket.getSessionURL(sessionURL => {
            Sentry.configureScope(scope => {
                scope.setExtra("sessionURL", sessionURL);
            });
        });
    }

    return (
        <div className="App">
            <nav className={'nav'}>
                <div className={'navWrapper'}>
                    <a href="#home">Home</a>
                    <a href="#intro">Intro</a>
                    <a href="#services">Leistungen</a>
                    <a href="#prices">Preise</a>
                    <a href="#contact">Kontakt</a>
                </div>
            </nav>
            <header className={'header'} id={'home'}>
                <div className={'headerContainer'}>
                    <div className={'headerWrapper'}>
                        <div className={'headerContent'}>
                            <h1><span>Saim</span>Mobile Physiotherapie</h1>
                            <hr/>
                            <div className={'headerParagraph'}>
                                <p>{new Date().getFullYear() - 1999} Jahre Erfahrung</p>
                                <p>Faranak Nokhbehzaeem</p>
                            </div>
                        </div>
                        <picture className={'picture'}>
                            <source srcSet={require('./img/faranak.webp')} type={'image/webp'}/>
                            <source srcSet={require('./img/faranak.png')} type={'image/png'}/>
                            <img src={require('./img/faranak.png')} alt=""/>
                        </picture>
                    </div>
                </div>
            </header>
            <section className={'intro'} id={'intro'}>

            </section>
        </div>
    );
}

export default App;
