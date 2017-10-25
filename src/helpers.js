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
