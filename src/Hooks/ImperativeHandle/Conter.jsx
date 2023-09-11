import React, { useState , forwardRef, useImperativeHandle } from 'react'

function Conter(props,ref) {

    const [count,setCount] = useState(0);

    const increment = ()=>{
        setCount(count + 1);
    }

    const decrement = ()=>{
        setCount(count - 1);
    }

    const reset = ()=>{
        setCount(0);
    }
    useImperativeHandle(ref,()=>({reset}))
  
  return (
    <div>
        <p>count:{count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default forwardRef(Conter)