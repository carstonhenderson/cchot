import React from 'react'

const datePicker = ({ date, handleChange }) => (
  <input
    type="date"
    value={date}
    onChange={handleChange}
    className="bg-gray-800 rounded py-2 px-4 appearance-none leading-normal w-full"
  />
)

export default datePicker
