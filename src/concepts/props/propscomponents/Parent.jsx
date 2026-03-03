import React from 'react'
import Child from './Child'

const Parent = () => {
  let username = "Leela"
  return (
    <div>
      <Child name ={username} age = {22}/>
      {/* <Child name ="Mala" age = {21}/> */}
    </div>
  )
}

export default Parent