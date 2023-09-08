import db from '@/config/firebase';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'


export default function Form() {

    const [error, setError] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const name = e.target.name.value;
            const email = e.target.email.value;
            const suggestion = e.target.suggestion.value;

            if (!name || !email) {
                const error = 'Nombre y correo electrónico son obligatorios';
                setError(error)
                throw new Error(error);
            }

            // Verifica si el usuario ya existe en la colección
            const userQuery = query(collection(db, 'user_wait_list'), where('email', '==', email));
            const querySnapshot = await getDocs(userQuery);

            if (!querySnapshot.empty) {
                const error = 'El correo del usuario ya está en la lista de espera, prueba con otro correo';
                setError(error)
                throw new Error(error);
            }

            const uniqueCode = uuidv4();
            const docRef = await addDoc(collection(db, "user_wait_list"), {
                name: name,
                email: email,
                suggestion: suggestion ? suggestion : null,
                code: uniqueCode,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error(error)
            
        }
    }

  return (
    <form
        onSubmit={handleSubmit}
        className='border-2 rounded-lg p-8'
    >
        {error && <p className='text-sm text-red-600'>{error}</p>}

        <div className='grid mb-[2rem] md:grid-cols-s2 md:gaps-20 md:items-sbaseline'>
            <div>
                <div>
                    <label htmlFor="name" className='text-sm'>Nombre</label>
                    <input
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        type="text"
                        name='name'
                        id='name'
                        placeholder="Nombre y Apellido"
                    />
                </div>
                <div>
                    <label htmlFor="email" className='text-sm'>Email</label>
                    <input
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        type="email"
                        name='email'
                        id='email'
                        placeholder="Correo electronico"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="suggestion" className='text-sm'>Sugerencia</label>
                <textarea
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    rows="5"
                    name='suggestion'
                    id='suggestion'
                    placeholder="Sugerencia (Opcional)"
                ></textarea>
            </div>
        </div>
        <button 
            className="w-full flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
        >Unirse</button>
    </form>
  )
}
