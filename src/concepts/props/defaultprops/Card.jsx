import React from 'react'

const Card = ({data:{username="Sundari", age=21 }}) => {
  return (
    <div>
      <h1>{username}</h1>
      <h2>{age}</h2>
      <hr />
    </div>
  )
}

export default Card