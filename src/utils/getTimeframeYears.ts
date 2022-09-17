export const getTimeframeYears = ([start, end]: [Date, Date | string]) => {
  const endString = typeof end !== 'string' ? end.getFullYear() : end
  return `${start.getFullYear()} - ${endString}`
}
