import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ButtonSocial from './components/ButtonSocial/ButtonSocial'
import FeatureCard from './components/FeatureCard/FeatureCard'
import Carousel from './components/Carousel/Carousel';

export default function Landing() {

  const [userActive, setUserActive] = useState(false);

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
      <main>
        <section className='grid-rows-3 text-2xl mt-16 text-center flex flex-col gap-4 '>
          <article>
            <h1>Te damos la bienvenida a tu proxima aplicación hibrida entre una cartera digital y un comercio electronico</h1>
            <a className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"
               href="#form"
              >Conocer Más</a>
          </article>
          {/* <Image
            src="https://images.pexels.com/photos/14891543/pexels-photo-14891543.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={500}
            height={500}
            alt="Picture of the author"
          /> */}
          <img src="https://images.pexels.com/photos/14891543/pexels-photo-14891543.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img-product" />
        </section>
        <section className='grid-rows-3 text-2xl mt-16 flex flex-col gap-4 '>
          <h1>Caracteristicas</h1>
          <div className='flex flex-row justify-center items-center gap-10'>
            <p onClick={handleActiveUser}>User</p>
            <p onClick={handleActiveBusiness}>Negocio</p>
          </div>
          <article className={`${!userActive && 'hidden'}`}>
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
            <Carousel></Carousel>
          </article>
          <article className={`${userActive && 'hidden'}`}>
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
          </article>
        </section>
        <section className='grid-rows-3 text-2xl mt-16 flex flex-col gap-4 '>
          <h1>¿Te interesa formar parte de nuestra familia y obtener bonificaciónes el dia de lanzamiento?</h1>
          <p className='text-lg'>¡Si es asi, es tu dia de suerte ya que está es tu oportunidad de ser una de las personas aseguradas que tendran acceso premium a la aplicación el dia de su lanzamiento y serán premiadas con beneficios especiales!</p>
          <p className='text-base'>Para esto solo tendras que llenar el formulario de abajo para saber aquellas cosas que te gustarian que esten en nuestra app o aquellas cosas que quiseras que no esten como por ejemplo ofrecer una baja tarifa de comisión para envios internacionales. Al finalizar, ya estaras en nuestra lista de espera para ser una de las primeras personas en utilizarnos y en recompensa se te facilitara un codigo con el cual se te garantizara a la hora de registrate por primera vez en nuestra innovadora aplicación, ventajas que no obtendrán otras personas que no esten en la lista de espera.</p>
          <form>
            <input
              class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              type="text"
              name='name'
              id='name'
              placeholder="Nombre y Apellido"
            />
            <input
              class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              type="email"
              name='email'
              id='email'
              placeholder="Correo electronico"
            />
            <textarea
              class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              rows="3"
              name='suggestion'
              id='suggestion'
              placeholder="Sugerencia (Opcional)"
            ></textarea>
          </form>
          <p className='text-sm'>Con Sethor dejaras atras el estar saliendo de una aplicación a otra para realizar la acción que quieres</p>
        </section>
      </main>
      <footer>
        {/* Social Icons */}
        <div class="mb-6 flex justify-center">
          <ButtonSocial>
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-full w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </ButtonSocial>
          <ButtonSocial>
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-full w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </ButtonSocial>
          <ButtonSocial>
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-full w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fill-rule="evenodd" clip-rule="evenodd" />
            </svg>
          </ButtonSocial>
          <ButtonSocial>
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-full w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </ButtonSocial>
          <ButtonSocial>
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-full w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </ButtonSocial>
          <ButtonSocial>
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-full w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </ButtonSocial>
        </div>
        <p className='text-sm text-center'>Escribenos si tienes alguna duda o si quieres formar parte de nuestro equipo</p>
        <div 
          className="w-full p-4 text-center"
        >© 2023 Copyright: 
        {" "}<a class="text-white" href="#">Sethor</a>
        </div>
      </footer>
    </div>
  )
}
