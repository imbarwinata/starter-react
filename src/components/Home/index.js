import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <FormattedMessage id="Home.title"/>                
            </div>
        );
    }
}

HomeComponent.propTypes = {
    check: PropTypes.bool.isRequired
};

export default HomeComponent;