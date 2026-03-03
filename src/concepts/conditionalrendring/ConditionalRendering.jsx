import React from 'react'

const ConditionalRendering = () => {

  const result = true;
  if(result) {
    return <div>Hello</div>
  }
  else {
    return <div>Bye!!</div>
  }
}

export default ConditionalRendering