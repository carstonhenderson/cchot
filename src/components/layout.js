import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './layout.css'

const Layout = ({ children }) => {
  const [height, setHeight] = useState('100vh')

  useEffect(() => {
    setHeight(window.innerHeight)
  })

  return (
    <main
      className="bg-gray-900 text-gray-100 flex flex-col justify-center items-center"
      style={{ height: height }}
    >
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
