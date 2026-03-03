import React, { useState } from 'react'
import Child from './Child'


const UseCallbackHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count+1)}>update</button>
      <Child/>
    </div>
  )
}

export default UseCallbackHook