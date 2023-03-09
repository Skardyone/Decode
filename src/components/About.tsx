"use client";
import React from 'react'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className='w-full h-full px-10 bg-[#212139] py-8'>
        <motion.div initial={{y:120, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:1}} className='text-white flex justify-center text-center items-center text-[1.3rem]'>        
            <p>Jsme pětičlenná parta, ve které je dominantním nástrojem úžasný hlas naší zpěvačky. V našem repertoáru máme vlastní skladby a také do programu zařazujeme skladby například skupiny Paramore. Snažíme se o dramaturgické rozložení songů tak, aby si to posluchači pěkně užili a mohli si také parádně zařádit.</p>
        </motion.div>
    </div>
  )
}

export default About