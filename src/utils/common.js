// timestamp -> YYYY-MM-DD
export function timeStampFilter(timestamp) {
  let timeStamp = timestamp
  if (!Number.isInteger(timestamp)) timeStamp = parseInt(timestamp)
  const date = new Date(timeStamp)

  const format = {
    YYYY: date.getFullYear().toString(),
    MM: (date.getMonth() + 1).toString(),
    DD: date.getDate().toString(),
  }

  for (const item in format) {
    format[item] = format[item][1] ? format[item] : '0' + format[item][0]
  }

  const dateString = [format.YYYY, format.MM, format.DD].join('-')
  return dateString
}
