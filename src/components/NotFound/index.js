import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotFoundComponent extends Component {
    render() {
        return (
            <div>
                Not Found
            </div>
        );
    }
}

NotFoundComponent.propTypes = {
    check: PropTypes.bool.isRequired
};

export default NotFoundComponent;