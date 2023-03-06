import Image from 'next/image'
import { Inter } from 'next/font/google'
import Title from '@/components/Title'
import Socials from '@/components/Socials'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className=''>
        <Socials/>
      <section className="title">
        <Title/>
      </section>
      </div>
    </main>
  )
}
