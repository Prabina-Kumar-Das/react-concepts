import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen h-[78px] flex items-center justify-around bg-gradient-to-r from-purple-300 to-blue-400 text-white'>
      <div className='h-full w-[10%] flex items-center justify-center font-bold text-2xl font-serif tracking-widest cursor-pointer'>Logo</div>
      <ul className='h-full w-[40%]  flex items-center justify-around font-xl font-semibold'>
        <li className='cursor-pointer hover:underline hover:underline-offset-4 transition-all duration-1000'><Link to="/home">Home</Link></li>
        <li className='cursor-pointer hover:underline hover:underline-offset-4'><Link to="/about">About</Link></li>
        <li className='cursor-pointer hover:underline hover:underline-offset-4'><Link to="/projects">Projects</Link></li>
        <li className='cursor-pointer hover:underline hover:underline-offset-4'><Link to="/contact">Contact</Link></li>
      </ul>
      <button className=' px-5 py-3 bg-[#6996eb] text-lg font-semibold rounded-xl hover:bg-[#4d82e5] hover:text-white transition-all duration-1000'><Link to="/login">Login</Link></button>
    </div>
  )
}

export default Navbar