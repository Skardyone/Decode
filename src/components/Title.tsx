import React from 'react'
import Logo from "../../assets/design/decode_final_bile.png"
import Kapela from "../../assets/design/kapela_vyrezy.png"
import Image from 'next/image'
import Link from 'next/link'

const Title = () => {
  return (
    <div className='h-full w-full flex flex-col items-center bg-[#212139] py-8 px-8'>
        <div className='logo w-44'>
            <Image alt='logo' src={Logo}/>
        </div>
        <div className='hero w-full mix-blend-lighten mb-8'>
            <Image alt='kapela' src={Kapela}/>
        </div>
        <Link href="/" className="onas w-full mb-8 flex justify-center">
            <button className='uppercase  bg-[#50A983] p-3 w-[80%] text-[1.3rem] text-white rounded-md '>o nás</button>
        </Link>
        <div className='flex flex-row  w-full gap-2 text-white'>
            <Link href="/" className='basis-1/2 border-2 border-[#50A983] rounded-md p-3 flex items-center justify-center'><button className="kontakt uppercase  text-[1rem]">kontakty</button></Link>
            <Link href="/" className='basis-1/2 border-2 border-[#50A983] rounded-md p-3 flex items-center justify-center'><button className="poradatele uppercase  text-[1rem]">pro pořadatele</button></Link>
        </div>
    </div>
  )
}

export default Title