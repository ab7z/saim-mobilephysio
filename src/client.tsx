import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';

const route = window.location.pathname;
const root = document.getElementById('root');

if (root) {
  hydrateRoot(root, <App route={route} />);
}
