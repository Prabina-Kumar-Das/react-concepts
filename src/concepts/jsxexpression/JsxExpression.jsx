import React from 'react'

const JsxExpression = () => {
  const name = "OBITO"
  let demo = () => {
    console.log("Logo");
    
  }

  let istrue = false;
  //? JSX Expression used for accessing the JS variables and functions inside JSX then we use JSX Expression. Syntax: {}
  //? inside JSX Expression if we want to use conditional statement use Ternary operator.
  //? inside JSX Expression if we want to ittrate an Array statement use map().

  let users = ["leela", "mala", "sheela", "sharmila"];
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={demo}>click</button>
      <h1>{
            istrue ? <p>Access</p> : <p>Revoke</p>
          }
      </h1>

      {
        users.map((user)=> {
          console.log(user);
          return <h1>{user}</h1>
          
        })
      }
    </div>
  )
}

export default JsxExpression