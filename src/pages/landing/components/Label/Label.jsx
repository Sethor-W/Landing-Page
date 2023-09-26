import React from 'react'

export default function Label({children, forHTML}) {
  return (
    <label for={forHTML} class="block my-2 text-base font-medium text-gray-900 dark:text-white">
    {children}
    </label>
  )
}
