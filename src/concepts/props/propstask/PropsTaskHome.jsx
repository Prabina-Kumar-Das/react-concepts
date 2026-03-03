import React from 'react'
import Cardss from './propsComponents/Cardss'

const PropsTaskHome = () => {
  const Name = [
    {
      username: "Prabin"
    },
    {
      username: "Soumya"
    },
    {
      username: "Varun"
    },
    {
      username: "Dev Prakash"
    }
  ]
  return (
    <div>
      {
      Name.map((name) => {
       return <Cardss data= {name}/>
      })
    }
    </div>
  )
}

export default PropsTaskHome