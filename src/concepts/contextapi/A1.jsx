import React, { useContext } from 'react'
import { GlobalContext } from './ContextAPI'

const A1 = () => {
  const data = useContext(GlobalContext)
  console.log(data);
  
  return (
    <div>A1</div>
  )
}

export default A1