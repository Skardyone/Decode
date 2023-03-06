import React from 'react'
import Logo from "../../assets/design/decode_final_bile.png"
import Kapela from "../../assets/design/kapela_vyrezy.png"
import Image from 'next/image'
import Link from 'next/link'

const Title = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center bg-[#212139] pt-12 px-8'>
        <div className='logo w-48'>
            <Image alt='logo' src={Logo}/>
        </div>
        <div className='hero w-full mix-blend-lighten my-8'>
            <Image alt='kapela' src={Kapela}/>
        </div>
        <Link href="/" className="onas w-full mb-8 flex justify-center">
            <button className='uppercase  bg-[#50A983] p-3 w-[80%] text-[1.5rem] text-white rounded-md '>o nás</button>
        </Link>
        <div className='flex flex-row justify-center w-full gap-2 text-white'>
            <Link href="/"><button className="kontakt uppercase border-2 border-[#50A983] py-1 px-2 text-[1rem] basis-1/2 rounded-md">kontakty</button></Link>
            <Link href="/"><button className="poradatele uppercase border-2 border-[#50A983] py-1 px-2 text-[1rem] basis-1/2 rounded-md">pro pořadatele</button></Link>
        </div>
    </div>
  )
}

export default Title