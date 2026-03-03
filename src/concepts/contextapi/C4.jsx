import React, { useContext } from 'react'
import { GlobalContext } from './ContextAPI'

const C4 = () => {
  const res = useContext(GlobalContext);

  console.log(res);
  
  return (
    <div>C4</div>
  )
}

export default C4