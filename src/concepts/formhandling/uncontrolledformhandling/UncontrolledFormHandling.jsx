// import { log } from 'console';
import React, { useRef } from 'react'
import { toast, Zoom } from 'react-toastify';


const UncontrolledFormHandling = () => {
  const UserNameRef = useRef(null);

  const genderRef = useRef(null);

  // console.log(useRef());
  // console.log(UserNameRef);
  
  
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  // console.log(UserNameRef.current.value);

  const userName = UserNameRef.current.value;
  const gender = genderRef.current.value;
  
  if(!userName) {
    // alert
    // console.log(userName);
    toast.error("All Fields are Required!", {position:"top-center", transition: Zoom, autoClose:5000})
    return
  }
  console.log(userName);
  console.log(gender);
  
  }
  
  return (
    <>
      <form onSubmit={submitForm}>
        <input type="text" placeholder='Enter Your Name ' ref={UserNameRef}/>
        <label htmlFor="male">
          <input type="radio" value="male" id='male' name='gender' ref={genderRef} />Male
        </label>

        <label htmlFor="female">
          <input type="radio" value="female" id='female' name='gender' ref={genderRef}/>Female
        </label>

        <label htmlFor="others">
          <input type="radio" value="others" id='others' name='gender' ref={genderRef}/>Others
        </label> <br />
        <button>sub</button>

      </form>
    </>
  )
}

export default UncontrolledFormHandling