import React from 'react';
import './styles/App.css';
import LogRocket from "logrocket";
import * as Sentry from "@sentry/browser";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Services from "./components/Services";


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
        <React.Fragment>
            <Header/>
            <Intro/>
            <Services/>
        </React.Fragment>
    );
}

export default App;
