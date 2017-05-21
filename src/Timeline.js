import React, { Component } from 'react'
import Moment from './Moment'
import SelectedMoment from './SelectedMoment'
import { dateToCommonEra } from './helpers'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll'

class Timeline extends Component {
  componentDidMount() {

  }
  handleClick(event) {
    event.preventDefault()
    console.log("handleClick")
    this.refs.iScroll.withIScroll(function(iScroll) {
      iScroll.scrollToElement(document.querySelector("#selectedTimelineDate", null, true, null))
    })
  }
  render() {
    const moments = this.props.moments
    const momentsLength = moments.length
    let selectedMoment
    let previousMoment
    let nextMoment
    if (momentsLength === 2) {
      // check if BCE or AD
      if (new Date(moments[0].date).getUTCFullYear() > 0) {
        // end of list
        selectedMoment = moments[1]
        previousMoment = moments[0]
        nextMoment = null
      } else {
        // start of list
        selectedMoment = moments[0]
        previousMoment = null
        nextMoment = moments[1]
      }
    } else {
      // middle of list
      selectedMoment = moments[1]
      previousMoment = moments[0]
      nextMoment = moments[2]
    }
    const timelineWidth = Math.floor(moments.length * 100) + "%"
    console.log(timelineWidth)
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
                <h2 className="text-center" onClick={this.handleClick.bind(this)}>
                  <span id="selectedTimelineDate">
                    {dateToCommonEra(new Date(selectedMoment.date))}
                  </span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="timeline-selected-icon">
                  <i className="fa fa-circle"></i>
                </div>
                <hr className="timeline-line" />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="timeline-previous-icon">
                  <i className="fa fa-circle-thin"></i>
                </div>
                <Moment moment={previousMoment} handleClick={this.props.handleMomentClick} />
              </div>
              <div className="col-12 col-sm-6">
                <div className="timeline-next-icon">
                  <i className="fa fa-circle-thin"></i>
                </div>
                <Moment moment={nextMoment} handleClick={this.props.handleMomentClick} />
              </div>
            </div>
          </div>
        </ReactIScroll>
      </div>
    )
  }
}

export default Timeline
