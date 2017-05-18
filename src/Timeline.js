import React, { Component } from 'react'
import Moment from './Moment'

class Timeline extends Component {
  render() {
    const videos = this.props.videos
    return (
      <div>
        {
          videos.sort((a, b) => { return new Date(a.date) - new Date(b.date)}).map((video, index) => {
            return (
              <Moment key={index} video={video}></Moment>
            )
          })
        }
      </div>
    )
  }
}

export default Timeline
