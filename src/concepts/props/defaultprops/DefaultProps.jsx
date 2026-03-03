import React from 'react'
import Card from './Card'

const DefaultProps = () => {
  const data = [
    {
      username:"Sundari",
      age:21
    },
    {
      username: "Mala"
    },
    {
      age:24
    }
  ]
  return (
    <div>
      {
        data.map((ele) => {
          return <Card data = {ele}/>
        })
      }
    </div>
  )
}

export default DefaultProps