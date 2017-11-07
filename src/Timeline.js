import React, { Component } from 'react'
import Moment from './Moment'
import SelectedMoment from './SelectedMoment'
import { dateToCommonEra, scrollToSelectedMoment } from './helpers'

class Timeline extends Component {
  componentDidMount() {
    // initial timeline move
    scrollToSelectedMoment(this.props.selectedMomentIndex)
  }
  // move the timeline when timeline updates
  componentWillReceiveProps(newProps) {
    if (newProps.selectedMomentIndex !== this.props.selectedMomentIndex) {
      setTimeout(() => {
        scrollToSelectedMoment(this.props.selectedMomentIndex)
      }, 3000)
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
