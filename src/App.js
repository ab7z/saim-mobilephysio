import React from 'react';
import './styles/App.css';
import LogRocket from "logrocket";
import * as Sentry from "@sentry/browser";
import {HashRouter, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

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
        <HashRouter>
            <Route exact path={"/"}>
                <Home/>
            </Route>
            <Route path={"/privacy"}>
                <Privacy/>
            </Route>
            <Route path={"/terms"}>
                <Terms/>
            </Route>
        </HashRouter>
    );
}

export default App;
