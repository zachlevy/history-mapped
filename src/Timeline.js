import React, { Component } from 'react'
import Moment from './Moment'

class Timeline extends Component {
  render() {
    const videos = this.props.videos
    return (
      <table>
        <tbody>
        {
          videos.sort((a, b) => { return new Date(a.date) - new Date(b.date)}).map((video, index) => {
            return (
              <Moment key={index} video={video}></Moment>
            )
          })
        }
        </tbody>
      </table>
    )
  }
}

export default Timeline
