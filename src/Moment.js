import React, { Component } from 'react'

import { dateToCommonEra } from './helpers'

class Moment extends Component {
  render() {
    const moment = this.props.moment
    if (!moment) {
      return <div></div>
    }
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <label>{moment.title}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <p>{moment.author}</p>
            <p>{dateToCommonEra(new Date(moment.date))}</p>
          </div>
          <div className="col-12 col-sm-6">
            <button className="btn btn-primary" onClick={this.props.handleClick.bind(null, moment)}>Watch Battle</button>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default Moment
