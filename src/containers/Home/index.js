import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import HomeComponent from 'components/Home';
import * as Sentry from '@sentry/browser';

class Home extends React.Component {
    render() {
      // Example Use Log Sentry
      Sentry.captureException("Test Error 2");
      
      return(
        <article>
          <Helmet>
              <title>Home | Test React Helmet</title>
              <meta
                name="description"
                content="React Starter homepage"
              />
            </Helmet>
            
            <HomeComponent {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);