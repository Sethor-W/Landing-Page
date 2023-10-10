import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import NavBar from './landing/components/NavBar/NavBar'
import Popup from './landing/components/Popup/Popup'
import Textarea from './landing/components/Inputs/Textarea/Textarea'
import Label from './landing/components/Inputs/Label/Label'
import { useState } from 'react'
import Footer from './landing/components/Footer/Footer'
import Link from 'next/link'
import Form from './landing/components/Form/Form'
import Video from './landing/components/Video/Video'
import LearnMore from './landing/components/Buttons/LearnMore'
import P from './landing/components/Text/P'
import ButtonActivePopup from './landing/components/Buttons/ButtonActivePopup'

const inter = Inter({ subsets: ['latin'] })


const TEXTS_OLD = {
  Slide1: {
    t1: "Bienvenido a Sethor",
    t2: "Donde pagar con tu rostro o tu huella en cualquier lugar y momento ya no sera cosa del futuro",
  },
  Slide2:{
    // title: "El cambio está aquí",
    description: [
      // "Imagina una aplicación que fusiona lo mejor de una billetera digital y el comercio en línea.",
      // "Con nosotros, nunca más tendrás que agregar métodos de pago o preocuparte por no tener saldo con que pagar."
      "Seremos tu próxima aplicación híbrida entre una billetera digital y un comercio electrónico, donde con nosotros no tendrás que agregar un método de pago para comprar ni preocuparte por no tener saldo con qué pagar."
    ],
  },
  Slide3: {
    title: "¡Unete ya a nuestra comunidad y obtén recompensas exclusivas el dia de lanzamiento!",
    TextArray: [
      "Solo completa el formulario y ya estarás inscrito en nuestra lista de espera. Al inscribirte, serás recompensado con acceso anticipado a nuestra aplicación, además de regalos, puntos y otras sorpresas.",
      "No dejes escapar la oportunidad de unirte a una nueva era en la que tu rostro es suficiente para pagar y tus huellas permiten transferencias rápidas y seguras. ¡Inscríbete ahora y sé parte de esta emocionante revolución!"
    ],
    message: "Cuando llegue el momento de pagar, es posible que olvides tu cartera, efectivo o incluso tu celular, pero lo que nunca debes olvidar es que con nosotros, solo necesitas a ti mismo para realizar el pago.",
    // Slide3Message: "Recuerda que a la hora de pagar se te puede quedar la cartera, el efectivo o incluso tu celular, pero lo que nunca dejaras en casa sera a ti mismo.",
  }
  
};


const TEXTS_BUTTONS = {
  Waitlist : "Unirse a la lista de espera",
  LearnMore: "Conocer Más"
}

const TEXTS = {
  Slide1: {
    title: "Pague con su rostro o huella digital en cualquier momento y lugar",
    description: "Bienvenido a Sethor. ¡Donde pagar con la rostro o la huella en cualquier lugar y en cualquier momento ya no será cosa del futuro!",
  },
  Slide2:{
    title: "Siguiente Aplicación híbrida entre una billetera digital y un comercio electrónico",
    description: "Donde con nosotros no tendrás que agregar un método de pago para comprar ni preocuparte por no tener saldo con el que pagar.",
  },
  Slide3: {
    title: "¡Unete ya a nuestra comunidad y obtén recompensas exclusivas el dia de lanzamiento!",
    description: "Simplemente complete el formulario y estará en nuestra lista de espera. Al registrarte, recibirás como recompensa acceso anticipado a nuestra aplicación, además de obsequios, puntos y otras sorpresas. ¡Regístrese ahora y sea parte de esta emocionante revolución!",
  },
  Contact: {
    title: "¿Tiene alguna consulta?",
    description: "Si tiene una consulta general y desea hablar con nuestro equipo de expertos, puede contactarnos por correo electrónico a: info@sethor.tech",
  }
};


