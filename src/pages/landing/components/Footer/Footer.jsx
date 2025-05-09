import React from 'react'
import Link from 'next/link'
import { Contact } from '../../../../../public/data/sections/Sections'
import { TEXTS_BUTTONS } from '../../../../../public/data/buttons/TextLanding'
import { NETSWORK } from '../../../../../public/data/netswork/NetsWork'
import { MAIL } from '../../../../../public/data/contact/Contact'

export default function Footer() {
  return (
    <footer className='bg-black px-5 md:px-28 xl:px-40 py-12'>
      <div className='flex flex-col lg:items-center lg:px-40 xl:px-60 items-start justify-center gap-3 text-center'>
        <h1 className='text-4xl capitalize text-left'>{Contact.title}</h1>
        <p className={`text-left text-[var(--letter-sub-color)] md:text-lg lg:text-center`}>
          {Contact.description}
          <Link href={`mailto:${MAIL}`} className='text-[#5BEFE6]'>{MAIL}</Link>
        </p>
        {/* <Link
          id='contact'
          className='text-black text-lg font-bold bg-[var(--background-button-action-rgb)] box-shadow-button-action py-4 px-7 mt-7 rounded-2xl'
          href={`mailto:${MAIL}`}
          target='_blank'
        >
          {TEXTS_BUTTONS.Contact}
        </Link> */}
      </div>
      <hr className='my-7 border-white border-opacity-20' />
      <div className='flex flex-col lg:grid lg:grid-cols-3 lg:items-center lg:justify-between items-start justify-center gap-10'>
        <img
          className='w-24 text-sm'
          src="/logo/Sethor-Logo.svg"
          alt="Sethor"
        />
        <div className='text-[var(--letter-sub-color)] lg:text-center'>
          <p>© 2023 Sethor. All Rights Reserved.</p>
          <Link href="/terms-and-conditions" className='text-[#5BEFE6] hover:underline'>
            Términos y Condiciones
          </Link>
        </div>
        <div className="[flex flex-row gap-5] flex flex-wrap gap-5 lg:justify-end">
          {NETSWORK.map((data, index)=>(
            <Link
              key={index}
              href={data.href}
              target='_blank'
            >
              <img className='h-5' src={data.src} alt={data.name} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
