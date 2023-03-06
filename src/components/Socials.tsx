import React from 'react'
import { FaYoutube, FaInstagram, FaFacebookSquare } from "react-icons/fa"

const Socials = () => {
  return (
    <div className='fixed flex flex-col items-center bottom-6 left-3 w-auto p-1 rounded-md text-[2rem] text-white bg-white/5'>
        <div><FaFacebookSquare/></div>
        <div className='py-1'><FaInstagram/></div>
        <div ><FaYoutube/></div>
    </div>
  )
}

export default Socials