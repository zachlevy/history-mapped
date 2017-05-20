import React, { Component } from 'react'
import Moment from './Moment'
import SelectedMoment from './SelectedMoment'
import { dateToCommonEra } from './helpers'

class Timeline extends Component {
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
    return (
      <div className="timeline">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">{dateToCommonEra(new Date(selectedMoment.date))}</h2>
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
    )
  }
}

export default Timeline
