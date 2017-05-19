import React, { Component } from 'react'

import { dateToCommonEra } from './helpers'
import YouTube from 'react-youtube'

class SelectedMoment extends Component {
  render() {
    const moment = this.props.moment
    const playerOptions = {
      videoId: moment.youtubeId,
      height: '390',
      width: '100%'
    }
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <h4>{moment.title}</h4>
            <p>{moment.author}</p>
            <p>{dateToCommonEra(new Date(moment.date))}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {!this.props.mapMoving ? <YouTube videoId={moment.youtubeId} opts={playerOptions} onReady={this._onReady} /> : null }
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default SelectedMoment
