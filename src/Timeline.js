import React, { Component } from 'react'
import Moment from './Moment'
import SelectedMoment from './SelectedMoment'
import { dateToCommonEra } from './helpers'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll'

class Timeline extends Component {
  // scroll to moment element with iscroll
  scrollToSelectedMoment(momentIndex) {
    console.log("scrollToSelectedMoment")
    this.refs.iScroll.withIScroll((iScrollInstance) => {
      iScrollInstance.scrollToElement(document.querySelector("#timeline-moment-" + momentIndex), 5000, true)
    })
  }
  // move the timeline when timeline updates
  componentDidUpdate() {
    this.scrollToSelectedMoment(this.props.selectedMomentIndex)
    // return true
  }
  componentDidMount() {
    // get the width of the timeline
    // absolute position for iscroll doesn't let us to % width
    this.timelineWidth = this.refs.timeline.offsetWidth
    // initial timeline move
    this.scrollToSelectedMoment(this.props.selectedMomentIndex)
  }
  render() {
    const momentWidth = this.timelineWidth / 5
    const moments = this.props.moments
    const momentsLength = moments.length
    // dynamic overflow width based on number of moments in timeline
    const timelineWidth = Math.floor(momentsLength * 100 / 5) + "%"
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
      <div className="timeline" ref="timeline">
        <ReactIScroll
          ref="iScroll"
          iScroll={iScroll}
          options={{mouseWheel: true, scrollbars: true, scrollX: true, scrollY: false}}
        >
          <div style={{width: timelineWidth}}>
            <div className="row">
              <div className="col-12">
                <hr className="timeline-line" />
              </div>
            </div>
            <div className="row">
              {
                moments.map((moment,index) => {
                  return <Moment width={momentWidth} key={index} momentIndex={index} selectedMoment={index === this.props.selectedMomentIndex} moment={moment} handleClick={this.props.handleMomentClick} />
                })
              }
            </div>
          </div>
        </ReactIScroll>
      </div>
    )
  }
}

export default Timeline
