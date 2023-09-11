import React, { useState } from 'react'

function State() {
  const [count, setCount] = useState(0)
  function DecrementButton({count}) {
    console.log(count);
    if(count === 0){
      return <button className='btn btn-primary' disabled onClick={() => setCount(count - 1)}>Decrement</button>
    }else{
      return <button className='btn btn-primary' onClick={() => setCount(count - 1)}>Decrement</button>
    }
  }
  return (
    <>
    <h2>This is the useState</h2>
    <div>{count}</div>
    <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Increment</button>
    <DecrementButton count={count} />
    </>

  )
}


export default State