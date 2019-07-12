import React from 'react'

import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';



class MenuBar extends React.Component {
  render () {
    let activeItem = this.state
    return  (
    <div>
      <Menu>
        <Menu.Item as={Link} to="/" header><img alt="NDL Logo" src='/record-logo-96.png' /></Menu.Item>
        <Menu.Item as={Link} to='/about'
          name='About'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />
        <Menu.Item as={Link} to='/login'
          name='Log In'
          active={activeItem === 'logIn'}
          onClick={this.handleItemClick}
        />
        <Menu.Item as={Link} to='/signup'
          name='Sign Up'
          active={activeItem === 'signUp'}
          onClick={this.handleItemClick}
          />
        <Menu.Item as={Link} to=''
          name='Log Out'
          active={activeItem === 'logOut'}
          onClick={this.props.handleLogout}
          />
      </Menu>
    </div>
    )
  }
}

export default MenuBar;
