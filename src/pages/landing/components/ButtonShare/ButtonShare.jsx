import React, { useState } from 'react'

export default function ButtonShare({link, mail}) {

  const [copied, setCopied] = useState(false);

  const message = `Únete a Sethor, usando mi correo de referencia [${mail}] para ganar más beneficios. Lo mejor con Sethor!`

  const handleCopyClick = () => {
    const textArea = document.createElement('textarea');
    textArea.value = link;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setCopied(true);
    setTimeout(()=>{
        setCopied(false);
    }, 3000)
  };


  return (
    <div className=''>
        <h2 className='text-gray-900 text-xl mb-2'>Compartir:</h2>
        <p className='text-sm text-gray-900'>Comparte Sethor con tus amigos y recibe mas beneficios cuando usen tu correo como referido.</p>
        <div className='flex flex-row justify-center items-center gap-10'>
            <div className='flex flex-row justify-center items-center'>
                <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
                    class="m-1 h-9 w-9 rounded-full border-2 bg-[#3b82f6] uppercase leading-normal text-gray-900 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 shadow-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-full w-4" fill="#fff" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                </a>
                <a
                    href={`https://twitter.com/intent/tweet?url=${link}&text=${message}`}
                    class="m-1 h-9 w-9 rounded-full border-2 bg-[#3b82f6] uppercase leading-normal text-[#3b82f6] transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-full w-4" fill="#fff" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                </a>
            </div>
            <div
                onClick={handleCopyClick}
                className='cursor-pointer m-1 h-8 w-8 rounded-lg border-2 flex items-center justify-center border-gray-900 uppercase leading-normal text-[#3b82f6] transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0'
            >
                <img
                 className='h-5 text-white'
                 src={`/icons/${copied ? 'check' : 'copy'}.svg`}
                 alt=""
                />
            </div>
        </div>
    </div>
  )
}
