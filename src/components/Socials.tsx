import Link from 'next/link'
import React from 'react'
import { FaYoutube, FaInstagram, FaFacebookSquare, FaDrum } from "react-icons/fa"

const Socials = () => {
  return (
    <div className='fixed flex z-30 flex-col items-center bottom-6 left-3 w-auto p-1 rounded-md text-[2rem] text-white bg-white/5'>
        <Link href="https://www.facebook.com/people/Decode/100040249697899/" target={"_blank"}><FaFacebookSquare/></Link>
        <Link href="https://bandzone.cz/decodemusic" target={"_blank"}><FaDrum/></Link>
        <Link href="https://www.instagram.com/decode_officialband/" className='py-1' target={"_blank"}><FaInstagram/></Link>
        <Link href="https://www.youtube.com/channel/UCrAWaFd3XByZW-Iw6Ymu6zw" target={"_blank"}><FaYoutube/></Link>
    </div>
  )
}

export default Socials