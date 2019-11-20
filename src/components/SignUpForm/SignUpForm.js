import React, { Component } from 'react';
import { Form, Grid, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import userService from '../../utils/userService';


class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div>
        <Grid.Column>
          <Form onSubmit={this.handleSubmit} >
            <Header as='h1'>
              Sign Up
            </Header>
              <Form.Input
                label='Name'
                placeholder='Name'
                name='name'
                value={this.props.name}
                onChange={this.handleChange}
              />
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
              <Form.Input
                label='Password Confirm'
                placeholder='Password'
                name='password'
                value={this.props.passwordConf}
                onChange={this.handleChange}
              />
              <Form.Button content="Submit" />
          </Form>
        </Grid.Column>
      </div>
    );
  }
}

export default SignupForm;
