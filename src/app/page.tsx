import Image from 'next/image'
import { Inter } from 'next/font/google'
import Title from '@/components/Title'
import Socials from '@/components/Socials'
import About from '@/components/About'
import Band from '@/components/Band'
import Sticky from '@/components/Sticky'
import Koncerty from '@/components/Koncerty'
import Player from '@/components/Player'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className=''>
        <Socials/>
        <Sticky/>
      <section className="title">
        <Title/>
      </section>
      <section className='about'>
        <About/>
      </section>
      <section className="band">
        <Band/>
      </section>
      <section className="player">
        {/*<Player/>*/ }
      </section>
      <section id="koncerty" className="koncerty">
        <Koncerty/>
      </section>
      </div>
    </main>
  )
}
