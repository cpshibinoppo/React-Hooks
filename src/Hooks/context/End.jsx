import React, { useContext } from 'react'
import { ThemeContext } from './context'

function End() {
    const theme = useContext(ThemeContext);
    console.log(theme);
  return (
    <div>End</div>
  )
}

export default End