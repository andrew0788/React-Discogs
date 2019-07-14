import React from 'react'
import {Button, Modal} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


import RecordCollection from '../../components/RecordCollection/RecordCollection';
import LogInOrSignUp from '../LogInOrSignUp/LogInOrSignUp'
import LoginPage from '../LoginPage/LoginPage'
import DiscogsSignIn from '../../components/DiscogsSignIn/DiscogsSignIn';

class Dash extends React.Component {
  render () {
    const user = this.props.user;
    if (user){
      return (
        user.discogsUserToken
        ?
          <RecordCollection />
        :
        <Modal trigger={<Button>Connect To Discogs</Button>} >
          <DiscogsSignIn />
        </Modal>
      )
    } else {
      return(
        <div>
          <LogInOrSignUp />
        </div>
      )
    }
  }
}

export default Dash;
