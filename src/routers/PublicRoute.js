import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import PropTypes from 'prop-types';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      (
        <div>
            <h1>Public Route</h1>
            <Component {...props} />
        </div>
      )
    }
  />
);

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: true
});

export default connect(mapStateToProps)(PublicRoute);