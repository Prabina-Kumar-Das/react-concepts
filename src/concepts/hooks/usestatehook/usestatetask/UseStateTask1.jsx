import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaHeartBroken, FaRegHeart } from 'react-icons/fa';
import { IoIosHeart, IoMdHeartEmpty } from 'react-icons/io';

const UseStateTask1 = () => {
  // const [proposal, setProposal] = useState(null);
  // const accpect = () => {
  //   setProposal(true)
  // }
  // const rejected = () => {
  //   setProposal(false)
  // }
  // const reset = () => {
  //   setProposal(null)
  // }

  const [proposal, setProposal] = useState(<IoMdHeartEmpty size={300} />);
  const accpect = () => {
    setProposal(<IoIosHeart size={300} fill='red'/>)
  }
  const rejected = () => {
    setProposal(<FaHeartBroken size={300} fill='red'/>)
  }
  const reset = () => {
    setProposal(<IoMdHeartEmpty size={300} />)
  }
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='h-[400px] w-[400px] border-red-500 border-4 flex flex-col justify-evenly items-center'>
        {/* {
          proposal===null ? <IoMdHeartEmpty size={300} /> : proposal=== true ? <IoIosHeart size={300} fill='red'/> : <FaHeartBroken size={300} fill='red'/>
        } */}
        {
          proposal
        }
        <div className='h-[40px] w-full flex justify-evenly items-center'>
          <button onClick={accpect} className='p-2 bg-green-500 rounded-lg'>Accpect</button>
          <button onClick={rejected} className='p-2 bg-red-500 rounded-lg'>Reject</button>
          <button onClick={reset} className='p-2 bg-blue-500 rounded-lg'>Reset</button>

        </div>
      </div>
      
    </div>
  )
}

export default UseStateTask1