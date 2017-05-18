import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import videos from './videos.json';
import Video from './Video'
import 'mapbox-gl'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

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
        <ReactMapboxGl
          style="mapbox://styles/mapbox/streets-v8"
          accessToken="pk.eyJ1IjoiemFjaGxldnkiLCJhIjoiY2lobWExbHJyMG8yNnQ0bHpmYW1zZXV2YyJ9.5RDwdgrQtOdHCOapEwe6eA"
          containerStyle={{
            height: "100vh",
            width: "100vw"
          }}>
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
              <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
            </Layer>
        </ReactMapboxGl>
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
