import React from 'react'

export default function Textarea({name, id, rows='', cols=''}) {
  return (
    <textarea
        className='text-gray-900 text-sm p-2 w-full bg-white border border-gray-300 '
        name={name}
        id={id}
        rows={rows}
        cols={cols}
        required
    ></textarea>
  )
}
