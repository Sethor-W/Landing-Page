import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Head from "next/head";
import Popup from "./components/Popup/Popup";
import Label from "./components/Label/Label";
import Textarea from "./components/Textarea/Textarea";

export default function Landing() {
  const [userActive, setUserActive] = useState(true);

  const countries = [
    "Afganistán",
    "Albania",
    "Alemania",
    "Andorra",
    "Angola",
    "Antigua y Barbuda",
    "Arabia Saudita",
    "Argelia",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaiyán",
    "Bahamas",
    "Bangladés",
    "Barbados",
    "Baréin",
    "Bélgica",
    "Belice",
    "Benín",
    "Bielorrusia",
    "Birmania",
    "Bolivia",
    "Bosnia y Herzegovina",
    "Botsuana",
    "Brasil",
    "Brunéi",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Bután",
    "Cabo Verde",
    "Camboya",
    "Camerún",
    "Canadá",
    "Catar",
    "Chad",
    "Chile",
    "China",
    "Chipre",
    "Colombia",
    "Comoras",
    "Congo",
    "Corea del Norte",
    "Corea del Sur",
    "Costa de Marfil",
    "Costa Rica",
    "Croacia",
    "Cuba",
    "Dinamarca",
    "Dominica",
    "Ecuador",
    "Egipto",
    "El Salvador",
    "Emiratos Árabes Unidos",
    "Eritrea",
    "Eslovaquia",
    "Eslovenia",
    "España",
    "Estados Unidos",
    "Estonia",
    "Etiopía",
    "Filipinas",
    "Finlandia",
    "Fiyi",
    "Francia",
    "Gabón",
    "Gambia",
    "Georgia",
    "Ghana",
    "Granada",
    "Grecia",
    "Guatemala",
    "Guyana",
    "Guinea",
    "Guinea-Bisáu",
    "Guinea Ecuatorial",
    "Haití",
    "Honduras",
    "Hungría",
    "India",
    "Indonesia",
    "Irak",
    "Irán",
    "Irlanda",
    "Islandia",
    "Islas Marshall",
    "Islas Salomón",
    "Israel",
    "Italia",
    "Jamaica",
    "Japón",
    "Jordania",
    "Kazajistán",
    "Kenia",
    "Kirguistán",
    "Kiribati",
    "Kuwait",
    "Laos",
    "Lesoto",
    "Letonia",
    "Líbano",
    "Liberia",
    "Libia",
    "Liechtenstein",
    "Lituania",
    "Luxemburgo",
    "Macedonia del Norte",
    "Madagascar",
    "Malasia",
    "Malaui",
    "Maldivas",
    "Malí",
    "Malta",
    "Marruecos",
    "Mauricio",
    "Mauritania",
    "México",
    "Micronesia",
    "Moldavia",
    "Mónaco",
    "Mongolia",
    "Montenegro",
    "Mozambique",
    "Namibia",
    "Nauru",
    "Nepal",
    "Nicaragua",
    "Níger",
    "Nigeria",
    "Noruega",
    "Nueva Zelanda",
    "Omán",
    "Países Bajos",
    "Pakistán",
    "Palaos",
    "Panamá",
    "Papúa Nueva Guinea",
    "Paraguay",
    "Perú",
    "Polonia",
    "Portugal",
    "Reino Unido",
    "República Centroafricana",
    "República Checa",
    "República del Congo",
    "República Dominicana",
    "Ruanda",
    "Rumania",
    "Rusia",
    "Samoa",
    "San Cristóbal y Nieves",
    "San Marino",
    "Santa Lucía",
    "Santo Tomé y Príncipe",
    "San Vicente y las Granadinas",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leona",
    "Singapur",
    "Siria",
    "Somalia",
    "Sri Lanka",
    "Suazilandia",
    "Sudáfrica",
    "Sudán",
    "Sudán del Sur",
    "Suecia",
    "Suiza",
    "Surinam",
    "Tailandia",
    "Taiwán",
    "Tanzania",
    "Tayikistán",
    "Timor Oriental",
    "Togo",
    "Tonga",
    "Trinidad y Tobago",
    "Túnez",
    "Turkmenistán",
    "Turquía",
    "Tuvalu",
    "Ucrania",
    "Uganda",
    "Uruguay",
    "Uzbekistán",
    "Vanuatu",
    "Vaticano",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Yibuti",
    "Zambia",
    "Zimbabue",
  ];

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
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="">
        <div className="bg-[url(/img/bg-section-p.jfif)] bg-cover bg-no-repeat bg-left-top">
          <section
            id="home"
            className="section1 section-principal bg-black/10s body text-2xl mt-20 pt-20 text-center  "
          >
            <div className="mt-20 md:text-left md:text-4xl grid grid-rows-1 md:grid-cols-2 justify-center items-center gap-4">
              <article className="">
                <h1 className="mb-10 title">
                  Te damos la bienvenida a tu proxima aplicación hibrida entre una
                  cartera digital y un comercio electronico
                </h1>
                <a
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800 bg-gradient-to-br from-blue-500 to-green-500 shadow-lg"
                  href="#features"
                >
                  Conocer Más
                </a>
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
                <h1 className="text-gray-900 font-bold mb-4 text-2xl md:text-4xl md:mb-10">
                  Buscamos centralizar la demanda de los metodos de pagos seguros y  ofrecerte una experiencia en compra en linea  comoda y confiable
                </h1>
                <p className="text-gray-900 mb-4 text-sm md:text-lg md:mb-10">
                  Todo esto sin la necesidad de compartir tus datos generales a la hora de usar una de nuestras herramientas
                </p>
              </div>
              <video
                className="w-[70vw] rounded-md shadow-slate-800 shadow-md m-4"
                src="/video/video.mp4"
                controls
                play
              ></video>
            </section>
        </div>

        {/* <section className='body section2 grid-rows-3 text-2xl mt-16 text-center flex flex-col gap-4 '>
            <h1>Buscamos centralizar la demanda de los metodos de pagos seguros y ofrecerte una experiencia en compra en linea comoda y confiable</h1>
            <p className='text-sm'>Todo esto sin la necesidad de compartir tus datos generales a la hora de usar una de nuestras herramientas</p>
          </section> */}
        {/* <section id="features" className='body grid-rows-3 text-2xl mt-16 flex flex-col gap-4 '>
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
          </section> */}

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
                <h1 className="md:text-3xl">
                  ¿Te interesa formar parte de nuestra comunidad y obtener
                  bonificaciónes el dia de lanzamiento?
                </h1>
                <p className="text-base font-semibold">
                  ¡Si es asi, es tu dia de suerte ya que está es tu oportunidad
                  de ser una de las personas aseguradas que tendran acceso
                  premium a la aplicación el dia de su lanzamiento y serán
                  premiadas con beneficios especiales!
                </p>
                <p className="text-sm">
                  Para esto solo tendras que llenar el formulario para saber
                  aquellas cosas que te gustarian que esten en nuestra app o
                  aquellas cosas que quiseras que no esten como por ejemplo
                  ofrecer una baja tarifa de comisión para envios
                  internacionales. Al finalizar, ya estaras en nuestra lista de
                  espera para ser una de las primeras personas en utilizarnos y
                  en recompensa se te facilitara un codigo con el cual se te
                  garantizara a la hora de registrate por primera vez en nuestra
                  innovadora aplicación, ventajas que no obtendrán otras
                  personas que no esten en la lista de espera.
                </p>
              </div>
              <Popup>
                <div class="px-6 py-6 lg:px-8 w-full md:flex md:flex-col md:mx-auto">
                  <img
                    className="w-[50%] mx-auto mb-5 drop-shadow-lg"
                    src="/logo/Logotipo.svg"
                    alt=""
                  />
                  <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Llena la encuesta para ser parte de Sethor
                  </h3>
                  <form class="space-y-6" action="#">
                    <div>
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Tu nombre
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nombre"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Tu email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for=""
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Tu país
                      </label>
                      <select
                        className="text-gray-900 text-sm block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                        required
                      >
                        <option value="" className="text-gray-900 text-sm">
                          Selecciona un país
                        </option>
                        {countries.map((country, index) => (
                          <option
                            key={index}
                            value={country}
                            className="text-gray-900 text-sm"
                          >
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                    <hr />
                    <div>
                      <Label forHTML={"q1"}>
                        ¿Te gustaría poder pagar sin la necesidad de usar
                        efectivo, tarjetas bancarias o tu propio dispositivo
                        móvil? Y ¿Por qué?
                      </Label>
                      <Textarea name={"q1"} id={"q1"} />
                    </div>
                    <div>
                      <Label forHTML={"q2"}>
                        Si tuvieras la oportunidad de crear una billetera
                        digital, ¿Que herramientas o beneficios incluirías que
                        crees que serían útiles para ti o para los demás?
                      </Label>
                      <Textarea name={"q2"} id={"q2"} />
                    </div>
                    <div>
                      <Label forHTML={"q3"}>
                        ¿Cuál es tu mayor temor o preocupación sobre una
                        aplicación financiera?
                      </Label>
                      <Textarea name={"q3"} id={"q3"} />
                    </div>
                    <div>
                      <Label forHTML={"q4"}>
                        Si tuvieras la oportunidad de crear una plataforma de
                        comercio electrónico, ¿Que herramientas o beneficios
                        incluirías que crees que serían útiles para ti o para
                        los demás?
                      </Label>
                      <Textarea name={"q4"} id={"q4"} />
                    </div>
                    <div>
                      <Label forHTML={"q5"}>
                        ¿Cuál es tu mayor temor o preocupación sobre una
                        plataforma de comercio electrónico?
                      </Label>
                      <Textarea name={"q5"} id={"q5"} />
                    </div>
                    <div>
                      <Label forHTML={"q6"}>
                        Si te dieran la opción de pagar usando tu huella o tu
                        cara ¿Cuál opción escogerías?
                      </Label>
                      <Textarea name={"q6"} id={"q6"} />
                    </div>
                    <div>
                      <Label forHTML={"q7"}>
                        En base al video que viste ¿Consideras que nuestro
                        producto satisface tus necesidades?
                      </Label>
                      <Textarea name={"q7"} id={"q7"} />
                    </div>
                    <div>
                      <Label forHTML={"q8"}>
                        ¿Qué te parece la idea de una aplicación donde puedas
                        hacer actividades financieras y también poder hacer
                        actividades de un comercio electrónico como comprar una
                        laptop o un juego de cocina?
                      </Label>
                      <Textarea name={"q8"} id={"q8"} />
                    </div>
                    <div>
                      <Label forHTML={"q9"}>
                        ¿Qué piensas sobre poder usar tu huella o tu cara para
                        poder pagar en un establecimiento físico?
                      </Label>
                      <Textarea name={"q9"} id={"q9"} />
                    </div>
                    <div>
                      <Label forHTML={"q10"}>
                        Si actualmente estuviéramos disponible en el mercado
                        para tu uso, ¿descargarías nuestra aplicación y la
                        recomendarías a tus conocidos?
                      </Label>
                      <Textarea name={"q10"} id={"q10"} />
                    </div>
                    <hr />
                    <p className="text-gray-900 text-sm">
                      Muchas gracias por completar la encuesta, seras de los
                      primeros en saber de nuestro lanzamiento, te enviaremos un
                      correo con el codigo para que puedas acceder a los
                      beneficios de la lista de espera.
                    </p>
                    <button
                      type="submit"
                      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Unirse
                    </button>
                  </form>
                </div>
              </Popup>
              {/* <Form /> */}
            </div>
            <p className="text-sm mt-10">
              Con Sethor dejaras atras el estar saliendo de una aplicación a
              otra para realizar la acción que quieres
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
