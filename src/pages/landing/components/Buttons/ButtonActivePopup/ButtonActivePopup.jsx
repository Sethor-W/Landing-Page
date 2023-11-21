import React from 'react'

export default function ButtonActivePopup({text, onClick}) {

  return (
    <button
        onClick={onClick}
        className='text-black text-2xl font-bold bg-[var(--background-button-action-rgb)] box-shadow-button-action py-6 px-8 rounded-2xl'
    >
        {text}
    </button>
  )
}
