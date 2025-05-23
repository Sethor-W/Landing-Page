import React from 'react'
import CarruselCart from '../Carrusel/CarruselCart'
import CarruselContainer from '../Carrusel/CarruselContainer'
import ButtonActivePopup from '../Buttons/ButtonActivePopup/ButtonActivePopup'
import P from '../Text/P'
import { Slide1 } from '../../../../../public/data/sections/Sections'
import { TEXTS_BUTTONS } from '../../../../../public/data/buttons/TextLanding'
import { BENEFICIOS } from '../../../../../public/data/sections/Beneficios'
import Image from 'next/image'

export default function SectionPrincipal({handleActivePopup}) {
  return (
    <div className='px-5 md:px-28 xl:px-40 pt-5 bg-gradient-section1-b-t flex flex-col items-center justify-center gap-8 relative z-0 overflow-hidden'>
        <h1 className='text-4xl normal-case text-center md:text-5xl xl:text-7xl'>{Slide1.title1}</h1>
        <h1 className='text-4xl normal-case text-center md:text-5xl xl:text-7xl'>
            <span className='text-[#5befe6] drop-shadow-md'>{Slide1.title2_p}</span>
            {Slide1.title2}
        </h1>
        <div className='lg:px-40'>
            <P
                textCenter={true}
            >{Slide1.description}</P>
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
        {/* <CarruselContainer>
            {BENEFICIOS.map((data, index)=>(
                <CarruselCart
                    key={index}
                    title={data.title}
                    text={data.text}
                    src={data.src}
                    srcHover={data.srcHover}
                />
            ))}
        </CarruselContainer> */}
        <div class="relative w-full max-h-[90vh] justify-center items-center">
            {/* <img
                class="rotate-animation absolute inset-0 w-full h-auto max-h-[50vh] my-10 md:max-h-[70vh] object-contain -z-[1] "
                src="/img/Hero-Image-bg.svg"
                alt="hero-bg"
            /> */}
            {/* <img
                class="mobile-animations w-fulls max-h-[90vh] object-contains"
                src="/img/Hero-Image-Phone.png"
                alt="hero-phone"
            /> */}
            <Image
                className="rotate-animation absolute inset-0 w-full h-auto max-h-[50vh] my-10 top-1/4 sm:top-0 md:max-h-[70vh] object-contain -z-[1]"
                src="/img/Hero-Image-bg.svg"
                alt="hero-bg"
                layout="responsive"
                width={1200}
                height={800}
            />
            <Image
                className="mobile-animation w-full h-[90vh] object-contain"
                src="/img/Hero-Image-Phone.png"
                alt="hero-phone"
                width={1000}  // Establece un tamaño adecuado para la imagen
                height={600}
            />
        </div>

        {/* <article className='bg-gradient-to-br from-[#0e193e]/[20%] to-[#10071c]/[20%] border-2 border-[#0e193e] p-10 rounded-lg grid grid-cols-1 gap-10'>
            <ContainerGroupTexts className={``}>
                <div className='-rotate-[25deg] text-center w-fit mx-auto'>
                    <img
                        className='hidden md:block mobile-animation h-72'
                        src="/icons/megaphone.webp"
                        alt="hero-phone"
                    />
                </div>
                <GroupTexts
                    title={"Fecha Límite: Únete antes del 14 de febrero a Sethor"}
                    description={"No pierdas la oportunidad de unirte al club Sethor y acceder a beneficios exclusivos. Hasta el 14 de febrero de 2024, podrás ser parte de nuestra comunidad exclusiva. Aquellos que se unan después de esta fecha perderán la chance de obtener la insignia y disfrutar de beneficios exclusivos por fidelidad. ¡Únete hoy y sé parte de lo extraordinario!"}
                />
            </ContainerGroupTexts>
            <ContainerGroupTexts>
                <GroupTexts
                    title={"Descubre Beneficios Exclusivos: Únete al Club Sethor"}
                    description={"¡Sé parte del club Sethor y accede a beneficios exclusivos! Desde sorteos emocionantes hasta eventos VIP, nuestros miembros disfrutan de experiencias únicas. Ya sea como persona o empresa, únete a nosotros y desbloquea oportunidades especiales. Con la insignia distintiva, te destacarás en nuestra comunidad. ¡Únete ahora y descubre lo que te hemos preparado!"}
                />
                <img
                    className='hidden md:block mobile-animation h-96'
                    src="/img/Hero-Image-Phone.svg"
                    alt="hero-phone"
                />
            </ContainerGroupTexts>
            
        </article> */}
    </div>
  )
}

const GroupTexts = ({title, description, style}) => {

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold text-white'>{title}</h1>
            <p className='text-gray-400'>{description}</p>
        </div>
    )
}
const ContainerGroupTexts = ({children, className}) => {

    return (
        <div className={`grid md:grid-cols-2 items-center justify-center ${className}`}>
            {children}
        </div>
    )
}
