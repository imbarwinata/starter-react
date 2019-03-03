import React from "react";
import ReactDOM from "react-dom";

// Required for Log Sentry setup
import * as Sentry from '@sentry/browser';

// Required for Redux store setup
import { Provider } from "react-redux";
import configureStore from "./store";

// Required for router setup
import AppRouter from 'routers';

// Setup global style
import './sass/main.scss';

import * as serviceWorker from "./serviceWorker";

// Setup Log Sentry
Sentry.init({
  dsn: "https://f158d23019e44ca6b28703ecee9e88af@sentry.io/1406778"
});

ReactDOM.render(
  <Provider store={configureStore()}>
    <AppRouter/>
  </Provider>,
  document.getElementById("root")
);

// Register service worker for PWA
serviceWorker.register();