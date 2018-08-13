import React, { Component } from 'react'
import './App.css'
import moments from './moments'
import Timeline from './Timeline'
import Panel from './Panel'
import 'mapbox-gl'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import Footer from './Footer'
import Cookies from "js-cookie"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: [12.5359979, 41.9100711],
      zoom: [3],
      momentIndex: Math.floor(Math.random() * moments.length - 1) + 1,
      mapMoving: true,
      pitch: 0,
      watchedVideos: Cookies.getJSON("watchedVideos") || []
    }

  }
  onMapLoad(map, event) {
    this.map = map
    map.loadImage('./icons/spear_icon_blue_white_x256.png', (error, image) => {
      if (error) throw error
      map.addImage('battle-icon', image)
    })
    map.loadImage('./icons/spear_icon_blue_white_squared_x462.png', (error, image) => {
      if (error) throw error
      map.addImage('battle-icon-selected', image)
    })
    // initial map move
    setTimeout(() => {
      this.handleMapMarkerClick(moments[this.state.momentIndex])
    }, 2000)

  }
  handleTimelineMomentClick(moment, event) {
    // move map
    this.setState({
      center: [
        moment.location.lng,
        moment.location.lat
      ],
      zoom: [12],
      momentIndex: moments.findIndex((m) => {return m.youtubeId === moment.youtubeId}),
      mapMoving: true,
      pitch: 0
    })
  }
  handleMapMarkerClick(moment, event) {
    this.setState({
      center: [
        moment.location.lng,
        moment.location.lat
      ],
      zoom: [12],
      momentIndex: moments.findIndex((m) => {return m.youtubeId === moment.youtubeId}),
      mapMoving: true,
      pitch: 0
    })
  }
  onMoveEnd(map, event) {
    this.setState({pitch: 60})
    // wait for pitch to change
    setTimeout(() => {
      this.setState({mapMoving: false})
    }, 330)
  }
  handleWatchedVideo(watchedVideoId) {
    const watchedVideos = this.state.watchedVideos
    // if not already watched, add videoid to array of watched videos in cookies
    if (watchedVideos.indexOf(watchedVideoId) === -1) {
      watchedVideos.push(watchedVideoId)
      // set the cookie
      Cookies.set("watchedVideos", watchedVideos)
      // update the state
      this.setState({watchedVideos: watchedVideos})
    }
  }
  render() {
    const selectedMoments = moments.sort((a, b) => { return new Date(a.date) - new Date(b.date)}).slice(Math.max(this.state.momentIndex - 1, 0), this.state.momentIndex + 2)
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-12 col-sm-6 order-sm-2 panel-wrapper">
              <Panel
                moments={selectedMoments}
                mapMoving={this.state.mapMoving}
                handleWatchedVideo={this.handleWatchedVideo.bind(this)}
              />
            </div>
            <div className="col-12 col-sm-6 order-sm-1">
              <ReactMapboxGl
                style="mapbox://styles/zachlevy/cj4cydzuz5nfh2sobv4nmmmfm"
                accessToken="pk.eyJ1IjoiemFjaGxldnkiLCJhIjoiY2lobWExbHJyMG8yNnQ0bHpmYW1zZXV2YyJ9.5RDwdgrQtOdHCOapEwe6eA"
                containerStyle={{height: "100vh", width: "100%"}}
                center={this.state.center}
                zoom={this.state.zoom}
                onStyleLoad={this.onMapLoad.bind(this)}
                onMoveEnd={this.onMoveEnd.bind(this)}
                pitch={this.state.pitch}
              >
                <Layer
                  type="symbol"
                  id="marker"
                  layout={{ "icon-image": "battle-icon", "icon-size": 0.12, "icon-allow-overlap": true }}>
                  {
                    moments.map((moment, index) => {
                      return <Feature key={index} coordinates={[moment.location.lng, moment.location.lat]} onClick={this.handleMapMarkerClick.bind(this, moment)}/>
                    })
                  }
                </Layer>
                <Layer
                  type="symbol"
                  id="selected-marker"
                  layout={{ "icon-image": "battle-icon-selected", "icon-size": 0.12, "icon-allow-overlap": true }}>

                  <Feature coordinates={[moments[this.state.momentIndex].location.lng, moments[this.state.momentIndex].location.lat]} />
                </Layer>

              </ReactMapboxGl>
            </div>
          </div>
          <Timeline
            handleMomentClick={this.handleTimelineMomentClick.bind(this)}
            selectedMomentIndex={this.state.momentIndex}
            moments={moments}
            mapMoving={this.state.mapMoving}
            watchedVideos={this.state.watchedVideos}
          />
        </div>
      </div>
    )
  }
}

export default App
