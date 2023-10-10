import React from 'react'
import Link from 'next/link'

export default function NetShare({href, src, alt}) {
  return (
    <Link
        href={href}
        className='h-9 w-9 m-1 border p-[.4rem] rounded-xl'
        target="_blank"
        rel="noopener noreferrer"
    >
        <img
            src={src}
            alt={alt}
        />
    </Link>
  )
}
