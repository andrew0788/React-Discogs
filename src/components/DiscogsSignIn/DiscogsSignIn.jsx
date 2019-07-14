import React, {Component, useEffect, useState} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'


class DiscogsSignIn extends Component {
  componentDidMount() {
  // Update the document title using the browser API
  document.title = `You clicked times`;
  };

  render(){
    return(
      <Header>Log In</Header>
    )
  }
}

export default DiscogsSignIn
