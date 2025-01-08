import React from 'react'

export default function ButtonActivePopup({text, onClick}) {

  return (
    <button
        onClick={onClick}
        className='text-black text-lg md:text-xl font-bold bg-[var(--background-button-action-rgb)] box-shadow-button-action py-4 px-6 md:py-6 md:px-8 rounded-2xl'
    >
        {text}
    </button>
  )
}
