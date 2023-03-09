import Image from 'next/image'
import { Inter } from 'next/font/google'
import Title from '@/components/Title'
import Socials from '@/components/Socials'
import About from '@/components/About'
import Band from '@/components/Band'
import Sticky from '@/components/Sticky'
import Koncerty from '@/components/Koncerty'
import Player from '@/components/Player'
import Divider from '@/components/Divider'
import Head from "next/head"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <head>
        <title>DECODE</title>
        <meta name="description" content='Wepage kapely Decode'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <link rel="icon" href='/decode_final_bile.png'/>
      </head>
      <div className='bg-[#212139]'>
        <Socials/>
        <Sticky/>
      <section className="title">
        <Title/>
      </section>
      <Divider/>
      <section className='about'>
        <About/>
      </section>
      <section className="band">
        <Band/>
      </section>
      <Divider/>
      <section className="player">
        {/*<Player/>*/ }
      </section>
      <section id="koncerty" className="koncerty">
        <Koncerty/>
      </section>
      <Divider/>
      </div>
    </main>
  )
}
