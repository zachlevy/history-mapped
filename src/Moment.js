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
    const selectedMoment = this.props.timelineIndex == 1
    if (selectedMoment) {
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
    } else {
      return (
        <div>
          <div className="row">
            <div className="col-12">
              <h4>{moment.title}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-8">
              <p>{moment.author}</p>
              <p>{dateToCommonEra(new Date(moment.date))}</p>
            </div>
            <div className="col-12 col-sm-4">
              <button className="btn btn-primary" onClick={this.props.handleClick.bind(null, moment)}>Watch Battle</button>
            </div>
          </div>
          <hr />
        </div>
      )
    }



  }
}

export default Moment
