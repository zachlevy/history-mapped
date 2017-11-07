import React, { Component } from 'react'

import { dateToCommonEra, isWithinDaysAgo } from './helpers'

class Moment extends Component {
  render() {
    const moment = this.props.moment
    let watchBattleButtonText
    if (this.props.watched) {
      watchBattleButtonText = "Rewatch Battle"
    } else {
      watchBattleButtonText = "Watch Battle"
    }
    const watchBattleButton = (
      <div className="row watch-battle-button">
        <div className="col-12 text-center">
          <button className="btn btn-primary btn-sm" onClick={this.props.handleClick.bind(null, moment)}>
            <i className="fa fa-eye"></i> {watchBattleButtonText}
          </button>
        </div>
      </div>
    )
    let newMomentTag
    if (isWithinDaysAgo(new Date(moment.dateAdded), 30)) {
      newMomentTag = <span className="new-moment">New</span>
    }

    return (
      <div id={"timeline-moment-" + this.props.momentIndex} className={"moment" + (this.props.selectedMoment ? " selected-moment" : "")}>
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
            <p className="text-center">
              <span>{dateToCommonEra(new Date(moment.date))}</span>
              {newMomentTag}
            </p>
            <p className="text-center">{moment.title}</p>
          </div>
        </div>
        {watchBattleButton}
      </div>
    )
  }
}

export default Moment
