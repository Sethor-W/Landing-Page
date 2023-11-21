import React from 'react'

export default function CarruselCart({title, src}) {
  return (
    <article className='mx-2'>
        <h1 className='text-2xl'>{title}</h1>
        <img className='' src={src} alt="" />
    </article>
  )
}
