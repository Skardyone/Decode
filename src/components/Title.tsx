"use client";
import React, { useState } from 'react'
import Logo from "../../assets/design/decode_final_bile.png"
import Kapela from "../../assets/design/kapela_vyrezy.png"
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link';
import { motion } from "framer-motion"
import Kontakt from './Kontakt';

const Title = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenModal = () => {
        setIsOpen(true);
    }
    const handleCloseModal = () => {
        setIsOpen(false);
    }
  return (
    <div className='h-full w-full flex flex-col items-center bg-[#212139] py-8 px-8'>
        <motion.div initial={{y:-120, opacity:0}} animate={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:1}}  className='logo w-44'>
            <Image alt='logo' src={Logo}/>
        </motion.div>
        <div className='hero w-full mix-blend-lighten mb-8'>
            <Image alt='kapela' src={Kapela}/>
        </div>
        <motion.div initial={{y:120, opacity:0}} animate={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:1}} className="w-full mb-8">
            <ScrollLink to="about" smooth={true} className="onas  flex justify-center">
                <button className='uppercase  bg-[#50A983] p-3 w-[80%] text-[1.3rem] text-white rounded-md '>o nás</button>
            </ScrollLink>
        </motion.div>
        <motion.div initial={{y:120, opacity:0}} animate={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:1.3}} className='flex flex-row  w-full gap-2 text-white'>
            <button onClick={handleOpenModal} className="kontakt uppercase basis-1/2 border-2 border-[#50A983] rounded-md p-3 flex items-center justify-center  text-[1rem]">kontakt</button>
            <Kontakt isOpen={isOpen} onClose={handleCloseModal} />
            <Link href="/" className='basis-1/2 border-2 border-[#50A983] rounded-md p-3 flex items-center justify-center'><button className="poradatele uppercase  text-[1rem]">pro pořadatele</button></Link>
        </motion.div>
    </div>
  )
}

export default Title