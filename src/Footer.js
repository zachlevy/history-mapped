import React, { Component } from 'react'

import { currentYear, timestampToDateString } from './helpers'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <p>Built by <a href="http://www.zachlevy.me" target="_blank">Zach Levy</a>. &copy; {currentYear}</p>
          <p>Last updated {timestampToDateString(process.env.REACT_APP_TIMESTAMP)}</p>
        </div>
      </footer>
    )
  }
}

export default Footer
