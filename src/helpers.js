import React from 'react'

export function dateToCommonEra(date) {
  let year = date.getUTCFullYear()
  let era
  if (year < 0) {
    era = " BCE"
  } else {
    era = " AD"
  }
  year = Math.abs(year)
  return year + era
}

export const currentYear = new Date().getFullYear()

export function timestampToDateString(unixTimestamp) {
  return new Date(unixTimestamp * 1000).toISOString().slice(0,10)
}

// converts rails api errors object to array strings
export const parseApiErrors = (errorsObj) => {
  let errors = []
  if (errorsObj) {
    // iterate over attributes
    Object.keys(errorsObj).forEach((field, index) => {
      // make sure it's an array
      if (typeof errorsObj[field] === "object" && errorsObj[field].length > 0) {
        errorsObj[field].forEach((error, index) => {
          errors.push(`${field} ${error}`)
        })
      }
    })
  }
  return errors
}

// creates html from form errors
export const buildFormErrors = (apiErrors) => {
  const errors = parseApiErrors(apiErrors)
  if (!(errors.length > 0)) {
    return
  }
  const errorsList = (
    <ul className="errors-list form-error list-unstyled">
      {
        errors.map((error, index) => {
          return <li key={index}>{error}</li>
        })
      }
    </ul>
  )
  return errorsList
}

// takes in a date object and an integer of days ago
// returns if that date is between today and days ago
export const isWithinDaysAgo = (date, daysAgo) => {
  let dateAgo = new Date()
  dateAgo.setDate(dateAgo.getDate() - daysAgo)
  return date > dateAgo
}

// scroll to moment element
// math time
// get the offset of the first moment, which will be offscreen to the left, use this as 0
// get the offset of the moment to be scrolled to
// add in the offset for the middle
export const scrollToSelectedMoment = (momentIndex) => {
  const firstMomentElement = document.getElementById(`timeline-moment-0`)
  const toScrollToElement = document.getElementById(`timeline-moment-${momentIndex}`)
  const timelineElement = document.getElementById(`timeline`)
  const firstMomentLeft = firstMomentElement.getBoundingClientRect().left
  const toScrollToLeft = toScrollToElement.getBoundingClientRect().left
  const toScrollToWidth = toScrollToElement.getBoundingClientRect().width
  const timelineWidth = timelineElement.getBoundingClientRect().width
  const scrollToPosition = (toScrollToLeft - firstMomentLeft) - (timelineWidth / 2) + (toScrollToWidth / 2)
  autoScrollTo(scrollToPosition, 3000)
}

// automatically scrolls to the position in steps, works with the recursiveScrollTo function
// could definitely be refactored to be better
const autoScrollTo = (destination, duration) => {
  const tickDuration = 20 // in ms
  const remainingTicks = duration / tickDuration
  const currentPosition = document.getElementById(`timeline-moment-0`).getBoundingClientRect().left
  const remainingDistance = Math.abs(currentPosition) - destination
  const tickDistance = remainingDistance / remainingTicks
  recursiveScrollTo(destination, duration, tickDuration, tickDistance, remainingTicks)
}

// separate function so that you dont have to get the current position multiple times
// could definitely be refactored to be better
const recursiveScrollTo = (destination, duration, tickDuration, tickDistance, ticks) => {
  if (ticks < 0) {
    return
  }
  setTimeout(function() {
    document.getElementById("timeline").scrollTo(destination + tickDistance * ticks, 0)
    recursiveScrollTo(destination, duration, tickDuration, tickDistance, ticks - 1)
  }, tickDuration);
}
