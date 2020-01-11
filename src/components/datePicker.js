import React from 'react'

const datePicker = ({ date, handleChange }) => (
  <div className="w-full px-2">
    <input
      type="date"
      value={date}
      onChange={handleChange}
      className="bg-gray-800 rounded py-2 px-4 appearance-none leading-normal w-full shadow"
    />
  </div>
)

export default datePicker
