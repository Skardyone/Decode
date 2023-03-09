"use client";
import AudioPlayer from "react-h5-audio-player"
import 'react-h5-audio-player/lib/styles.css'
import { client } from "../app/api/SanityClient"
import { groq } from "next-sanity"
import { useEffect, useState } from "react";

const Player = () => {
  const [songs, setSongs] = useState<string[]>([])
  const query = groq`
  *[_type == "playlist"] {
  "url":song.asset->url}
  `
  useEffect(() => {
    const fetchData = async() => {      
      const songs = await client.fetch(query);
      setSongs(songs);      
      fetchData()
    }
  }, [])
  console.log(songs.length);
 
  return (
    <div>         
          <AudioPlayer key={songs[0]} src={""} autoPlay={false}/>
            
    </div>
  )
}

export default Player