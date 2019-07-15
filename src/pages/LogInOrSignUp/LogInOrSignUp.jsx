import React from 'react'
import PropTypes from 'prop-types'
import {Header, Grid} from 'semantic-ui-react';
import LoginPage from '../LoginPage/LoginPage'
import SignUpPage from '../SignUpPage/SignUpPage'


class SignUpLogInPage extends React.Component {
  render () {
    return(
      <div>
        <Header as="h1" textAlign='center'>
          Sign up or Log In
        </Header>
          <Grid verticalAlign='middle' columns={2}  padded divided>
            <Grid.Row >
            </Grid.Row>
          <Grid.Row>
          <Grid.Column>
            <SignUpPage />
          </Grid.Column>
          <Grid.Column>
            <LoginPage />
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default SignUpLogInPage;
