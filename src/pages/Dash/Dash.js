import React from 'react'

class Dash extends React.Component {
  render () {
    const user = this.props.user;
    return (
      <div>
        <h1>home</h1>
        {user ? <h1> { user.name } </h1>: <h1>No User</h1>}
      </div>
    )
  }
}

export default Dash;
