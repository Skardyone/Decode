import React from 'react'
import { FaYoutube, FaInstagram, FaFacebookSquare } from "react-icons/fa"

const Socials = () => {
  return (
    <div className='fixed flex flex-row bottom-6 left-6 w-auto p-1 rounded-md text-[2.5rem] text-white bg-white/5'>
        <div><FaFacebookSquare/></div>
        <div className='px-2'><FaInstagram/></div>
        <div ><FaYoutube/></div>
    </div>
  )
}

export default Socials