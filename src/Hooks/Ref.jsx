import React, { useEffect, useRef, useState } from 'react'
// ? Ref not print return value i mean not showing the web view
function Ref() {
    const [count,setCount] = useState(0);
    const countRef = useRef(0);

    const handleIncrement = () => {
        setCount(count + 1);
        countRef.current++;

        console.log('State:', count);
        console.log('Ref:', countRef.current);
    }
    // ? ref another use
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    })
  return (
    <div>
        Count:{count}
        <button onClick={handleIncrement}>Increment</button>
        <input type="text" ref={inputRef} />
    </div>
  )
}

export default Ref