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
      <div className="selected-moment">
        <div className="row">
          <div className="col-12">
            <h3 className="title">{moment.title}</h3>
            <p>by <em>{moment.author}</em></p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {!this.props.mapMoving ? <YouTube videoId={moment.youtubeId} opts={playerOptions} onReady={this._onReady} /> : null }
            <h2 className="text-center">{dateToCommonEra(new Date(moment.date))}</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default SelectedMoment
