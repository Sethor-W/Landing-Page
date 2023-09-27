import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import NavBar from './landing/components/NavBar/NavBar'
import Popup from './landing/components/Popup/Popup'
import Textarea from './landing/components/Textarea/Textarea'
import Label from './landing/components/Label/Label'
import { useState } from 'react'
import Footer from './landing/components/Footer/Footer'
import Link from 'next/link'
import Form from './landing/components/Form/Form'
import Video from './landing/components/Video/Video'

const inter = Inter({ subsets: ['latin'] })


const TEXTS = {
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


export default function Home() {

  const [userActive, setUserActive] = useState(true);

  
  const handleActiveUser = () => {
    setUserActive(true);
  };
  const handleActiveBusiness = () => {
    setUserActive(false);
  };

  return (
    <div>
      <Head>
        <title>Sethor</title>
        <meta property="og:title" content="Sethor" key="title" />
        <meta property="og:description" content="Una puerta a dos mundos: Seremos una tecnología hibrida entre una billetera digital y un comercio electrónico, donde las personas aparte de obtener los beneficios de ambas, podrán utilizar tanto sus rostros como sus huellas, como método de pago en cualquier lugar o momento" />
        <meta property="og:image" content="https://www.sethor.tech/logo/Logotipo.svg" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="">
        <div className="bg-[url(/img/bg-section-p.jfif)] bg-cover bg-no-repeat bg-left-top">
          <section
            id="home"
            className="section1 section-principal bg-black/10s body  mt-20 pt-20"
          >
            <div className="mt-20 text-2xl text-center md:text-left md:text-4xl grid grid-rows-1 md:grid-cols-2 justify-center items-center gap-4">
              <article className="">
                <h1 className="mb-10 title">
                  <span className='text-5xl'>
                    {TEXTS.Slide1.t1}
                  </span>
                  <br />
                  <br />
                  {TEXTS.Slide1.t2}
                </h1>
                <Link
                  className="cta py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-white focus:outline-none focus:ring-2 transition-all text-base bg-gradient-to-br"
                  href="#features"
                >
                  <span>Conocer Más</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </article>
              <img
                className="mobile image-drop-shadow rounded-xl md:ax-w-[40rem]"
                src="/img/img-1.svg"
                alt="img-product"
              />
            </div>
          </section>
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#d9eafe"
              fill-opacity="1"
              d="M0,96L120,112C240,128,480,160,720,160C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="section2">
            <section
              id="features"
              className="bg-[url(/img/bg-video.webp)] bg-no-repeat bg-contain flex flex-col items-center justify-center"
            >
              <div className="w-[80%] md:w-[70%]">
                {/* <h1 className="text-gray-900 font-bold mb-4 text-2xl md:text-4xl md:mb-10">
                  {TEXTS.Slide2.title}
                </h1> */}
                <p className="text-gray-900 mb-4 text-base md:text-lg md:mb-10">
                  {TEXTS.Slide2.description[0]}
                  <br />
                  {TEXTS.Slide2.description[1]}

                  {/* Todo esto sin la necesidad de compartir tus datos generales a la hora de usar una de nuestras herramientas */}
                </p>
              </div>
              <Video/>
              {/* <video
                className="w-[70vw] rounded-md shadow-slate-800 shadow-md m-4"
                src="/video/video.mp4"
                controls
                play
              ></video> */}
            </section>
        </div>

        <div className="bg-[url(/img/bg-section-p.jfif)] bg-no-repeat bg-cover bg-right-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#d9eafe"
              fill-opacity="1"
              d="M0,128L80,154.7C160,181,320,235,480,224C640,213,800,139,960,101.3C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
          <section
            id="form"
            className=" section1s bg-principals body grid-rows-3 text-2xl mt-16 flex flex-col gap-4 "
          >
            <div className="grid md:grid-cols-2 md:gap-10 justify-center items-center">
              <div className="flex flex-col gap-8 mb-10">
                <h1 className="title text-2xl md:text-4xl">
                  {TEXTS.Slide3.title}
                </h1>
                <p className="text-base">
                  {TEXTS.Slide3.TextArray[0]}
                  <br />
                  <br />
                  {TEXTS.Slide3.TextArray[1]}
                </p>
                
              </div>
              <Popup
                nameButton={'Formar parte de Sethor'}
              >
                <div class="px-6 py-6 lg:px-8 w-full md:flex md:flex-col md:mx-auto">
                  <img
                    className="w-[50%] mx-auto mb-5 drop-shadow-lg"
                    src="/logo/Logotipo.svg"
                    alt=""
                  />
                  
                  <Form/>
                </div>
              </Popup>
            </div>
            <p className="text-base mt-10">
              {TEXTS.Slide3.message}
              {/* Con Sethor dejaras atras el estar saliendo de una aplicación a
              otra para realizar la acción que quieres */}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
