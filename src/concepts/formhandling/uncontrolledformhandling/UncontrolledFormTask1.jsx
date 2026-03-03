import React, { useRef } from "react";
import { FaFacebookSquare, FaRegUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiLock2Line } from "react-icons/ri";
import lady from "../../../assets/images/lady.png";
import thunder from "../../../assets/images/light.png";
import { toast, Zoom } from "react-toastify";

const UncontrolledFormTask1 = () => {
  const usernameRef = useRef("");
  const passwordRef = useRef("")

  const submitForm = (e) => {
    e.preventDefault();
    console.log("submitted");

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;


    if(!username || !password) {
      toast.error("All Fields are required!!", {position:"top-center", transition:Zoom})
      return
    } 
    toast.success("Registration Complete", {position:"top-right"})
    console.log(username);
    console.log(password);
    
    
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 to-indigo-200 relative overflow-hidden">


      <div className="h-[80px] w-[80px] bg-gradient-to-r from-violet-700 to-blue-400 absolute left-[120px] top-10 rounded-full z-0"></div>

      <div className="h-[80px] w-[80px]  bg-white absolute right-[120px] bottom-10 rounded-full z-0"></div>


      <form className="h-[80%] w-[80%] bg-gradient-to-r from-violet-900 to-blue-600 flex relative z-10 rounded-3xl" onSubmit={submitForm}>


        <div className="h-full w-[50%] bg-white flex justify-center items-center rounded-l-3xl relative z-10">
          <div className="h-auto w-auto flex flex-col items-center gap-2">
            <p className="text-2xl font-bold">LOGIN</p>
            <p className="text-sm text-slate-500">Lorem ipsum dolor sit amet.</p>

            <div className="w-64 h-9 flex bg-[#F3F1FF] items-center justify-start pl-2 gap-2 rounded-xl">
              <FaRegUser />
              <input
                type="text"
                placeholder="username"
                className="border-none h-full bg-transparent text-sm outline-none" ref={usernameRef}
              />
            </div>

            <div className="w-64 h-9 flex bg-[#F3F1FF] items-center justify-start pl-2 gap-2 rounded-xl">
              <RiLock2Line />
              <input
                type="text"
                placeholder="password"
                className="border-none h-full bg-transparent text-sm outline-none" ref={passwordRef}
              />
            </div>

            <button className="w-28 h-12 bg-gradient-to-r from-violet-400 to-indigo-700 rounded-xl text-white text-sm font-semibold">
              Login Now
            </button>

            <div className="w-64 h-9 flex items-center justify-evenly gap-2 rounded-xl">
              <hr className="w-14 bg-slate-400" />
              <p className="text-sm">
                <span className="font-bold cursor-pointer">Login</span> with Others
              </p>
              <hr className="w-14 bg-slate-400" />
            </div>

            <div className="w-64 h-9 flex border-[1.5px] border-slate-400 items-center justify-center gap-2 rounded-xl cursor-pointer">
              <FcGoogle size={25} />
              <p className="text-xs">Login with Google</p>
            </div>

            <div className="w-64 h-9 flex border-[1.5px] border-slate-400 items-center justify-center gap-2 rounded-xl cursor-pointer">
              <FaFacebookSquare size={25} fill="blue" />
              <p className="text-xs">Login With Facebook</p>
            </div>
          </div>
        </div>


        <div className="h-full w-[50%] flex items-center justify-center relative z-10">
          <div className="h-[360px] w-[300px] bg-slate-200 opacity-25 rounded-3xl border-white border-2 absolute z-10"></div>

          <div className="h-[360px] w-[300px] relative z-20 -bottom-8 -right-10">
            <img src={lady} alt="" />
          </div>

          <div className="h-[60px] w-[60px] flex items-center justify-center absolute z-30 left-[128px] bg-white rounded-full bottom-52">
            <img
              src={thunder}
              alt=""
              className="object-contain h-[80%] w-[80%]"
            />
          </div>
        </div>

      </form>
    </div>
  );
};

export default UncontrolledFormTask1;
