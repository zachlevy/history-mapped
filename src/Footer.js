import React, { Component } from 'react'

import { currentYear, timestampToDateString } from './helpers'

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Website <a href="https://github.com/zachlevy/history-videos" target="_blank">built</a> by Zach Levy &copy; {currentYear}. Last updated {timestampToDateString(process.env.REACT_APP_TIMESTAMP)}</p>
        <div className="row text-center">
          <div className="col-12">
            <ul className="list-inline social-links">
              <li className="list-inline-item"><h4><a href="https://github.com/zachlevy" target="_blank" ><i className="fa fa-github"></i></a></h4></li>
              <li className="list-inline-item"><h4><a href="https://www.facebook.com/zacharyaaronlevy" target="_blank" ><i className="fa fa-facebook"></i></a></h4></li>
              <li className="list-inline-item"><h4><a href="https://twitter.com/zachary_levy" target="_blank" ><i className="fa fa-twitter"></i></a></h4></li>
              <li className="list-inline-item"><h4><a href="https://www.linkedin.com/in/zacharylevy/" target="_blank" ><i className="fa fa-linkedin"></i></a></h4></li>
              <li className="list-inline-item"><h4><a href="https://www.youtube.com/channel/UC8TCWJJKgsFJFHM-pVlTSEg" target="_blank" ><i className="fa fa-youtube"></i></a></h4></li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
