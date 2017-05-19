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
          <div className="col-12 col-sm-8">
            <label>{moment.title}</label>
          </div>
          <div className="col-12 col-sm-4">
            <p>{dateToCommonEra(new Date(moment.date))}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button className="btn btn-primary" onClick={this.props.handleClick.bind(null, moment)}>Watch Battle</button>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default Moment
