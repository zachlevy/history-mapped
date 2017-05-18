import React, { Component } from 'react'

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
        <YouTube
          videoId={moment.youtubeId}
          opts={playerOptions}
          onReady={this._onReady}
        />
        <h4>{moment.title}</h4>
        <p>{moment.youtubeId}</p>
        <p>{new Date(moment.date).getUTCFullYear()}</p>
        <p>{moment.author}</p>
        <button onClick={this.props.handleClick.bind(null, moment)}>Location</button>
        <hr />
      </div>
    )
  }
}

export default Moment
