import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';
import MenuBar from '../../components/MenuBar/MenuBar';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';


const handleItemClick = (e, { name }) => this.setState({ activeItem: name });


class App extends Component {


  handleSingupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }


  render(){
    return(
      <div>
        <header>
          <MenuBar />
        </header>

        <Switch>
          <Route exact path='/signup' render={({ history }) =>
            <SignUpPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
