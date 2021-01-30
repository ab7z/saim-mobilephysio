import React, { useState } from 'react';
import './styles/App.css';
import LogRocket from "logrocket";
import * as Sentry from "@sentry/browser";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
    const [isWebpEnable, setIsWebpEnable] = useState(false);

    if (process.env.NODE_ENV === 'production') {
        LogRocket.init('s3mkoe/saim-mobilephysio');
        LogRocket.getSessionURL(sessionURL => {
            Sentry.configureScope(scope => {
                scope.setExtra("sessionURL", sessionURL);
            });
        });
    }

    const check_webp_feature = callback => {
        let lossless = "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
            img = new Image();

        img.onload = function () {
            callback((img.width > 0) && (img.height > 0));
        };
        img.onerror = function () {
            callback(false);
        };

        img.src = "data:image/webp;base64," + lossless;
    };

    const setWebpFunctionality = (bool) => {
        setIsWebpEnable(bool);
    };

    check_webp_feature(setWebpFunctionality);

    return (
        <BrowserRouter>
            <div className={ "App" }>
                <Switch>
                    <Route exact={ true } path={ "/" }
                        render={ (props) => <Home { ...props } isWebpEnable={ isWebpEnable } /> }
                    />
                    <Route exact={ true } path={ "/privacy" }>
                        <Privacy />
                    </Route>
                    <Route exact={ true } path={ "/terms" }>
                        <Terms />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
