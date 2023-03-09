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

  const query = groq`
   *[_type == "playlist"] {
    "name":nazev,
    "url":song.asset->url}
  `

  /***useEffect(() => {
    client.fetch<Song[]>(query)
    .then((files) => {
      const songs = files.map(file => {
        return {...name,url};
      });
      setSongs(songlist);
    })
      
      console.log(songs);
    })
  }, []);**/
 
 
  return (
    <div>         
          <AudioPlayer src="https://cdn.sanity.io/files/60ctmdtx/production/03d3724f78ada7607754fed5129bb443cb086b8f.mp3
" autoPlay={false}/>
            
    </div>
  )
}

export default Player