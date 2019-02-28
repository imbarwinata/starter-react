import React from "react";
import ReactDOM from "react-dom";

// Required for Redux store setup
import { Provider } from "react-redux";
import configureStore from "./store";

// Required for router setup
import { Router, Route } from 'react-router-dom';
import history from './utils/history';
import Home from './containers/Home';
import Login from './containers/Login';
import NotFound from './containers/NotFound';

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// Register service worker for PWA
serviceWorker.register();