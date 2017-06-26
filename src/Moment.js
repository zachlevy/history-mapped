import React, { Component } from 'react'

import { dateToCommonEra } from './helpers'

class Moment extends Component {
  render() {
    const moment = this.props.moment
    // put a default of 250px for moment with
    const momentWidth = this.props.width || "250px"
    const watchBattleButton = (
      <div className="row">
        <div className="col-12 text-center">
          <button className="btn btn-primary btn-sm" onClick={this.props.handleClick.bind(null, moment)}>
            <i className="fa fa-eye"></i> Watch Battle
          </button>
        </div>
      </div>
    )
    return (
      <div className={"moment" + (this.props.selectedMoment ? " selected-moment" : "")}>
        <div className="timeline-previous-icon">
          <i className={"fa fa-circle" + (this.props.selectedMoment ? "" : "-thin")}></i>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="arrow-up"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-center"><span id={"timeline-moment-" + this.props.momentIndex}>{dateToCommonEra(new Date(moment.date))}</span></p>
            <p className="text-center">{moment.title}</p>
          </div>
        </div>
        {this.props.selectedMoment ? "" : watchBattleButton}
      </div>
    )
  }
}

export default Moment
