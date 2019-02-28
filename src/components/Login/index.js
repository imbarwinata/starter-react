import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginComponent extends Component {
    render() {
        return (
            <div>
                Login Page
            </div>
        );
    }
}

LoginComponent.propTypes = {
    check: PropTypes.bool.isRequired
};

export default LoginComponent;