import React, { useState } from 'react'
import Link from 'next/link';

export default function SectionShare({link, mail}) {

  const [copied, setCopied] = useState(false);

  const message = `Únete a Sethor y obtén beneficios exclusivos usando mi correo como referencia: ${mail} ¡Lo mejor está en Sethor!`

  const messageCopy = `
    Únete a Sethor y obtén beneficios exclusivos usando mi correo como referencia: ${mail}
    ¡Lo mejor está en Sethor!

    ${link}
  `

  const handleCopyClick = () => {
    const textArea = document.createElement('textarea');
    textArea.value = messageCopy;
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
        <h2 className='text-white text-xl mb-2 md:text-xl lg:text-2xl'>Compartir:</h2>
        <p className='text-sm text-white md:text-base lg:text-lg'>Comparte Sethor con tus amigos y recibe mas beneficios cuando usen tu correo como referido.</p>
        <div className='mt-5 flex flex-row justify-center items-center gap-10'>
            <div className='flex flex-row justify-center items-center'>
                <Link
                    className='h-9 w-9 m-1 border p-[.4rem] rounded-xl'
                    href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/icons/facebook.svg"
                        alt="facebook"
                    />
                </Link>
                <Link
                    className='h-9 w-9 m-1 border p-[.4rem] rounded-xl'
                    href={`https://twitter.com/intent/tweet?url=${link}&text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/icons/X.svg"
                        alt="x"
                    />
                </Link>
            </div>
            <div
                onClick={handleCopyClick}
                className='h-9 w-9 m-1 cursor-pointer border p-[.4rem] rounded-xl'
            >
                <img
                 src={`/icons/${copied ? 'check' : 'copy'}.svg`}
                 alt=""
                />
            </div>
        </div>
    </div>
  )
}
