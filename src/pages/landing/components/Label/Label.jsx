import React from 'react'

export default function Label({children, forHTML}) {
  return (
    <label for={forHTML} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    {children}
    </label>
  )
}
