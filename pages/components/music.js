"use client"

import React from "react";
import { Button } from '@mui/material';


import "../../src/app/globals.css"

const Music = () => {

  //TODO: edit bio
  //TODO: look for different fonts
  return (
    <section id="music" >
    <div className="section-container">
    <div className="label-text">
      <text >
        m u s i c
      </text>
    </div>
    <div className='music-responsive'>
      <iframe 
        className='spotify-responsive'
        src="https://open.spotify.com/embed/album/70fhPmOTF5MjPlNRSZey6I?utm_source=generator&theme=0" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      >
      </iframe>
      <iframe
        className="apple-responsive"
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
        frameborder="0" 
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
        src="https://embed.music.apple.com/us/album/pained-smiles-ep/1728240910"
      >
      </iframe>
    </div>
    </div>
    </section>
  )
}

export default Music;