import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <p><Link to="/test/">Test</Link></p>
      </div>
    )
  }
}

export default Home
