import React, { Component } from 'react';
import './App.css';
import {Parent} from './components/parent.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ABOUT US</h1>
        </header>
          <Parent />
      </div>
    );
  }
}

export default App;
