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
      // First weekend of 2020 is Kennedy
      const control =
        day === 'Friday'
          ? moment('2020-01-03')
          : day === 'Saturday'
          ? moment('2020-01-04')
          : moment('2020-01-05')

      date.diff(control, 'days') % 2 === 0
        ? setAvailability(true)
        : setAvailability(false)
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
      <DateResponse date={date} available={availability} />
      <DatePicker
        date={date.format('YYYY-MM-DD')}
        handleChange={handleChange}
      />
    </div>
  )
}

export default DateChecker
