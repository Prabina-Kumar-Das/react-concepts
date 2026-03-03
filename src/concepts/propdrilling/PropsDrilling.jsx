import React from 'react'
import C1 from './C1'

const PropsDrilling = () => {
  const data = {
    username: "Prabina",
    password: 1234
  }
  return (
    <div>
      <C1 data = {data}/>
    </div>
  )
}

export default PropsDrilling