import React from 'react'
import CarruselCart from '../Carrusel/CarruselCart'
import CarruselContainer from '../Carrusel/CarruselContainer'
import ButtonActivePopup from '../Buttons/ButtonActivePopup/ButtonActivePopup'
import P from '../Text/P'
import { Slide1 } from '../../../../../public/data/sections/Sections'
import { TEXTS_BUTTONS } from '../../../../../public/data/buttons/TextLanding'
import { BENEFICIOS } from '../../../../../public/data/sections/Beneficios'

export default function SectionPrincipal({handleActivePopup}) {
  return (
    <div className='px-5 md:px-28 xl:px-40 pt-5 bg-gradient-section1-b-t flex flex-col items-center justify-center gap-8 relative z-0 overflow-hidden'>
        <h1 className='text-4xl normal-case text-center md:text-5xl xl:text-7xl'>{Slide1.title}</h1>
        <div className='lg:px-40'>
            <P textCenter={true}>{Slide1.description}</P>
        </div>
        <div className="options flex flex-row gap-3">
            {/* <ButtonActivePopup
                onClick={handleActive}
                text={TEXTS_BUTTONS.Waitlist}
            /> */}
            <ButtonActivePopup
                onClick={handleActivePopup}
                text={TEXTS_BUTTONS.Waitlist}
            />
            {/* <Link
                className='text-white text-lg font-bold py-4 px-7 rounded-2xl border border-white'
                href={'#features'}
            >
                {TEXTS_BUTTONS.LearnMore}
            </Link> */}
        </div>
        <CarruselContainer>
            {BENEFICIOS.map((data, index)=>(
                <CarruselCart
                    key={index}
                    title={data.title}
                    src={data.src}
                />
            ))}
        </CarruselContainer>
        {/* <div class="relative w-full">
            <img
                className="rotate-animation absolute inset-0 w-full h-full -z-[1] md:top-28 md:h-[40vw]"
                src="/img/Hero-Image-bg.svg"
                alt="hero-bg"
            />
            <img
                className='mobile-animation w-full md:h-[60vw]'
                src="/img/Hero-Image-Phone.svg"
                alt="hero-phone"
            />
        </div> */}
    </div>
  )
}
