import React from 'react'

const Child = ({name : username, age}) => {

  
  
  return (
    <div className='propsdiv'>
      <h1>{username}</h1>
      <h1>{age}</h1>
    </div>
  )
}

export default Child