import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
  const [count, setCount] = useState(0)
  console.log(count);
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count+1)}>click Parent</button>
      <Child count = {count} setCount = {setCount} />
    </div>
  )
}

export default Parent