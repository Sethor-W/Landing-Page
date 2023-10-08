import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ReactPlayer from 'react-player';

const videoYT = "https://www.youtube.com/watch?v=rv35m-qCq9U";

export default function Video() {

  return (
    <div className='w-[70vw] h-[50vh] sm:h-[70vh]'>
        {/* <ReactPlayer
            url={videoYT}
            loop={true}
            // playing={true}
            volume={1}
            width="100%"
            height="100%"
        ></ReactPlayer> */}
        <video src={videoYT}></video>
    </div>
  )
}
