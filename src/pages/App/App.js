import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import MenuBar from '../../components/MenuBar/MenuBar';
import Dash from '../Dash/Dash'
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

// const handleItemClick = (e, { name }) => this.setState({ activeItem: name });


class App extends Component {
  constructor(){
    super();
    this.state = {
      user: userService.getUser()
    };
  }



  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    console.log('hit');
    userService.logout();
    this.setState({ user: null });
  }

  render(){
    return(
      <div>
        <header>
          <MenuBar
            handleLogout={this.handleLogout}
          />
        </header>

        <Switch>
          <Route exact path='/' render={() =>
            <Dash
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          }/>
          <Route exact path='/signup' render={({ history }) =>
            <SignUpPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
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
