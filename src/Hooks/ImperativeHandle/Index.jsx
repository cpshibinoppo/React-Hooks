import React, { useRef } from 'react';
import Counter from './Conter'

export default function Index() {
    const counterRef = useRef()
  return (
    <div>
        <Counter ref={counterRef}/>
        <button onClick={()=>counterRef.current.reset()}>rest</button>
    </div>
  )
}
