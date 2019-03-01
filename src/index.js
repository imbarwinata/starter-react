import React from "react";
import ReactDOM from "react-dom";

// Required for Redux store setup
import { Provider } from "react-redux";
import configureStore from "./store";

// Required for router setup
import AppRouter from 'routers';

// Setup global style
import './sass/main.scss';

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={configureStore()}>
    <AppRouter/>
  </Provider>,
  document.getElementById("root")
);

// Register service worker for PWA
serviceWorker.register();