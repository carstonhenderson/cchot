import React from 'react'

const dateResponse = ({ available }) => (
  <>
    <h1 className="text-xl">Can Carston hang out today?</h1>
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
