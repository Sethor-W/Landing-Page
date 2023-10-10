import React from 'react'

export default function ButtonActivePopup({text, onClick}) {

  return (
    <button
        onClick={onClick}
        className='text-black text-lg font-bold bg-[var(--background-button-action-rgb)] box-shadow-button-action py-4 px-7 px-6 rounded-2xl'
    >
        {text}
    </button>
  )
}
