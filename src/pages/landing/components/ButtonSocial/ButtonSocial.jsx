import React from 'react'

export default function ButtonSocial({children, href = "#!"}) {
  return (
    <a
        href={href}
        target='_blank'
        class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
    >
    {children}
    </a>
  )
}
