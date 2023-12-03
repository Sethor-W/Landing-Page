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
        <h1 className='text-4xl normal-case text-center md:text-5xl xl:text-7xl'>{Slide1.title1}</h1>
        <h1 className='text-4xl normal-case text-center md:text-5xl xl:text-7xl'>{Slide1.title2}</h1>
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
        {/* <div className='h-[1px] mt-20 bg-white/[.5] w-full'></div> */}
        {/* <h1 className="text-3xl mt-20 border-4 border-white/[.5] border-l-transparent border-r-transparent rounded-3xl p-4">Beneficios</h1> */}
        <CarruselContainer>
            {BENEFICIOS.map((data, index)=>(
                <CarruselCart
                    key={index}
                    title={data.title}
                    text={data.text}
                    src={data.src}
                    srcHover={data.srcHover}
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
        <article className='bg-gradient-to-br from-[#0e193e]/[20%] to-[#10071c]/[20%] border-2 border-[#0e193e] p-10 rounded-lg grid grid-cols-1 gap-10'>
            <div className='grid grid-cols-2 items-center justify-center'>
                <GroupTexts
                    title={"Descubre Beneficios Exclusivos: Únete al Club Sethor"}
                    description={"¡Sé parte del club Sethor y accede a beneficios exclusivos! Desde sorteos emocionantes hasta eventos VIP, nuestros miembros disfrutan de experiencias únicas. Ya sea como persona o empresa, únete a nosotros y desbloquea oportunidades especiales. Con la insignia distintiva, te destacarás en nuestra comunidad. ¡Únete ahora y descubre lo que te hemos preparado!"}
                />
                <img
                    className='mobile-animation h-96'
                    src="/img/Hero-Image-Phone.svg"
                    alt="hero-phone"
                />
            </div>
            <div className='grid grid-cols-2 items-center justify-center'>
                <img
                    className='mobile-animation h-96'
                    src="/img/Hero-Image-Phone.svg"
                    alt="hero-phone"
                />
                <GroupTexts
                    title={"Fecha Límite: Únete antes del 14 de febrero a Sethor"}
                    description={"No pierdas la oportunidad de unirte al club Sethor y acceder a beneficios exclusivos. Hasta el 14 de febrero de 2024, podrás ser parte de nuestra comunidad exclusiva. Aquellos que se unan después de esta fecha perderán la chance de obtener la insignia y disfrutar de beneficios exclusivos por fidelidad. ¡Únete hoy y sé parte de lo extraordinario!"}
                />
            </div>
            
        </article>
    </div>
  )
}

const GroupTexts = ({title, description, style}) => {

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
