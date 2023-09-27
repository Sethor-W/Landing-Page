import React from 'react'
import ReactPlayer from 'react-player';

const videoYT = "https://www.youtube.com/watch?v=rv35m-qCq9U";

export default function Video() {
  return (
    <div>
        <ReactPlayer
            className="w-[70vw] rounded-md shadow-slate-800 shadow-md m-4"
            url={videoYT}
            loop={true}
            playing={true}
            volume={1}
        ></ReactPlayer>
    </div>
  )
}
