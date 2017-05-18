import React, { Component } from 'react';
import './App.css';
import videos from './videos.json';
import Video from './Video'
import 'mapbox-gl'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6">
              <ReactMapboxGl
                style="mapbox://styles/mapbox/streets-v8"
                accessToken="pk.eyJ1IjoiemFjaGxldnkiLCJhIjoiY2lobWExbHJyMG8yNnQ0bHpmYW1zZXV2YyJ9.5RDwdgrQtOdHCOapEwe6eA"
                containerStyle={{height: "100vh", width: "100%"}}
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
            <div className="col-12 col-sm-6">
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
