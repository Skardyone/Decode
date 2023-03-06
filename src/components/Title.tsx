import React from 'react'
import Logo from "../../assets/design/decode_final_bile.png"
import Kapela from "../../assets/design/kapela_vyrezy.png"
import Image from 'next/image'

const Title = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center bg-[#212139] bg-[url("../../assets/asfalt-light.png")] pt-12 px-8'>
        <div className='logo w-48'>
            <Image alt='logo' src={Logo}/>
        </div>
        <div className='hero w-full mix-blend-lighten my-8'>
            <Image alt='kapela' src={Kapela}/>
        </div>
        <div className="onas bg-[#50A983] w-[80%] p-4 text-[1.5rem] text-white rounded-md text-center mb-8">
            <button className='uppercase'>o nás</button>
        </div>
        <div className='flex flex-row justify-evenly w-full gap-2 text-white'>
            <button className="kontakt uppercase border-2 border-[#50A983] p-3 text-[1rem] basis-1/2 rounded-md">kontakty</button>
            <button className="poradatele uppercase border-2 border-[#50A983] p-3 text-[1rem] basis-1/2 rounded-md">pro pořadatele</button>
        </div>
    </div>
  )
}

export default Title