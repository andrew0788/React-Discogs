import React from 'react'

import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';



const MenuBar = (props) => {
  let nav = props.user ?
    <Menu>
      <Menu.Item as={Link} to="/" header><img alt="NDL Logo" src='/record-logo-96.png' /></Menu.Item>
      <Menu.Item as={Link} to ='/'
        name='Your Collection'
        active={props.activeItem === "collection"}
        onClick={props.handleItemClick}
      />
      <Menu.Item as={Link} to=''
        name='Log Out'
        active={props.activeItem === 'logOut'}
        onClick={props.handleLogout}
        />
    </Menu>
    :
    <Menu>
      <Menu.Item as={Link} to="/" header><img alt="NDL Logo" src='/record-logo-96.png' /></Menu.Item>
      <Menu.Item as={Link} to='/login'
        name='Log In'
        active={props.activeItem === 'logIn'}
        onClick={props.handleItemClick}
      />
      <Menu.Item as={Link} to='/signup'
        name='Sign Up'
        active={props.activeItem === 'signUp'}
        onClick={props.handleItemClick}
      />

      <Menu.Item as={Link} to='/about'
        name='About'
        active={props.activeItem === 'about'}
        onClick={props.handleItemClick}
      />
  </Menu>;

  return(
    <div>
      {nav}
    </div>
  )
}

export default MenuBar;
