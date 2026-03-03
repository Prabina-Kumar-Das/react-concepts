import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate()

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
    localStorage.setItem("userDetails", JSON.stringify(data))

    toast.success("Registration Sucessful")
    navigate("/login")
    
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-gradient-to-r from-blue-200 to-fuchsia-300 p-8 rounded-xl shadow-md w-[350px]" onSubmit={handleSubmit}>
        
        <h1 className="text-2xl font-semibold text-center mb-6 text-white">
          Register
        </h1>

        <input
          type="email" placeholder="Email" className="w-full border p-2 rounded-md mb-4 border-white" onChange={handleInput} name="email" value={data.email}
        />

        <input
          type="password" placeholder="Password" className="w-full border p-2 rounded-md mb-4 border-white" onChange={handleInput} name="password" value={data.password}
        />

        <button className="w-full bg-green-500 text-white py-2 rounded-md mb-4 cursor-pointer">
          Register
        </button>


        <p className="text-sm text-center">
          Already have an account?{" "}
          <span className="text-green-500 cursor-pointer">
            <Link to="/login">Login</Link>
          </span>
        </p>

      </form>
    </div>
  );
};

export default Register;