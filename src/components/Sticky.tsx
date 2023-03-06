"use client";

import { Link } from 'react-scroll'
import { useEffect } from 'react';


const Sticky = () => {

    useEffect(() => {window.addEventListener("scroll", function(){
        const button = document.getElementById("button")!;
        const scrollPosition = window.scrollY;
        if (scrollPosition > 500) {
            button.style.display = "block";
        }
        else{
            button.style.display = "none";
        }
        });
    },[]);

  return (
    <div>
        <div className='fixed bg-[#212139] -right-3 bottom-6 w-32 z-30'>
            <Link to="koncerty" spy={true} smooth={true}><button id='button' className='p-5 text-[1rem] uppercase font-light rounded-md border-l-2 border-t-2 border-b-2 border-[#50A983] text-white'>koncerty</button></Link>
        </div>
    </div>
  )
}

export default Sticky