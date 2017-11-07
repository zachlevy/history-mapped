import React, { Component } from 'react'

import { dateToCommonEra } from './helpers'
import YouTube from 'react-youtube'

class SelectedMoment extends Component {
  // when youtube video is played
  handleOnPlay(e) {
    const watchedVideoId = this.props.moment.youtubeId
    this.props.handleWatchedVideo(watchedVideoId)
  }
  render() {
    const moment = this.props.moment
    const playerOptions = {
      videoId: moment.youtubeId,
      height: '390',
      width: '100%'
    }
    return (
      <div className="selected-moment">
        <div className="row selected-moment-row">
          <div className="col-12 col-sm-8">
            <h3 className="title">{moment.title}</h3>
            <p className="author">by <em>{moment.author}</em></p>
          </div>
          <div className="col-12 col-sm-4">
            <h3 className="date">{dateToCommonEra(new Date(moment.date))}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="embed-responsive embed-responsive-16by9">
              {!this.props.mapMoving ? (
                <YouTube
                  className="embed-responsive-item"
                  videoId={moment.youtubeId}
                  opts={playerOptions}
                  onReady={this._onReady}
                  onPlay={this.handleOnPlay.bind(this)}
                />
              ) : (<br />) }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SelectedMoment