export default function Home() {

  const [active, setActive] = useState(false);

  
  const handleActive = () => {
    setActive(true);
  };
  const handleDesactive = () => {
    setActive(false);
  };

  return (
    <div>
      <Head>
        <title>Sethor</title>
        <meta property="og:title" content="Sethor" key="title" />
        <meta property="og:description" content="Una puerta a dos mundos: Seremos una tecnología hibrida entre una billetera digital y un comercio electrónico, donde las personas aparte de obtener los beneficios de ambas, podrán utilizar tanto sus rostros como sus huellas, como método de pago en cualquier lugar o momento" />
        <meta property="og:image" content="https://www.sethor.tech/logo/Logotipo.svg" />
      </Head>
      <Popup
        active={active}
        handleDesactive={handleDesactive}
      >
          <Form/>
      </Popup>
      <main>
        <section className='bg-[url(/img/Hero-Background.png)] bg-top bg-no-repeat bg-cover'>
          <section className='bg-gradient-section1-bgs'>
            <NavBar handleActivePopup={handleActive}/>
            <div className='px-5 md:px-28 xl:px-40 pt-5 bg-gradient-section1-b-t flex flex-col items-center justify-center gap-8 relative z-0 overflow-hidden'>
              <h1 className='text-4xl capitalize text-center md:text-5xl xl:text-7xl'>{TEXTS.Slide1.title}</h1>
              <div className='lg:px-40 '>
                <P textCenter={true}>{TEXTS.Slide1.description}</P>
              </div>

              <div className="options flex flex-row gap-3">
                <ButtonActivePopup
                  onClick={handleActive}
                  text={TEXTS_BUTTONS.Waitlist}
                />
                <LearnMore
                  href={'#features'}
                  text={TEXTS_BUTTONS.LearnMore}
                />
              </div>
              <div class="relative w-full">
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
              </div>
            </div>
          </section>
        </section>

        <section className='px-5 md:px-28 xl:px-40 py-20 bg-section2 flex flex-col gap-10'>
          <div className='flex flex-col md:flex-row xl:grid xl:grid-cols-3  items-start justify-center gap-8 '>
            <h1 className='text-4xl xl:text-5xl capitalize text-left xl:col-span-2'>{TEXTS.Slide2.title}</h1>
            <div className='flex flex-col items-start justify-center gap-8 relative xl:col-span-1'>
              <P>{TEXTS.Slide2.description}</P>
              <div className="options flex flex-row gap-3">
                <ButtonActivePopup
                  onClick={handleActive}
                  text={TEXTS_BUTTONS.Waitlist}
                />
                <LearnMore
                  href={'#features'}
                  text={TEXTS_BUTTONS.LearnMore}
                />
              </div>
            </div>
          </div>
          <div id='features' className='mx-auto w-[80vw] h-[70vh] md:w-[60vw] flex items-center justify-center'>
            <Video />
          </div>
          {/* <video
            id='features'
            className='my-10'
            src="/video/video.mp4"
          > */}
        </section>

        <section className='bg-[url(/img/Secion-3-Background.png)] bg-no-repeat bg-cover'>
          <section className='px-5 md:px-28 xl:px-40 py-[7.5rem] bg-gradient-section1-bg'>
            <div className='bg-black/50 rounded-[2rem] py-10 px-5 md:p-16 lg:flex lg:flex-row lg:items-center lg:gap-12'>
              <div className='flex flex-col items-start justify-center gap-8 lg:w-[80%] xl:w-[50%]'>
                <h1 className='text-4xl capitalize text-left'>{TEXTS.Slide3.title}</h1>
                <P>{TEXTS.Slide3.description}</P>
                <div className="options flex flex-row gap-3">
                  <ButtonActivePopup
                    onClick={handleActive}
                    text={TEXTS_BUTTONS.Waitlist}
                  />
                  <LearnMore
                    href={'#features'}
                    text={TEXTS_BUTTONS.LearnMore}
                  />
                </div>
              </div>
              <div className='hidden lg:block w-[50%] text-center '>
                <img className='mx-auto xl:h-[50%]' src="/logo/Isotipo.svg" alt="Sethor" />
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  )
}