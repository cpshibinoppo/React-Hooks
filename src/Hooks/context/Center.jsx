import React, { useContext } from 'react'
import End from './End'
import { ThemeContext } from './context'

function Center() {
    const theme = useContext(ThemeContext)
  return (
    <div>
        {theme}
        <End></End>
    </div>
  )
}

export default Center