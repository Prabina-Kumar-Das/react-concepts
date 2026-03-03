import React, { useState } from 'react'

const UseStateHook = () => {
  const [count, setCount] = useState(0)
  // console.log(data);
  const updateValue = () =>{
    setCount(count+1);
  }
  const subValue = () => {
    setCount(count-1);
  }
  const reset = () => {
    setCount(0)
  }
  console.log("Hello");
  
  return (
    <div className='h-[400px] w-[400px] flex items-center justify-center'>
      <h1 >{count}</h1>
      <button onClick={updateValue} className='p-2 border-2 border-black'>+1</button>
      <button onClick={subValue} className='p-2 border-2 border-black'>-1</button>
      <button onClick={reset} className='p-2 border-2 border-black'>Reset</button>

    </div>
  )
}

export default UseStateHook