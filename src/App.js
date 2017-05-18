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
        <div>
          <ReactMapboxGl
            style="mapbox://styles/mapbox/streets-v8"
            accessToken="pk.eyJ1IjoiemFjaGxldnkiLCJhIjoiY2lobWExbHJyMG8yNnQ0bHpmYW1zZXV2YyJ9.5RDwdgrQtOdHCOapEwe6eA"
            containerStyle={{height: "100vh", width: "100vw"}}
            >
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
              {
                videos.map((video, index) => {
                  return <Feature key={index} coordinates={[video.location.lng, video.location.lat]}/>
                })
              }
            </Layer>
          </ReactMapboxGl>
        </div>
        <table>
          <tbody>
          {
            videos.sort((a, b) => { return new Date(a.date) - new Date(b.date)}).map((video, index) => {
              return (
                <Video key={index} video={video}></Video>
              )
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
