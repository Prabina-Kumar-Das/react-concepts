import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [val, setval] = useState(0);
  const fdata = () => {
    console.log("Fdata");
    
  }
useEffect(()=> {
  fdata()
}, [count, val])


  return (
    <div>
      <p>Use StateHook</p>
      <h2>{count}</h2>
      <h2>{val}</h2>
      <button onClick={()=>setCount(count+1)}>Update</button>
      <button onClick={() => setval(val + 10)}>Update Value</button>
    </div>
  )
}

export default UseEffectHook