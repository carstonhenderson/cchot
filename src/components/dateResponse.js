import React from 'react'
import moment from 'moment'

const dateResponse = ({ date, available }) => (
  <>
    <h1 className="text-xl px-2 text-center">
      Can Carston hang out{' '}
      {date.isSame(moment(), 'day')
        ? 'today'
        : `on ${date.format('dddd, MMMM Do')}`}
      ?
    </h1>
    <h2
      className={`text-6xl font-bold ${
        available ? 'text-green-500' : 'text-red-500'
      }`}
    >
      {available ? 'YES' : 'NO'}
    </h2>
  </>
)

export default dateResponse
