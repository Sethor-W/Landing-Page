import React from 'react'

export default function Label({children, forHTML}) {
  return (
    <label for={forHTML} class="block my-2 text-sm font-normal text-white">
    {children}
    </label>
  )
}
