import React from 'react'
import Image from 'next/image'
import Verunka from "../../assets/design/vyreu_veru.png"
import Martin from "../../assets/design/vyreu_martin.png"
import Milan from "../../assets/design/vyreu_milan.png"
import Filip from "../../assets/design/vyreu_filip.png"
import Vlada from "../../assets/design/vyreu_vlada.png"

const Band = () => {
  return (
    <div className='w-full px-4 bg-[#212139] pb-8'>
        <div className='flex w-full flex-col justify-evenly'>
            <div className="verunka w-full flex flex-row justify-center px-10 h-72">
                <div className="basis-1/2 flex items-center text-[1.8rem] text-white uppercase text-center"><h2>Verunka Kasíková</h2></div>
                <div className='basis-1/2 flex items-center object-contain'><Image src={Verunka} alt="" className='w-64' /></div>
            </div>
            <div className="verunka w-full flex flex-row-reverse justify-center px-10 h-72">
                <div className="basis-1/2 flex items-center text-[1.8rem] text-white uppercase text-center"><h2>Vláďa Čech</h2></div>
                <div className='basis-1/2 flex items-center object-contain'><Image src={Vlada} alt="" className='w-64' /></div>
            </div>
            <div className="verunka w-full flex flex-row justify-center px-10 h-72">
                <div className="basis-1/2 flex items-center text-[1.8rem] text-white uppercase text-center"><h2>Martin Štembera</h2></div>
                <div className='basis-1/2 flex items-center object-contain'><Image src={Martin} alt="" className='w-64' /></div>
            </div>
            <div className="verunka w-full flex flex-row-reverse justify-center px-10 h-72">
                <div className="basis-1/2 flex items-center text-[1.8rem] text-white uppercase text-center"><h2>Fíla Fiedler</h2></div>
                <div className='basis-1/2 flex items-center object-contain'><Image src={Filip} alt="" className='w-64' /></div>
            </div>
            <div className="verunka w-full flex flex-row justify-center px-10 h-72">
                <div className="basis-1/2 flex items-center text-[1.8rem] text-white uppercase text-center"><h2>Milan Srvátka</h2></div>
                <div className='basis-1/2 flex items-center object-contain'><Image src={Milan} alt="" className='w-64' /></div>
            </div>
        </div>
    </div>
  )
}

export default Band