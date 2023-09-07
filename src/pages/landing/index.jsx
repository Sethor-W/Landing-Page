import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import FeatureCard from './components/FeatureCard/FeatureCard'
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';

export default function Landing() {

  const [userActive, setUserActive] = useState(true);

  const handleActiveUser = ()=>{
    setUserActive(true);
  }
  const handleActiveBusiness = ()=>{
    setUserActive(false);
  }

  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main className=''>
        <section id='home' className='body text-2xl mt-16 text-center md:text-left md:text-4xl grid grid-rows-1 md:grid-cols-2 justify-center items-center gap-4 '>
          <article className=''>
            <h1 className='mb-10 '>Te damos la bienvenida a tu proxima aplicación hibrida entre una cartera digital y un comercio electronico</h1>
            <a className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800" href="#form">Conocer Más</a>
          </article>
          <img 
            className='image-drop-shadow rounded-xl md:ax-w-[40rem]'
            src="/img/img-1.svg" alt="img-product" />
        </section>
        <section className='body section2 grid-rows-3 text-2xl mt-16 text-center flex flex-col gap-4 '>
          <h1>Buscamos centralizar la demanda de los metodos de pagos seguros y ofrecerte una experiencia en compra en linea comoda y confiable</h1>
          <p className='text-sm'>Todo esto sin la necesidad de compartir tus datos generales a la hora de usar una de nuestras herramientas</p>
        </section>
        <section id="features" className='body grid-rows-3 text-2xl mt-16 flex flex-col gap-4 '>
          <h1>Caracteristicas</h1>
          <div className='flex flex-row justify-center items-center gap-10'>
            <p className={`text-base cursor-pointer ${userActive && 'underline underline-offset-8'}`} onClick={handleActiveUser}>User</p>
            <p className={`text-base cursor-pointer ${!userActive && 'underline underline-offset-8'}`} onClick={handleActiveBusiness}>Negocio</p>
          </div>
          {userActive &&
            <Carousel>
              <FeatureCard
                img={'https://images.pexels.com/photos/7046704/pexels-photo-7046704.jpeg?auto=compress&cs=tinysrgb&w=600'}
                slogan={'Pago con Huella'}
                title={'¿Cansado de cargar tu tarjeta?'}
                description={'Paga de forma segura con tu huella dactilar'}
              />
              <FeatureCard
                img={'https://images.pexels.com/photos/7046704/pexels-photo-7046704.jpeg?auto=compress&cs=tinysrgb&w=600'}
                slogan={'Sin conexion'}
                title={'¿No tienes acceso a internet?'}
                description={'No necesitas estar conectado a internet'}
              />
              <FeatureCard
                img={'https://images.pexels.com/photos/7046704/pexels-photo-7046704.jpeg?auto=compress&cs=tinysrgb&w=600'}
                slogan={'Pago con Huella'}
                title={'¿Cansado de cargar tarjetas?'}
                description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sunt quo, nisi aliquid, odio quia, reprehenderit veniam velit aliquam voluptatibus sapiente minus ipsam architecto. Quasi culpa impedit autem tempora iste.'}
              />
              <FeatureCard
                img={'https://images.pexels.com/photos/7046704/pexels-photo-7046704.jpeg?auto=compress&cs=tinysrgb&w=600'}
                slogan={'Pago con Huella'}
                title={'¿Cansado de cargar tarjetas?'}
                description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sunt quo, nisi aliquid, odio quia, reprehenderit veniam velit aliquam voluptatibus sapiente minus ipsam architecto. Quasi culpa impedit autem tempora iste.'}
              />
              <FeatureCard
                img={'https://images.pexels.com/photos/7046704/pexels-photo-7046704.jpeg?auto=compress&cs=tinysrgb&w=600'}
                slogan={'Pago con Huella'}
                title={'¿Cansado de cargar tarjetas?'}
                description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sunt quo, nisi aliquid, odio quia, reprehenderit veniam velit aliquam voluptatibus sapiente minus ipsam architecto. Quasi culpa impedit autem tempora iste.'}
              />
            </Carousel>
          }
          {!userActive &&
            <Carousel>
              <FeatureCard
                img={'https://images.pexels.com/photos/7046704/pexels-photo-7046704.jpeg?auto=compress&cs=tinysrgb&w=600'}
                slogan={'Pago con Huella Bussines'}
                title={'¿Cansado de cargar tarjetas?'}
                description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sunt quo, nisi aliquid, odio quia, reprehenderit veniam velit aliquam voluptatibus sapiente minus ipsam architecto. Quasi culpa impedit autem tempora iste.'}
              />
              <FeatureCard
                img={'https://images.pexels.com/photos/7046704/pexels-photo-7046704.jpeg?auto=compress&cs=tinysrgb&w=600'}
                slogan={'Pago con Huella Bussines'}
                title={'¿Cansado de cargar tarjetas?'}
                description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sunt quo, nisi aliquid, odio quia, reprehenderit veniam velit aliquam voluptatibus sapiente minus ipsam architecto. Quasi culpa impedit autem tempora iste.'}
              />
            </Carousel>
          }
        </section>
        <section id='form' className='body section2 grid-rows-3 text-2xl mt-16 flex flex-col gap-4 '>
          <h1>¿Te interesa formar parte de nuestra familia y obtener bonificaciónes el dia de lanzamiento?</h1>
          <p className='text-base font-semibold'>¡Si es asi, es tu dia de suerte ya que está es tu oportunidad de ser una de las personas aseguradas que tendran acceso premium a la aplicación el dia de su lanzamiento y serán premiadas con beneficios especiales!</p>
          <p className='text-sm'>Para esto solo tendras que llenar el formulario de abajo para saber aquellas cosas que te gustarian que esten en nuestra app o aquellas cosas que quiseras que no esten como por ejemplo ofrecer una baja tarifa de comisión para envios internacionales. Al finalizar, ya estaras en nuestra lista de espera para ser una de las primeras personas en utilizarnos y en recompensa se te facilitara un codigo con el cual se te garantizara a la hora de registrate por primera vez en nuestra innovadora aplicación, ventajas que no obtendrán otras personas que no esten en la lista de espera.</p>
          <Form />
          <p className='text-sm mt-10'>Con Sethor dejaras atras el estar saliendo de una aplicación a otra para realizar la acción que quieres</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
