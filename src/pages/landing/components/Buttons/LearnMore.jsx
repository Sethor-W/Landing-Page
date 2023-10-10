import Link from 'next/link'
import React from 'react'

export default function LearnMore({text, href}) {
  return (
    <Link
        className='text-white text-lg font-bold  py-4 px-7 rounded-2xl'
        href={href}
    >
        {text}
    </Link>
  )
}
