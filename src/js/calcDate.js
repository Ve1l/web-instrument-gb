import { DateTime } from 'luxon'

export default function calcDiff(dateFromString, dateToString) {
  if (dateFromString < dateToString) {
    ;[dateToString, dateToString] = [dateFromString, dateToString]
  }

  const dateFrom = DateTime.fromISO(dateFromString)
  const dateTo = DateTime.fromISO(dateToString)

  const diff = dateFrom.diff(dateTo, ['years', 'months', 'days']).toObject()

  return diff
}
