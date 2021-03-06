import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React APP ....
          </a>
          <b>github</b> -> gitlab  ci cd -> deployed to firebase
          <h1>{process.env.NODE_ENV} </h1>
          <br/>
          
          <h2>{process.env.REACT_APP_SECRET_KEY}</h2>
        </header>
      </div>
    );
  }
}

export default App;
