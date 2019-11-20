import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


const style ={
  textAlign: 'center',
  height: '120vh',
  margin: '10em 15em'
}

class SignUpPage extends Component {
  constructor(props){
    super(props);
    this.state = {message: ''};
  }

  updateMessage = (msg) => {
    this.setState({message: msg})
  }

  render () {
    return(
      <div >
        <Grid style={style} verticalAlign='middle'>
          <Grid.Column style={style}>
          <SignUpForm {...this.props} updateMessage={this.updateMessage} />
          <p>{this.state.message}</p>
          </Grid.Column>
        </Grid >
      </div>
    );
  }
}

export default SignUpPage;
