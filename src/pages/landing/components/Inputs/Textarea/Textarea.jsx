import React from 'react'

export default function Textarea({name, id, rows='', cols='', placeholder}) {
  return (
    <textarea
        className='bg-black/5 text-white/[.9] border border-[#898989] text-sm focus:outline-none block w-full px-5 py-3'
        name={name}
        id={id}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        // required
    ></textarea>
  )
}
