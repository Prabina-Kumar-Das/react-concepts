import React, { useState } from 'react'

const ControlledForm2 = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    course: ""
  })



  function handleInput(e) {
    const {name, value} = e.target;
    // const [{...formData, [name]: value}] = formData
    setFormData({...formData, [name]: value})


  }

  function handleForm(e) {
    e.preventDefault();

    console.log(formData);

    setFormData(
      {
        username: "",
        email: "",
        password: "",
        course: ""
      }
    )
    




  }

  const {username, email, password, course} = formData;
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" placeholder='name' name='username' onChange={handleInput} value={username}/>
        <input type="email" placeholder='email' name='email' onChange={handleInput} value={email}/>
        <input type="password" placeholder='password' name='password' onChange={handleInput} value={password}/>
        <label htmlFor="">Select Your Course</label>
        <select name="course" id="" value={course} onChange={handleInput}>
          
          <option value=""></option>
          <option value="Btech">Btech</option>
          <option value="Mca">Mca</option>
          <option value="Bsa">Bsa</option>
        </select>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default ControlledForm2