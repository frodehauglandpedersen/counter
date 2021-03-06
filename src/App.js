import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthComponent from './Util/AuthComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Facebook Counter test</h1>
          <AuthComponent />
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
