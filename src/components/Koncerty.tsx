"use client";
import React, { useEffect, useState } from 'react'
import { client } from "../app/api/SanityClient"
import { groq } from "next-sanity"

interface Event{
  nazev: string,
  cas: Date,
  misto: string,
}

const Koncerty = () => {

  const [events, setEvents] = useState<Event[]>([])

  const query = groq`
  *[_type == "koncert"] | order(cas asc){
    nazev,
      cas,
      misto,    
  }
  `
  useEffect(() => {
    client.fetch<Event[]>(query).then(events => {
      const eventsWithDate = events.map(event => {
        const cas = new Date(event.cas);
        return {...event,cas};        
      });
      setEvents(eventsWithDate);
      console.log(eventsWithDate);
    })
  }, [])

  return (
    <div className='h-full bg-[#212139] py-8 px-6 justify-center'>
      <h1 className='uppercase text-white text-[1.8rem] text-center mb-5'>koncerty</h1>
      <div className='flex flex-col gap-2'>     
          {events.map((event, index) => {
          return (
          <div key={index} className="text-white uppercase text-[0.6rem] flex flex-row justify-between font-bold items-center  border-b-2 border-white/20" >
            <h2 className='basis-1/4 p-1 text-[#50A983]'>{event.cas.getDate()}/{event.cas.getMonth()}/{event.cas.getFullYear()}</h2>
            <h2 className='basis-1/4 p-1'>{event.nazev}</h2>
            <h2 className='basis-1/4 p-1 text-[#50A983]'>{event.cas.getHours()}:{(event.cas.getMinutes()<10?"0":"")+(event.cas.getMinutes())}</h2>
            <h2 className='basis-1/4 p-1'>{event.misto}</h2>
          </div>
          )
          })}        
      </div>
    </div>
  )
}

export default Koncerty