import React from 'react'
import C4 from './C4'

const C3 = ({data}) => {
  const userdata = {
    ...data, password: 12345
  }
  return (
    <div>
      <C4 data = {userdata}/>
    </div>
  )
}

export default C3