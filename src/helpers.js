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
