import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


const style ={
  textAlign: 'center',
  padding: '15em 50em',
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
        <Grid columns={2} style={style} verticalAlign='center'>
          <SignUpForm {...this.props} updateMessage={this.updateMessage} />
        </Grid >
        // <p>{this.state.message}</p>
    );
  }
}

export default SignUpPage;
