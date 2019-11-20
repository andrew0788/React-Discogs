import React from 'react'
import {Header, Grid} from 'semantic-ui-react';
import LoginPage from '../LoginPage/LoginPage'
import SignUpPage from '../SignUpPage/SignUpPage'


class SignUpLogInPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {message: ''};
  }

  render () {
    return(
      <div>
        <Header as="h1" textAlign='center'>
          Sign up or Log In
        </Header>
          <Grid verticalAlign='center' columns={2}  padded divided>
            <Grid.Row >
            </Grid.Row>
          <Grid.Row>
          <Grid.Column>
            <SignUpPage {...this.props} updateMessage={this.updateMessage}/>
          </Grid.Column>
          <Grid.Column>
            <LoginPage {...this.props} />
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default SignUpLogInPage;
