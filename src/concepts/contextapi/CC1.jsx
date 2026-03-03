import React, { useContext } from 'react'
import C2 from './C2'
import { GlobalContext } from './ContextAPI'

const CC1 = () => {
  const res = useContext(GlobalContext)
  console.log(res);
  
  return (
    <div>
      <C2/>
    </div>
  )
}

export default CC1