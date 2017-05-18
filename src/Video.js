import React, { Component } from 'react';

class Video extends Component {
  render() {
    const video = this.props.video
    return (
      <tr>
        <td>
          {video.youtubeId}
        </td>
        <td>
          {new Date(video.date).getUTCFullYear()}
        </td>
        <td>
          {video.title}
        </td>
        <td>
          {video.author}
        </td>
        <td>
          {video.location.lat}
        </td>
        <td>
          {video.location.lng}
        </td>
      </tr>
    );
  }
}

export default Video;
