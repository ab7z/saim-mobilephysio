import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import App from './App';

// Prevent FontAwesome from adding its CSS since we're including it manually
config.autoAddCss = false;

const route = window.location.pathname;
const root = document.getElementById('root');

if (root) {
  hydrateRoot(root, <App route={route} />);
}
