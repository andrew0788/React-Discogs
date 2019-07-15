import React, {Component, useEffect, useState} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import discogsService from '../../utils/discogsService'

class DiscogsSignIn extends React.Component {

  render(){
    return(
      <Modal.Content>
        <Header>Log In</Header>
      </Modal.Content>
    )
  }
}

export default DiscogsSignIn
