import React from 'react';
import './App.css';
import {menu} from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="ui menu">
          <a class="active item">Editorials</a>
          <a class="item">Reviews</a>
          <a class="item">Upcoming Events</a>
        </div>
      </header>
    </div>
  );
}

export default App;
