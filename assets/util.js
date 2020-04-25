export const dateTimeFormatter = (dateString) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat().format(date)
}
