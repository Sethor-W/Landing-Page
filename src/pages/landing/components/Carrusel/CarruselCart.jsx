import React, { useState } from 'react'

export default function CarruselCart({title, text, src, srcHover}) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      // className='mx-2 shadow-mds shadow-[#bbbdf7] rounded-xl'
      className={`mx-2 shadow-mds shadow-[#bbbdf7] rounded-xl relative overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    > {/**#f7b813 */}
      <h1 className='text-2xl text-center mb-2'>{title}</h1>
      <div className='relative bg-black/[10%]'>
        {isHovered ? (
          <img className='rounded-xl animate-pulse' src={srcHover} alt='' />
        ): (
          <img className='rounded-xl ' src={src} alt='' />
        )}
        {isHovered && (
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-[0%] rounded-xl'></div>
        )}
        {isHovered && text && (
          <p 
            className='absolute top-1/2 px-2 py-2 transform -translate-y-1/2 text-white text-center bg-black/[50%] text-lg font-medium'
            // className='bg-black/[50%] absolute top-0 left-0 w-full h-full text-center pt-[50%] pb-[50%] text-white -translate-x-1/2 -translate-y-1/2'
          >{text}
          </p>
        )}
      </div>
    </article>
  )
}
