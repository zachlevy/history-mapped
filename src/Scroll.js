import React, { Component } from 'react'

import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll'

class Scroll extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  onScrollStart() {
    console.log("iScroll starts scrolling")
  }
  handleClick(event) {
    event.preventDefault()
    console.log("handleClick")
    this.refs.iScroll.withIScroll(function(iScroll) {
      iScroll.scrollTo(0,0)
    })
  }
  render() {
    const options = {
      mouseWheel: true,
      scrollbars: true,
      scrollX: true,
      scrollY: false
    }
    let i = 0
    const len = 50
    const listOfLi = []

    for (i; i < len; i++) {
      listOfLi.push(<li className="list-inline-item" key={i}><a onClick={this.handleClick.bind(this)}>Column {i+1}</a></li>)
    }
    return (
      <ReactIScroll
        ref="iScroll"
        iScroll={iScroll}
        options={{mouseWheel: true, scrollbars: true, scrollX: true}}
      >
        <div style={{width:'200%'}}>
          <ul className="list-inline">
            {listOfLi}
          </ul>
        </div>
      </ReactIScroll>
    )
  }
}

export default Scroll
