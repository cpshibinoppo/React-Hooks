import React, { useId } from 'react'
// The id onlly chenge whan the command call two's
function Index() {
    const resId = useId()
  return (
    <div>
        <ul>
            <li id={resId} >Mohammed </li>
            <li id={resId} >Shibin</li>
            <li id={resId} >Cp</li>
        </ul>
    </div>
  )
}

export default Index