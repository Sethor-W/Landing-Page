import db from "@/config/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Label from "../Inputs/Label/Label";
import Textarea from "../Inputs/Textarea/Textarea";
import SectionShare from "../SectionShare/SectionShare";
import Input from "../Inputs/Input/Input";
import { SyncLoader } from "react-spinners";
// import transporter from "@/config/email";


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

const imgLogo = <div className="w-full">
                  <img
                    className="h-16 text-center lg:h-24 lg:mx-auto"
                    src="/logo/Sethor-Logo.svg"
                    alt="Sethor"
                  />
                </div>
const imgLogoStatusSendEmail = <div className="w-full">
                  <img
                    className="h-16 text-center lg:h-24"
                    src="/logo/Sethor-Logo.svg"
                    alt="Sethor"
                  />
                </div>

export default function Form() {
    
    const [changeButton_Loading, setChangeButton_Loading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [statusSendEmail, setStatusSendEmail] = useState(false);
    const [mail, setMail] = useState(null);
    const [optionRef, setOptionRef] = useState('correo');
    const [birthDate, setBirthDate] = useState(''); // Estado para la fecha de nacimiento
    const [error, setError] = useState(null);
    const [errorDate, setErrorDate] = useState(null);

    const [fingerprint, setFingerprint] = useState(false);
    const [face, setFace] = useState(false);

    

    const handleFechaChange = (e) => {
      const newDate = e.target.value;
      // Validación del formato de fecha usando una expresión regular (dd/mm/yyyy)
      const validFormat = /^\d{2}\/\d{2}\/\d{4}$/.test(newDate);
      
      if (validFormat) {
        setErrorDate('');
        setBirthDate(newDate);
      } else {
        setErrorDate('El formato de fecha debe ser dd/mm/yyyy');
      }
    };

    const handleOptionRefChange = (e) => {
      setOptionRef(e.target.value);
    };

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
        setChangeButton_Loading(true)
        setError(null);
        let referralUpperCase = null;
        try {
            const name = e.target.name.value;
            const email = e.target.email.value;
            const country = e.target.country.value;
            const referral = e.target.referral.value;
            const suggestion_opinion = e.target.suggestion_opinion.value;
            
            if (optionRef === 'correo' && referral) {
                const refQuery = query(
                  collection(db, "user_wait_list"),
                  where("email", "==", referral)
                );
                const querySnapshot = await getDocs(refQuery);
  
                if (querySnapshot.empty) {
                  const error = "El referido debe registrarse en la lista de espera.";
                  setError(error);
                  throw new Error(error);
                }
            }
            if (optionRef === 'codigo' && referral) {
              referralUpperCase = referral.toUpperCase()
              console.log(referralUpperCase)
              const refQuery = query(
                collection(db, "code_ref"),
                where("code", "==", referralUpperCase)
              );
              const querySnapshot = await getDocs(refQuery);

              if (querySnapshot.empty) {
                const error = "Codigo de referido incorrecto.";
                setError(error);
                throw new Error(error);
              }
            }
            if (!name || !email || !country || !birthDate) {
              const error = "Nombre, correo electrónico, fecha de nacimiento y país son obligatorios";
              setError(error);
              throw new Error(error);
            }
            if (!fingerprint && !face) {
              const error = "Debe seleccionar su preferencia de pago";
              setError(error);
              throw new Error(error);
            }
            if (!suggestion_opinion) {
              const error = "La sugerencia u opinion es un campo obligatorio";
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

            
            const uniqueCode = await generateShortUniqueCode(6);
            await addDoc(collection(db, "user_wait_list"), {
                name: name,
                email: email,
                birthDate: birthDate,
                country: country,
                referral: referralUpperCase,
                suggestion_opinion,
                payment_preference: {
                  fingerprint: fingerprint,
                  face: face,
                },
                code: uniqueCode,
            });
            await sendEmail(email, uniqueCode, name);
            setMail(email);
        } catch (error) {
            console.error(error);
        }

        setChangeButton_Loading(false)

    };

    const handleActiveForm = () => {
      setLoading(false);
      setStatusSendEmail(false);
      setError(null);
    }

  return (
    <form
        onSubmit={handleSubmit}
    >
      {/* Titulos */}
      {!loading && !statusSendEmail && (
        <div className="flex flex-col gap-5 w-full lg:flex-row-reverse lg:justify-between">
          {imgLogo}
          <h1 class="mb-4 text-2xl lg:text-4xl font-medium text-white">
            Llena la encuesta para ser parte de Sethor
          </h1>
        </div>
      )}
      {statusSendEmail && (
        <>
          {imgLogoStatusSendEmail}
          <div className="flex flex-col gap-4">
            <h1 className="mt-10 text-2xl font-medium text-white md:text-3xl lg:text-4xl">
              Bienvenido a Sethor
            </h1>
            <p className="text-white text-sm font-normal md:text-base lg:text-lg">
              Muchas gracias por completar la encuesta, seras de los primeros en saber
              de nuestro lanzamiento, te hemos enviado un correo con el codigo para que
              puedas acceder a los beneficios de la lista de espera.
            </p>
            <button
              onClick={handleActiveForm}
              className='text-black text-xl font-bold bg-[var(--background-button-action-rgb)] box-shadow-button-action px-10 py-5 text-center w-full rounded-3xl'
            >
              Agregar otra persona a la lista de espera
            </button>
            <SectionShare
              link={'https://www.sethor.tech/'}
              mail={mail}
            />
          </div>
        </>
      )}


      {/* Mensaje de Carga */}
      {loading && (
        <>
          {imgLogo}
          <div className="flex flex-col items-center gap-6">
            <p className="my-4 text-xl font-medium text-gray-900 dark:text-white">Espere un momento, se esta enviando su respuesta...</p>
            <SyncLoader
              color={'#fff'}
              loading={true}
            />
          </div>
        </>
      )}

      {/* Formulario */}
      {!loading && !statusSendEmail && (
      // {true && (
        <div className="form">
          <div className="lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
              <Label forHTML={"name"}>Nombre completo</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre"
                required={true}
              />
            </div>

            <div>
              <Label forHTML={"birthdate"}>Fecha de nacimiento</Label>
              <TextError>{errorDate}</TextError>
              <Input
                onChange={handleFechaChange}
                type="text"
                name="birthdate"
                id="birthdate"
                placeholder="dd/mm/yyyy"
                // required={true}
              />
            </div>

            <div>
              <Label forHTML={"email"}>Correo electrónico</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="sethor@example.com"
                // required={true}
              />
            </div>

            <div>
              <Label forHTML={"country"}>Tu país</Label>
              <select
                className="bg-black/5 text-white/[.9] border border-[#898989] text-sm block w-full px-5 py-3 rounded-xl focus:outline-none"
                name="country"
                // required
              >
                <option value="" className="text-gray-900 text-base bg-black/5">
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
            
            <div className="mt-5 text-gray-800 text-base">
              <h2 className="text-2xl font-bold">
                {optionRef === 'correo' ? 'Correo' : 'Código'} de referido (Opcional)
              </h2>
              <Label>
                Elije una opción de referido:
              </Label>
              <div className="flex gap-10">
                <label>
                  <input
                    type="radio"
                    name="ref_email"
                    id="ref_email"
                    value="correo"
                    checked={optionRef === 'correo'}
                    onChange={handleOptionRefChange}
                  />
                  <span className="text-gray-800 text-base dark:text-white ml-2">Correo</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="ref_code"
                    id="ref_code"
                    value="codigo"
                    checked={optionRef === 'codigo'}
                    onChange={handleOptionRefChange}
                  />
                  <span className="text-gray-800 text-base dark:text-white ml-2">Código</span>
                </label>
              </div>
              {optionRef === 'correo' ? (
                <Input
                  type="email"
                  name="referral"
                  id="referral"
                  placeholder="sethor.ref@example.com"
                  // required={true}
                />
              ) : (
                <Input
                  type="text"
                  name="referral"
                  id="referral"
                  placeholder="SETHOR2023"
                  // required={true}
                />
              )}
            </div>
          </div>


          <hr className="my-8" />

          <div>
            <Label>Con cual prefieres pagar: </Label>
            <div className="flex flex-row items-center gap-7 mb-7">
              <div className="flex flex-row items-center gap-2">
                <input
                  className="m-0 cursor-pointer"
                  type="checkbox"
                  id="fingerprint"
                  name="fingerprint"
                  onChange={() => setFingerprint(!fingerprint)}
                />
                <label
                    className="text-sm text-white font-normal"
                    htmlFor="fingerprint"
                >Huella digital</label>
              </div>
              <div className="flex flex-row items-center gap-2">
                <input
                  className="m-0 cursor-pointer"
                  type="checkbox"
                  id="face"
                  name="face"
                  onChange={() => setFace(!face)}
                />
                <label
                    className="text-sm text-white font-normal"
                    htmlFor="face"
                >Rostro</label>
              </div>
            </div>
          </div>

          <div>
            <Label forHTML={"suggestion_opinion"}>
              ¿Que sugerencia o herramienta te gustaría que tomemos en consideración para la creación de la aplicación?
            </Label>
            <Textarea name={"suggestion_opinion"} id={"suggestion_opinion"} placeholder={'Tu sugerencia aquí...'} />
          </div>
          
          <p className="text-white mt-8 mb-10 text-sm font-normal italic">
            Al enviar el formulario se suscribira a la lista de espera de Sethor para acceder a los beneficios.
          </p>
          {error && (
            <TextError>
              {error}
            </TextError>
          )}
        </div>
      )}

      {/* Buttons */}
      {loading || changeButton_Loading && (
        <button
          disabled={true}
          className='text-white/[.8] text-xl font-bold bg-[#5befe6]/[.8] box-shadow-button-action py-5 text-center w-full rounded-3xl'
        >
          Enviando...
        </button>
      )}
      {!changeButton_Loading && !loading && !statusSendEmail && (
        <button
          type="submit"
          className='text-black text-xl font-bold bg-[var(--background-button-action-rgb)] box-shadow-button-action py-5 text-center w-full rounded-3xl'
        >
          Unirse a la lista de espera
        </button>
      )}
    </form>
  );
}


const TextError = ({children}) => {
  return (
      <p className="text-red-500 text-base font-medium mt-3">
        {children}
      </p>
  )
}

