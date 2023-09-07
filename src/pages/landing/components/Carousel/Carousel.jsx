import React, { useState } from 'react'

export default function Carousel({children}) {

  return (
    <article className="flex flex-row overflow-x-scroll space-x-4 w-full scroll-carousel">
        {children}
    </article>
  )
}
