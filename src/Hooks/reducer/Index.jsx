import React, { useReducer } from 'react'

function reducer(state,action) {
    const {type} = action;
    switch (type) {
        case "increment":{
            const newCount = state.count + 1;
            const hasError = newCount > 5;
            return {...state,count: hasError ? state.count : newCount, error: hasError ? "Max 5" : null}
        }
        case "decrement":{
            // TODO: You can also do the same thing as above
            return {...state,count: state.count - 1}
        }
        default:
            return state;
    }
}

function Index() {
    const [state,dispatch] = useReducer(reducer,{
        count:0,
        error:null,
    });
  return (
    <div>
    <div>Count: {state.count}</div>
      {state.error && <div className='mb-2 text-red-500'>{state.error}</div>}
      <button className='mb-2' onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  )
}

export default Index