import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import videos from './videos.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
        {
          videos.map((video, index) => {
            return (
              <li key={index}>{new Date(video.date).getUTCFullYear()}</li>
            )
          })
        }
        </ul>
      </div>
    );
  }
}

export default App;
