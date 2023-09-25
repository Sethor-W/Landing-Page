import db from "@/config/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Label from "../Label/Label";
import Textarea from "../Textarea/Textarea";
import ButtonShare from "../ButtonShare/ButtonShare";
// import transporter from "@/config/email";

export default function Form() {
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
    
    const [loading, setLoading] = useState(false);
    const [statusSendEmail, setStatusSendEmail] = useState(false);
    const [error, setError] = useState(null);
    const [mail, setMail] = useState(null);

    async function sendEmail(emailDestination, code, name) {
      const dataToSend = {
        mailTo: emailDestination,
        code: code,
        name: name,
      };
      setLoading(true);

      try {
        const response = await fetch('/api/email-send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataToSend)
        })

        if (response.status === 200) {
          setStatusSendEmail(true);
        }
      } catch (error) {
        console.error('Error al enviar mail:', error)
      } finally {
        setLoading(false);
      }

    }

    const generateShortUniqueCode = async (length=6) => {
      let code;
      let bucle = false;

      do {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        code = '';

        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          code += characters.charAt(randomIndex);
        }

        // Verifica si el código existe en la base de datos
        const codeQuery = query(
          collection(db, "user_wait_list"),
          where("code", "==", code)
        );
        const querySnapshot = await getDocs(codeQuery);

        if (querySnapshot.empty) {
          bucle = false; // El código no existe, sal del bucle
        } else {
          bucle = true; // El código ya existe, continúa el bucle
        }
      } while (bucle);
    
      return code;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const name = e.target.name.value;
            const email = e.target.email.value;
            const country = e.target.country.value;

            const q1 = e.target.q1.value;
            // const q2 = e.target.q2.value;
            // const q3 = e.target.q3.value;
            // const q4 = e.target.q4.value;
            // const q5 = e.target.q5.value;
            const q6 = e.target.q6.value;
            const q7 = e.target.q7.value;
            // const q8 = e.target.q8.value;
            // const q9 = e.target.q9.value;
            const q10 = e.target.q10.value;
            const ref_email = e.target.ref_email.value;
            
            if (ref_email) {
              const refQuery = query(
                collection(db, "user_wait_list"),
                where("email", "==", ref_email)
              );
              const querySnapshot = await getDocs(refQuery);

              if (querySnapshot.empty) {
                const error = "El referido debe registrarse en la lista de espera.";
                setError(error);
                throw new Error(error);
              }
            }

            if (!name || !email || !country) {
                const error = "Nombre, correo electrónico y país son obligatorios";
                setError(error);
                throw new Error(error);
            }

            if (!q1 || !q6 || !q7 || !q10) {
                const error = "Todos los campos son obligatorios";
                setError(error);
                throw new Error(error);
            }

            // Verifica si el usuario ya existe en la colección
            const userQuery = query(
                collection(db, "user_wait_list"),
                where("email", "==", email)
            );
            const querySnapshot = await getDocs(userQuery);

            if (!querySnapshot.empty) {
                const error = "El correo del usuario ya está en la lista de espera, prueba con otro correo";
                setError(error);
                throw new Error(error);
            }

            // const uniqueCode = uuidv4();
            const uniqueCode = await generateShortUniqueCode(6);
            await addDoc(collection(db, "user_wait_list"), {
                name: name,
                email: email,
                country,
                q1,
                q6,
                q7,
                q10,
                ref_email,
                code: uniqueCode,
            });
            await sendEmail(email, uniqueCode, name);
            setMail(email)
        } catch (error) {
            console.error(error);
        }
    };

    const handleActiveForm = () => {
      setLoading(false);
      setStatusSendEmail(false);
      setError(null);
    }

  return (
    <form
        class="space-y-6"
        onSubmit={handleSubmit}
    >
      {/* Titulos */}
      {statusSendEmail && (
        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
          Bienvenido a Sethor
        </h3>
      )}
      {!loading && !statusSendEmail && (
        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
          Llena la encuesta para ser parte de Sethor
        </h3>
      )}

      {/* Mensaje de Carga */}
      {loading && (
        <>
          <p className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Espere un momento, se esta enviando su respuesta...</p>
        </>
      )}

      {/* Formulario */}
      {!loading && !statusSendEmail && (
      // {true && (
        <div className="form">
          <div>
            <label
              for="name"
              class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Tu nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              // required
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Tu email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@example.com"
              // required
            />
          </div>
          <div>
            <label
              for="country"
              class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Tu país
            </label>
            <select
              className="text-gray-900 text-base block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              name="country"
              // required
            >
              <option value="" className="text-gray-900 text-base">
                Selecciona un país
              </option>
              {countries.map((country, index) => (
                <option
                  key={index}
                  value={country}
                  className="text-gray-900 text-base"
                >
                  {country}
                </option>
              ))}
            </select>
          </div>
          <hr className="my-5" />
          <div>
            <Label forHTML={"q1"}>
              ¿Te gustaría poder pagar sin la necesidad de usar efectivo, tarjetas
              bancarias o tu propio dispositivo móvil? Y ¿Por qué?
            </Label>
            <Textarea name={"q1"} id={"q1"} />
          </div>
          {/* <div>
            <Label forHTML={"q2"}>
              Si tuvieras la oportunidad de crear una billetera digital, ¿Que
              herramientas o beneficios incluirías que crees que serían útiles para
              ti o para los demás?
            </Label>
            <Textarea name={"q2"} id={"q2"} />
          </div> */}
          {/* <div>
            <Label forHTML={"q3"}>
              ¿Cuál es tu mayor temor o preocupación sobre una aplicación
              financiera?
            </Label>
            <Textarea name={"q3"} id={"q3"} />
          </div> */}
          {/* <div>
            <Label forHTML={"q4"}>
              Si tuvieras la oportunidad de crear una plataforma de comercio
              electrónico, ¿Que herramientas o beneficios incluirías que crees que
              serían útiles para ti o para los demás?
            </Label>
            <Textarea name={"q4"} id={"q4"} />
          </div> */}
          {/* <div>
            <Label forHTML={"q5"}>
              ¿Cuál es tu mayor temor o preocupación sobre una plataforma de
              comercio electrónico?
            </Label>
            <Textarea name={"q5"} id={"q5"} />
          </div> */}
          <div>
            <Label forHTML={"q6"}>
              Si te dieran la opción de pagar usando tu huella o tu cara ¿Cuál
              opción escogerías?
            </Label>
            <Textarea name={"q6"} id={"q6"} />
          </div>
          <div>
            <Label forHTML={"q7"}>
              En base al video que viste ¿Consideras que nuestro producto satisface
              tus necesidades?
            </Label>
            <Textarea name={"q7"} id={"q7"} />
          </div>
          {/* <div>
            <Label forHTML={"q8"}>
              ¿Qué te parece la idea de una aplicación donde puedas hacer
              actividades financieras y también poder hacer actividades de un
              comercio electrónico como comprar una laptop o un juego de cocina?
            </Label>
            <Textarea name={"q8"} id={"q8"} />
          </div> */}
          {/* <div>
            <Label forHTML={"q9"}>
              ¿Qué piensas sobre poder usar tu huella o tu cara para poder pagar en
              un establecimiento físico?
            </Label>
            <Textarea name={"q9"} id={"q9"} />
          </div> */}
          <div>
            <Label forHTML={"q10"}>
              Si actualmente estuviéramos disponible en el mercado para tu uso,
              ¿descargarías nuestra aplicación y la recomendarías a tus conocidos?
            </Label>
            <Textarea name={"q10"} id={"q10"} />
          </div>
          <hr />
          <br />
          <div>
            <Label forHTML={"ref_email"}>
              Correo del referido <span className="text-gray-800 text-base dark:text-white italic">(Opcional)</span>
              {/* <p className="text-gray-900 text-sm font-normal dark:text-white italic">Este correo le da beneficios adicionales a su referido.</p> */}
            </Label>
            <input
              type="email"
              name="ref_email"
              id="ref_email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="ref@example.com"
            />
          </div>
          <p className="text-gray-900 text-base dark:text-white italic">
            Al enviar el formulario se suscribira a la lista de espera de Sethor para acceder a los beneficios.
          </p>
          {error && (
            <p className="text-red-500 text-base font-medium mt-3">
                {error}
            </p>
          )}
        </div>
      )}


      {statusSendEmail && (
        <p className="text-gray-900 text-base font-medium dark:text-white">
          Muchas gracias por completar la encuesta, seras de los primeros en saber
          de nuestro lanzamiento, te hemos enviado un correo con el codigo para que
          puedas acceder a los beneficios de la lista de espera.
        </p>
      )}

      {/* Buttons */}
      {loading && (
        <button
          disabled={true}
          class="w-full text-white bg-blue-400 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enviando...
        </button>
      )}
      {!loading && !statusSendEmail && (
        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Unirse
        </button>
      )}
      {statusSendEmail && (
        <>
          <button
            onClick={handleActiveForm}
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Agregar a otra persona a la lista de espera
          </button>
          <ButtonShare
            link={'https://www.sethor.tech/'}
            mail={mail}
          />
        </>
      )}
    </form>
  );
}
