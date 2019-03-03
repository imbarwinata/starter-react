import React from 'react';
// Required for routers setup
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
// List of Containers
import Home from 'containers/Home';
import Login from 'containers/Login';
import NotFound from 'containers/NotFound';

const AppRouter = () => (
  <Router history={history}>
    <div>
    <Switch>
        <PrivateRoute path="/" component={Home} exact={true} />
        <PublicRoute path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;