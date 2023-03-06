import Image from 'next/image'
import { Inter } from 'next/font/google'
import Title from '@/components/Title'
import Socials from '@/components/Socials'
import About from '@/components/About'
import Band from '@/components/Band'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className=''>
        <Socials/>
      <section className="title">
        <Title/>
      </section>
      <section className='about'>
        <About/>
      </section>
      <section className="band">
        <Band/>
      </section>
      </div>
    </main>
  )
}
