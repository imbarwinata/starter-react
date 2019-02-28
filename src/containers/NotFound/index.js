import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import NotFoundComponent from '../../components/NotFound';

class NotFound extends React.Component {
    render() {
      return(
        <article>
          <Helmet>
              <title>NotFound | Test React Helmet</title>
              <meta
                name="description"
                content="React Starter NotFoundpage"
              />
            </Helmet>
            
            <NotFoundComponent {...this.props}/>
        </article>
      );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    check: true
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: () => {
      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);