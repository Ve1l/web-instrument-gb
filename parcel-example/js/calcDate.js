import { DateTime } from 'luxon'

export default function calcDateDiff(dateFromString, dateToString) {
  console.log(dateFromString, dateToString)
  if (dateFromString < dateToString) {
    ;[dateToString, dateToString] = [dateFromString, dateToString]
  }

  const dateFrom = DateTime.fromISO(dateFromString)
  const dateTo = DateTime.fromISO(dateToString)

  const dateDiff = dateFrom.diff(dateTo, ['years', 'months', 'days']).toObject()

  return dateDiff
}
