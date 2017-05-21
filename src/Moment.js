import React, { Component } from 'react'

import { dateToCommonEra } from './helpers'

class Moment extends Component {
  render() {
    const moment = this.props.moment
    return (
      <div className="moment">
        <div className="timeline-previous-icon">
          <i className={"fa fa-circle" + (this.props.selectedMoment ? "" : "-thin")}></i>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-center"><span id={"timeline-moment-" + this.props.momentIndex}>{dateToCommonEra(new Date(moment.date))}</span></p>
            <p className="text-center">{moment.title}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <button className="btn btn-primary btn-sm" onClick={this.props.handleClick.bind(null, moment)}>
              <i className="fa fa-eye"></i> Watch Battle
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Moment
