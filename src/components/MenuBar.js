import React from 'react'
import PropTypes from 'prop-types'

import {Menu} from 'semantic-ui-react'

class MenuBar extends React.Component {
  
  render () {
    let activeItem = this.state
    return  (
    <div>
      <header>
        <Menu>
          <Menu.Item header>Our Company</Menu.Item>
          <Menu.Item
            name='aboutUs'
            active={activeItem === 'aboutUs'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='jobs'
            active={activeItem === 'jobs'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='locations'
            active={activeItem === 'locations'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </header>
    </div>
    )
  }
}

export default MenuBar;
