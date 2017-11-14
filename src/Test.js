import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Test extends Component {
  render() {
    return (
      <div>
        <p><Link to="/">Home</Link></p>
      </div>
    )
  }
}

export default Test
