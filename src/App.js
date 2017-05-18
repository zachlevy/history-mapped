import React, { Component } from 'react'
import './App.css'
import videos from './videos.json'
import Timeline from './Timeline'
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
                center={[12.5359979, 41.9100711]}
                zoom={[3]}>
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
              <Timeline videos={videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
