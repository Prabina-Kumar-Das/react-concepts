// import { json } from "node:stream/consumers";
import React, { useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast, Zoom } from "react-toastify";

const Login = () => {
  const navigate = useNavigate()
  // const eyeRef = useRef()

  const [passwordIcon, setPasswordIcon] = useState(false)


  const handleIcon = () => {
    setPasswordIcon(!passwordIcon);
  }
  const [data, setData] = useState(
    {
      email: "",
      password: ""
    }
  );

  const handleInput = (e) => {
    const {name, value}= e.target;
    setData({...data, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    // localStorage.setItem("userDetails", JSON.stringify(data))
    const userdata = JSON.parse(localStorage.getItem("userDetails"));


    if(data.email !== userdata.email || data.password !== userdata.password){
      console.log("Invalid Details");
      toast.error("Invalid credentials")
      return 
    }
    localStorage.setItem("jwt_token", JSON.stringify("abcde"));
    toast.success("Login Sucessful")
    navigate("/dashboard")
    // console.log("Login Sucess");
    

    // console.log(userdata);
    
    
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-gradient-to-r from-blue-200 to-fuchsia-300 p-8 rounded-xl shadow-md w-[350px]" onSubmit={handleSubmit}>
        
        <h1 className="text-2xl font-semibold text-center mb-6 text-white">
          Login
        </h1>

        <input
          type="email" placeholder="Email" className="w-full border p-2 rounded-md mb-4 border-white" onChange={handleInput} name="email" value={data.email}
        />

        <div className="flex relative">
        <input
          type={passwordIcon ? "text" : "password"} placeholder="Password" className="w-full border p-2 rounded-md mb-4 border-white" onChange={handleInput} name="password" value={data.password} 
        />
        {
          passwordIcon ? <AiOutlineEye className="absolute right-3 top-3" onClick={handleIcon}/> : <AiOutlineEyeInvisible className="absolute right-3 top-3" onClick={handleIcon}/>
        }

        
        
        </div>

        <button className="w-full bg-green-500 text-white py-2 rounded-md mb-4 cursor-pointer">
          Login
        </button>


        <p className="text-sm text-center">
          Already have an account?{" "}
          <span className="text-green-500 cursor-pointer">
            <Link to="/register">Register</Link>
          </span>
        </p>

      </form>
    </div>
  );
};

export default Login;