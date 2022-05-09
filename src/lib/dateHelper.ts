export const getDateFromISOString = (iso: string) => {
  const date = new Date(iso)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return { year, month, day }
}

export const getDiffDate = (startDate: Date, endDate: Date) => {
  const diff = Math.abs(endDate.valueOf() - startDate.valueOf())
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export const formatDateString = (iso: string) => {
  const { year, month, day } = getDateFromISOString(iso)
  return `${year}년 ${month}월 ${day}일`
}
