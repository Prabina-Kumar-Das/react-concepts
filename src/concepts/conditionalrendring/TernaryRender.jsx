import React from 'react'

const TernaryRender = () => {
  const result = true;
  let percentage = 40;
  let theme = "light"
  return (
    <div>
      {result ? <h1>Hello</h1> : <h1>Bye</h1>}
    
      {percentage >= 70 ? <p>A grade</p>: (percentage >=50 && percentage <= 69) ? <p>B Grade</p> : <p> You Failed!</p>}

      <h1 style = {theme=== "dark"? {backgroundColor:"red"}:{backgroundColor:"blue"}}>TEXT</h1>

      <div className={`box ${theme === "dark" ? "dark" : "light"}`}> Hello</div>
    </div>

  )
}

export default TernaryRender