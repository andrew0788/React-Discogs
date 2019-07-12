import React, { Component } from 'react';
import { Form, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import userService from '../../utils/userService';


class LoginPage extends Component {

  state = {
    email: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
              <Form onSubmit={this.handleSubmit} >
                <Form.Group>
                <Form.Input
                  label='Email'
                  placeholder='Email'
                  name='email'
                  value={this.props.email}
                  onChange={this.handleChange}
                />
                <Form.Input
                  label='Password'
                  placeholder='Password'
                  name='password'
                  value={this.props.password}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Button content="Submit" />
              </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
