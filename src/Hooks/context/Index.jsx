import React, { createContext, useState } from 'react'
import  Center  from './Center'
import { ThemeContext } from './context'

function Index() {
    const [user] = useState('shibin cp')
  return (
    <div>
        <ThemeContext.Provider value={user} >
        <Center></Center>
        </ThemeContext.Provider>
    </div>
  )
}

export default Index