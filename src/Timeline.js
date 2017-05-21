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
      iScrollInstance.scrollToElement(document.querySelector("#timeline-moment-" + momentIndex, 1000, true, null, iScroll.utils.ease.elastic))
    })
  }
  // move the timeline when props change
  shouldComponentUpdate(nextProps) {
    console.log("shouldComponentUpdate", this.props.selectedMomentIndex, nextProps.selectedMomentIndex)
    if (this.props.selectedMomentIndex != nextProps.selectedMomentIndex) {
      this.scrollToSelectedMoment(nextProps.selectedMomentIndex)
    }
    return true
  }
  render() {
    const moments = this.props.moments
    const momentsLength = moments.length
    // dynamic overflow width based on number of moments in timeline
    const timelineWidth = Math.floor(momentsLength * 100 / 3) + "%"
    console.log(timelineWidth)

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
      <div className="timeline">
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
                  return <Moment key={index} momentIndex={index} selectedMoment={index === this.props.selectedMomentIndex} moment={moment} handleClick={this.props.handleMomentClick} />
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
