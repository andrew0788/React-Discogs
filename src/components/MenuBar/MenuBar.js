import React from 'react'

import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import SignUpPage from '../../pages/SignUpPage/SignUpPage'


class MenuBar extends React.Component {
  render () {
    let activeItem = this.state
    return  (
    <div>
      <Menu>
        <Menu.Item header>React-Discogs</Menu.Item>
        <Menu.Item as={Link} to='/about'
          name='About'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          />
        <Menu.Item as={Link} to='/users/login'
          name='Log In'
          active={activeItem === 'logIn'}
          onClick={this.handleItemClick}
        />
        <Menu.Item as={Link} to='/signup'
          name='Sign Up'
          active={activeItem === 'signUp'}
          onClick={this.handleItemClick}
        />
      </Menu>
    </div>
    )
  }
}

export default MenuBar;
