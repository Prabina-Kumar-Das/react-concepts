import React from 'react'

const Cardss = ({data}) => {
  const {username} = data
  console.log(username);
  
  return (
    <div>
      <h1>
        {username}
      </h1>
    </div>
  )
}

export default Cardss