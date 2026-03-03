import React, { useState } from 'react'
import Child from './Child'


const ReactMemo = () => {
  const [count, setCount] = useState(0);
console.log("Parent");


  // let update = () => {
  //   set
  // }
  return (
    <div>
      <h1>ReactMemo</h1>
      <h1>{count}</h1>
     
      
      <button onClick={()=> setCount(count+1)}>Update</button>
      <Child name = {"prabin"}/>
    </div>
  )
}

export default ReactMemo