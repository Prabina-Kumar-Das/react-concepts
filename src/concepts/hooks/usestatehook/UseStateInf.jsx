import React, { useState } from 'react'

const UseStateInf = () => {
  const [count, setCount] = useState(0);
  
  console.log(count);
  // const update = () => {
  //   setCount(count+1)
  // }
  
  // update()


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> {setCount(count+1)}}>Click</button>
    </div>
  )
}

export default UseStateInf