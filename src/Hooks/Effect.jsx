import React, { useEffect, useState } from 'react'

function Effect() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log("The count is :",count)
        return() =>{
            console.log("The count is Clanup")
        }
    },[count])
    function DecrementButton({count}) {
    if(count === 0){
        return <button className='btn btn-primary' disabled onClick={() => setCount(count - 1)}>Decrement</button>
    }else{
        return <button className='btn btn-primary' onClick={() => setCount(count - 1)}>Decrement</button>
    }
    }
    return (
    <>
    <h2>This is the useEffect</h2>
    <div>{count}</div>
    <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Increment</button>
    <DecrementButton count={count} />
    </>
    )
}

export default Effect