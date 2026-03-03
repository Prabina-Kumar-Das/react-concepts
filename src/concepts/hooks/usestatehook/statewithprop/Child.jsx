import React from 'react'

const Child = ({count, setCount}) => {
  console.log(count);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Click Child</button>
    </div>
  )
}

export default Child