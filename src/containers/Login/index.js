import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import LoginComponent from '../../components/Login';

class Login extends React.Component {
    render() {
      return(
        <article>
          <Helmet>
              <title>Login | Test React Helmet</title>
              <meta
                name="description"
                content="React Starter Loginpage"
              />
            </Helmet>
            
            <LoginComponent {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);