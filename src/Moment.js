import React, { Component } from 'react'

import { dateToCommonEra } from './helpers'

class Moment extends Component {
  render() {
    const moment = this.props.moment
    if (!moment) {
      return <div></div>
    }
    return (
      <div className="moment">
        <div className="row">
          <div className="col-12">
            <p className="text-center">{dateToCommonEra(new Date(moment.date))}</p>
            <h4 className="text-center">{moment.title}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <button className="btn btn-primary" onClick={this.props.handleClick.bind(null, moment)}>
              <i className="fa fa-eye"></i> Watch Battle
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Moment
