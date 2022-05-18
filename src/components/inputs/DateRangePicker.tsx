import { useState } from 'react'
import { DateRange, RangeKeyDict } from 'react-date-range'
import { addDays } from 'date-fns'
import { ko } from 'date-fns/locale'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DateRangePicker = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection',
    },
  ])

  const onDateSelect = (item: RangeKeyDict) => {
    console.log(item.selection)
  }

  return (
    <DateRange
      editableDateInputs
      onChange={onDateSelect}
      moveRangeOnFirstSelection={false}
      ranges={state}
      months={2}
      direction='horizontal'
      locale={ko}
    />
  )
}

export default DateRangePicker
