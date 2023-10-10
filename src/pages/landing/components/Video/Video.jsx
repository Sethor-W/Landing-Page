import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ReactPlayer from 'react-player';

const videoYT = "https://www.youtube.com/watch?v=rv35m-qCq9U";

export default function Video() {

  return (
    <ReactPlayer
      
      url={videoYT}
      loop={true}
      // playing={true}
      volume={1}
      width="100%"
      height="100%"
      style={{borderRadius: '50%', margin: 'auto'}}
    ></ReactPlayer>
  )
}
