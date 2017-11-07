import React, { Component } from 'react'
import Moment from './Moment'
import SelectedMoment from './SelectedMoment'
import { dateToCommonEra, scrollToSelectedMoment } from './helpers'

class Timeline extends Component {
  componentDidMount() {
    // initial timeline move
    scrollToSelectedMoment(this.props.selectedMomentIndex)

    document.getElementById("timeline").addEventListener('wheel', this.handleScroll)
  }

  componentWillUnmount() {
    document.getElementById("timeline").removeEventListener('wheel', this.handleScroll)
  }

  // intercept scroll events for simultaneous horizontal and vertical scrolling options
  handleScroll(e) {
    const firstMomentElement = document.getElementById(`timeline-moment-0`)
    const firstMomentLeft = firstMomentElement.getBoundingClientRect().left
    // if scrolling horizontally with trackpad, do nothing
    if (e.deltaY && e.deltaX) {
      return
    }
    // if scrolling vertically only
    if (e.deltaY) {
      e.preventDefault()
      const scrollToPosition = Math.abs(firstMomentLeft) + e.deltaY
      document.getElementById("timeline").scrollTo(scrollToPosition, 0)
    }
  }

  // move the timeline when timeline updates
  componentWillReceiveProps(newProps) {
    if (newProps.selectedMomentIndex !== this.props.selectedMomentIndex) {
      scrollToSelectedMoment(newProps.selectedMomentIndex)
    }
  }
  render() {
    const moments = this.props.moments
    const momentsLength = moments.length
    const selectedMomentHTML = (
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">
            <span id="selectedTimelineDate">
              {dateToCommonEra(new Date(moments[this.props.selectedMomentIndex].date))}
            </span>
          </h2>
        </div>
      </div>
    )
    return (
      <div className="timeline" ref="timeline" id="timeline">
        <div className="row">
          <div className="col-12">
            <hr className="timeline-line" />
            <br />
          </div>
        </div>
        <div className="moments-wrapper">
          {
            moments.map((moment,index) => {
              return <Moment
                key={index}
                momentIndex={index}
                selectedMoment={index === this.props.selectedMomentIndex}
                moment={moment}
                handleClick={this.props.handleMomentClick}
                watched={this.props.watchedVideos.indexOf(moment.youtubeId) !== -1}
              />
            })
          }
        </div>
      </div>
    )
  }
}

export default Timeline
