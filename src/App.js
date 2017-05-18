import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import videos from './videos.json';
import Video from './Video'

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
        <table>
        {
          videos.sort((a, b) => { return new Date(a.date) - new Date(b.date)}).map((video, index) => {
            return (
              <Video key={index} video={video}></Video>
            )
          })
        }
        </table>
      </div>
    );
  }
}

export default App;
