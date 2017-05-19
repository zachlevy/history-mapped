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
