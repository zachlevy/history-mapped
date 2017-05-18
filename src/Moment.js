import React, { Component } from 'react'

class Moment extends Component {
  handleClick(event) {
    event.preventDefault()
    console.log(this.props.video.location.lat, this.props.video.location.lng)
  }
  render() {
    const video = this.props.video
    return (
      <div>
        <h4>{video.title}</h4>
        <p>{video.youtubeId}</p>
        <p>{new Date(video.date).getUTCFullYear()}</p>
        <p>{video.author}</p>
        <button onClick={this.handleClick.bind(this)}>Location</button>
        <hr />
      </div>
    )
  }
}

export default Moment
