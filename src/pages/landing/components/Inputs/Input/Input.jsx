import React from 'react'

export default function Input({type, name, id, placeholder, required=false, onChange=undefined, value}) {
  return (
    <input
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        className="lg:mb-0 bg-black/5 text-white/[.9] border border-[#898989] text-sm focus:outline-none block w-full px-5 py-3"
    />
  )
}
