import React from 'react'

import RecordCollection from '../../components/RecordCollection/RecordCollection';
import LogInOrSignUp from '../LogInOrSignUp/LogInOrSignUp';
import ConnectDiscogs from '../ConnectDiscogs/ConnectDiscogs';


class Dash extends React.Component {


  updateMessage= (msg) => {
    this.setState({message: msg})
  }


  handleClick = (e) => e.preventDefault();

  render () {
    const user = this.props.user;
    if (user){
      return (
        user.discogsUserToken
        ?
          <RecordCollection />
        :
          <ConnectDiscogs
            {...this.props}
            updateMessage={this.updateMessage}
            handleClick={this.props.getDiscogsUser}
            discogsUserName={this.props.discogsUserName}
          />
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
