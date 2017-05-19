import React, { Component } from 'react'
import Moment from './Moment'

class Timeline extends Component {
  render() {
    const moments = this.props.moments
    return (
      <div>
        {
          moments.sort((a, b) => { return new Date(a.date) - new Date(b.date)}).map((moment, index) => {
            return (
              <Moment key={index} timelineIndex={index} moment={moment} mapMoving={this.props.mapMoving} handleClick={this.props.handleMomentClick}></Moment>
            )
          })
        }
      </div>
    )
  }
}

export default Timeline
