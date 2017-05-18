import React, { Component } from 'react'

class Moment extends Component {
  render() {
    const moment = this.props.moment
    return (
      <div>
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
