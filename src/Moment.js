import React, { Component } from 'react'

import { dateToCommonEra } from './helpers'
import YouTube from 'react-youtube'

class Moment extends Component {
  render() {
    const moment = this.props.moment
    const playerOptions = {
      videoId: moment.youtubeId,
      height: '390',
      width: '100%'
    }
    return (
      <div>
        <div>
          {this.props.timelineIndex == 1 && !this.props.mapMoving ? <YouTube videoId={moment.youtubeId} opts={playerOptions} onReady={this._onReady} /> : null }
        </div>
        <h4>{moment.title}</h4>
        <p>{dateToCommonEra(new Date(moment.date))}</p>
        <p>{moment.author}</p>
        <button onClick={this.props.handleClick.bind(null, moment)}>Location</button>
        <hr />
      </div>
    )
  }
}

export default Moment
