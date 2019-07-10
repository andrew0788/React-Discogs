import React, { Component } from 'react';
import './App.css';
import MenuBar from './components/MenuBar';

const handleItemClick = (e, { name }) => this.setState({ activeItem: name })


function App() {
  return (
    <MenuBar />
  );
}

export default App;
