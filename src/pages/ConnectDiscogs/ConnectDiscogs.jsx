import React, { Component } from 'react';
import {Button, Form} from 'semantic-ui-react';


class ConnectDiscogs extends Component{
  state={
    discogsUser: ''
  }


  submitDiscogsUser = async (e) => {
    e.preventDefault();
    this.props.history.push('/');
  }

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Form.Input
          label='Discogs User Name'
          placeholder="User Name"
          name='discogsUser'
          value={this.props.discogsUserName}
          onChange={this.handleChange}
        />
      <Button onClick={this.submitDiscogsUser}>Connect To Discogs</Button>
      </div>
    );
  }

};

export default ConnectDiscogs;
