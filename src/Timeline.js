import React, { Component } from 'react'
import Moment from './Moment'

class Timeline extends Component {
  render() {
    const moments = this.props.videos
    return (
      <div>
        {
          moments.sort((a, b) => { return new Date(a.date) - new Date(b.date)}).map((moment, index) => {
            return (
              <Moment key={index} moment={moment} handleClick={this.props.handleMomentClick}></Moment>
            )
          })
        }
      </div>
    )
  }
}

export default Timeline
