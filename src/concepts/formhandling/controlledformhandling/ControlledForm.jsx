import React, { useState } from 'react'

const ControlledForm = () => {

  const [formData, setformData] = useState({
    username: "",
    // email: "",
    // password: "",
    // gender: ""
  });


  const [error, setError] = useState(null);



  const urernameChange = (e) => {
    const {name, value} = e.target;
    // setUsername(value)


    setError(null)
    setformData({...formData, [name]: value})

    

  }
  const formSubmit = (e) => {
    e.preventDefault();

    if(!formData.username) {
      setError(true)
    } 

    setformData({
      username: ""
    })



  }
  return (
    <div>
      <form action="" onSubmit={formSubmit}>
        <input type="text" placeholder='username' name='username' onChange={urernameChange} value={formData.username}/>

        {
          error ? <p className='text-red-600'>Username Required</p> : ""
        }

        {/* <input type="email" placeholder='email' name='email' onChange={urernameChange}/>
        <input type="password" placeholder='password' name='password' onChange={urernameChange}/>
        <input type="text" placeholder='gender' name='gender' onChange={urernameChange}/> */}
        <button>click</button>
      </form>

      <p>{formData.username}</p>
      {/* <p>{formData.email}</p>
      <p>{formData.password}</p>
      <p>{formData.gender}</p> */}
      

    </div>
  )
}

export default ControlledForm