"use client";
import React from 'react'
import Image from 'next/image'
import Verunka from "../../assets/design/vyreu_veru.png"
import Martin from "../../assets/design/vyreu_martin.png"
import Milan from "../../assets/design/vyreu_milan.png"
import Filip from "../../assets/design/vyreu_filip.png"
import Vlada from "../../assets/design/vyreu_vlada.png"
import { motion } from "framer-motion"

const Band = () => {
  return (
    <div className='w-full px-4 bg-[#212139] pb-8'>
        <div className='flex w-full flex-col justify-evenly'>
            <motion.div initial={{y:120, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:1}} className="verunka w-full flex flex-row justify-between gap-2 -mb-8 h-auto">
                <div className="basis-1/2 flex items-center text-[1.8rem] text-white uppercase text-left"><h2 className='w-full'>Verunka Kasíková</h2></div>
                <div className='basis-1/2 flex items-center'><Image src={Verunka} alt="" className='h-auto mix-blend-lighten'/></div>
            </motion.div>
            <motion.div initial={{y:120, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:1}} className="verunka w-full flex flex-row-reverse justify-center h-auto -mb-5">
                <div className="basis-1/2 flex items-center text-[1.8rem] text-white uppercase text-right"><h2 className='w-full'>Vláďa Čech</h2></div>
                <div className='basis-1/2 flex items-center object-contain'><Image src={Vlada} alt="" className='h-auto mix-blend-lighten' /></div>
            </motion.div>
            <motion.div initial={{y:120, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:1}} className="verunka w-full flex flex-row justify-center h-auto -mb-5">
                <div className="basis-1/2 flex items-center text-[1.8rem] text-white uppercase text-left"><h2 className='w-full'>Martin Štembera</h2></div>
                <div className='basis-1/2 flex items-center object-contain'><Image src={Martin} alt="" className='h-auto mix-blend-lighten' /></div>
            </motion.div>
            <motion.div initial={{y:120, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:1}} className="verunka w-full flex flex-row-reverse justify-center h-auto -mb-3">
                <div className="basis-1/2 flex items-center text-[1.8rem] text-white uppercase text-right"><h2 className='w-full'>Fíla Fiedler</h2></div>
                <div className='basis-1/2 flex items-center object-contain'><Image src={Filip} alt="" className='h-auto mix-blend-lighten' /></div>
            </motion.div>
            <motion.div initial={{y:120, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:1}} className="verunka w-full flex flex-row justify-center h-auto">
                <div className="basis-1/2 flex items-center text-[1.8rem] text-white uppercase text-left"><h2 className='w-full'>Milan Srvátka</h2></div>
                <div className='basis-1/2 flex items-center object-contain'><Image src={Milan} alt="" className='h-auto mix-blend-lighten' /></div>
            </motion.div>
        </div>
    </div>
  )
}

export default Band