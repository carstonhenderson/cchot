import React, { useState } from 'react'
import DatePicker from '../components/datePicker'
import DateResponse from '../components/dateResponse'
import moment from 'moment'

const DateChecker = () => {
  const [date, setDate] = useState(moment())
  const [availability, setAvailability] = useState(false)

  const checkDate = date => {
    const day = date.format('dddd')

    if (day === 'Monday' || day === 'Tuesday') {
      setAvailability(false)
    } else if (day === 'Friday' || day === 'Saturday' || day === 'Sunday') {
      setAvailability(false)
    } else {
      setAvailability(true)
    }
  }

  const handleChange = e => {
    const newDate = e.target.value ? moment(e.target.value) : moment()

    setDate(newDate)

    checkDate(newDate)
  }

  return (
    <div className="h-screen flex flex-col justify-between items-center py-8 w-full max-w-md">
      <DateResponse available={availability} />
      <DatePicker
        date={date.format('YYYY-MM-DD')}
        handleChange={handleChange}
      />
    </div>
  )
}

export default DateChecker
