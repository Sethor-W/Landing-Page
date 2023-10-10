import React from 'react'
import Link from 'next/link'
import P from '../Text/P'

export default function Footer() {
  return (
    <footer className='bg-black px-5 md:px-28 xl:px-40 py-12'>
          <div className='flex flex-col lg:items-center lg:px-40 xl:px-60 items-start justify-center gap-3 text-center'>
            <h1 className='text-4xl capitalize text-left'>¿Tiene alguna consulta?</h1>
            <p className={`text-left text-[var(--letter-sub-color)] md:text-lg lg:text-center`}>
              Si tiene alguna pregunta o necesita asistencia, no dude en ponerse en contacto con nuestro equipo de expertos. Estamos aquí para ayudar. Puede enviarnos un correo electrónico a: info@sethor.tech
            </p>
            <Link
              id='contact'
              className='text-black text-lg font-bold bg-[var(--background-button-action-rgb)] box-shadow-button-action py-4 px-7 mt-7 rounded-2xl'
              href="mailto:info@sethor.tech"
              target='_blank'
            >
              Contáctanos
            </Link>
          </div>
          <hr className='my-7' />
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between items-start justify-center gap-10'>
            <img
              className='w-40 text-sm'
              src="/logo/Sethor-Logo.svg"
              alt="Sethor"
            />
            <p className='text-[var(--letter-sub-color)]'>© 2023 Sethor. All Rights Reserved.</p>
            <div className="flex flex-row gap-5">
              <Link
                href={"https://www.instagram.com/sethor.we/"}
                target='_blank'
              >
                <img src="/icons/Instagram.svg" alt="Instagram" />
              </Link>

              <Link
                href={"https://www.linkedin.com/company/sethortech/"}
                target='_blank'
              >
                <img src="/icons/Linkedin.svg" alt="Linkedin" />
              </Link>

              <Link
                href={"https://www.youtube.com/@Sethor-tech"}
                target='_blank'
              >
                <img src="/icons/Youtube.svg" alt="Youtube" />
              </Link>
            </div>
          </div>
    </footer>
  )
}
