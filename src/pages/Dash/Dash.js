import React from 'react'
import {Button, Modal} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import discogsService from '../../utils/discogsService';

import RecordCollection from '../../components/RecordCollection/RecordCollection';
import LogInOrSignUp from '../LogInOrSignUp/LogInOrSignUp';
import DiscogsSignIn from '../../components/DiscogsSignIn/DiscogsSignIn';

class Dash extends React.Component {


  handleModel = async()=>{
    try{
      await discogsService.getDiscogsSignIn(this.state);
      this.props.history.push('/');
    } catch (err){
      console.log(err);
    }
  }

  render () {
    const user = this.props.user;
    if (user){
      return (
        user.discogsUserToken
        ?
          <RecordCollection />
        :
        <Modal
          trigger={<Button>Connect To Discogs</Button>}
          onMount={this.handleModel} centered={true}
        >
          <DiscogsSignIn
            history={this.props.history}
            model={this.props}
            />
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
