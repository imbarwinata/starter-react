import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomeComponent extends Component {
    render() {
        return (
            <div>
                Home Page
            </div>
        );
    }
}

HomeComponent.propTypes = {
    check: PropTypes.bool.isRequired
};

export default HomeComponent;