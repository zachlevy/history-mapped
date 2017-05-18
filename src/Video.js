import React, { Component } from 'react';

class Video extends Component {
  render() {
    const video = this.props.video
    return (
      <li>{new Date(video.date).getUTCFullYear()}</li>
    );
  }
}

export default Video;
