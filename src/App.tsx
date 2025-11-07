import React, { type ReactElement } from 'react';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

interface AppProps {
  route: string;
}

export default function App({ route }: AppProps): ReactElement {
  switch (route) {
    case '/':
      return <Home />;
    case '/privacy':
      return <Privacy />;
    case '/terms':
      return <Terms />;
    default:
      return <Home />;
  }
}
