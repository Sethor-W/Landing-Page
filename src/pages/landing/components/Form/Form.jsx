import React from 'react'

export default function Form() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <form
        onSubmit={handleSubmit}
    >
        <div className='grid mb-[2rem] md:grid-cols-2 md:gap-20 md:items-baseline'>
            <div>
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
            </div>
            <textarea
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                rows="5"
                name='suggestion'
                id='suggestion'
                placeholder="Sugerencia (Opcional)"
            ></textarea>
        </div>
        <button 
            className="w-full md:w-[46%] flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
        >Unirse</button>
    </form>
  )
}
