"use client";
import AudioPlayer from "react-h5-audio-player"
import 'react-h5-audio-player/lib/styles.css'
import { client } from "../app/api/SanityClient"
import { groq } from "next-sanity"
import { useEffect, useState } from "react";


interface Song{
  name: string;
  url: string;
}

const Player = () => {

  const [songs, setSongs] = useState<Song[]>([]);
  const [currentIndex, setcurrentIndex] = useState(0)

  const query = groq`
   *[_type == "playlist"] {
    "name":nazev,
    "url":song.asset->url}
  `
 
  useEffect(() => {
    client.fetch<Song[]>(query).then(songs => {
      const songList = songs.map(song => {
        return {...song}
      });
      setSongs(songList);
      
    })
  }, []) 
  console.log(songs[0])
  const handleClickPrevious = (): void => {
   if (currentIndex < 1 && currentIndex !== 0) {
    setcurrentIndex(currentIndex - 1)
   } else {
    setcurrentIndex(0)
   }
  }
  const handleClickNext = (): void => {
    if ( currentIndex < songs.length -1) {
      setcurrentIndex(currentIndex + 1)
     } else {
      setcurrentIndex(songs.length -1)
     }
  }

 
  return (
    <div className="h-auto flex flex-col justify-center">       
           { songs.length > 0 ? <AudioPlayer src={songs[currentIndex].url} autoPlayAfterSrcChange={true} className="bg-transparent text-white uppercase text-center shadow-none" autoPlay={false} customVolumeControls={[]}
             customAdditionalControls={[]} showSkipControls={true} showJumpControls={false}
             header={songs[currentIndex].name} onClickPrevious={handleClickPrevious} onClickNext={handleClickNext}
             />   : <div></div>   
           }
         
    </div>
  )
}

export default Player