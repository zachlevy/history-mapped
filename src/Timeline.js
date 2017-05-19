import React, { Component } from 'react'
import Moment from './Moment'
import SelectedMoment from './SelectedMoment'

class Timeline extends Component {
  render() {
    const moments = this.props.moments
    const momentsLength = moments.length
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <SelectedMoment moment={moments[momentsLength - 2]} mapMoving={this.props.mapMoving} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <h4>Previous Battle</h4>
            <Moment moment={moments[momentsLength - 3]} handleClick={this.props.handleMomentClick} />
          </div>
          <div className="col-12 col-sm-6">
            <h4>Next Battle</h4>
            <Moment moment={moments[momentsLength - 1]} handleClick={this.props.handleMomentClick} />
          </div>
        </div>
      </div>
    )
  }
}

export default Timeline
