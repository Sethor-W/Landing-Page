import React from 'react'

export default function P({children, textCenter}) {
  return (
    <p className={`text-left text-[var(--letter-sub-color)] md:text-lg ${textCenter && 'text-center'}`}>
        {children}
    </p>
  )
}
