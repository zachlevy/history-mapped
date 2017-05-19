import React, { Component } from 'react'
import './App.css'
import moments from './moments.json'
import Timeline from './Timeline'
import 'mapbox-gl'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: [12.5359979, 41.9100711],
      zoom: [3],
      momentIndex: 1,
      mapMoving: false
    }
  }
  componentWillMount() {

  }
  onMapLoad(map, event) {
    console.log("onMapLoad")
    this.map = map
  }
  handleTimelineMomentClick(moment, event) {
    console.log("handleTimelineMomentClick")
    this.setState({
      center: [
        moment.location.lng,
        moment.location.lat
      ],
      zoom: [12],
      momentIndex: moments.findIndex((m) => {return m.youtubeId === moment.youtubeId}),
      mapMoving: true
    })
  }
  handleMapMarkerClick(moment, event) {
    console.log("handleMapMarkerClick")
    this.setState({
      center: [
        moment.location.lng,
        moment.location.lat
      ],
      zoom: [12],
      momentIndex: moments.findIndex((m) => {return m.youtubeId === moment.youtubeId}),
      mapMoving: true
    })
  }
  onMoveEnd(map, event) {
    console.log("onMoveEnd")
    this.setState({mapMoving: false})
  }
  render() {
    const selectedMoments = moments.sort((a, b) => { return new Date(a.date) - new Date(b.date)}).slice(Math.max(this.state.momentIndex - 1, 0), this.state.momentIndex + 2)
    console.log(Math.max(this.state.momentIndex - 1, 0), this.state.momentIndex + 2)
    console.log(selectedMoments)
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6">
              <ReactMapboxGl
                style="mapbox://styles/mapbox/streets-v8"
                accessToken="pk.eyJ1IjoiemFjaGxldnkiLCJhIjoiY2lobWExbHJyMG8yNnQ0bHpmYW1zZXV2YyJ9.5RDwdgrQtOdHCOapEwe6eA"
                containerStyle={{height: "100vh", width: "100%"}}
                center={this.state.center}
                zoom={this.state.zoom}
                onStyleLoad={this.onMapLoad.bind(this)}
                onMoveEnd={this.onMoveEnd.bind(this)}
              >
                <Layer
                  type="symbol"
                  id="marker"
                  layout={{ "icon-image": "marker-15" }}>
                  {
                    moments.map((moment, index) => {
                      return <Feature key={index} coordinates={[moment.location.lng, moment.location.lat]} onClick={this.handleMapMarkerClick.bind(this, moment)}/>
                    })
                  }
                </Layer>
              </ReactMapboxGl>
            </div>
            <div className="col-12 col-sm-6">
              <Timeline handleMomentClick={this.handleTimelineMomentClick.bind(this)} moments={selectedMoments} mapMoving={this.state.mapMoving} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
