import React, { useState } from 'react'


export default function Popup({children, active, handleDesactive}) {

  return (
    <div
        className={`fixed top-0 left-0 right-0 z-50 ${active ? 'block' : 'hidden'} w-full p-4 md:px-28 xl:px-40 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full bg-black/[.5]`}
        id="authentication-modal"
    >
        {/* <!-- Modal content --> */}
        <div
            className="relative z-40 rounded-[1.9rem] shadow-2xl bg-[url(/img/Hero-Background.png)]  bg-no-repeat bg-top bg-cover"
        >
            <div className='bg-gradient-section1-bgs rounded-[1.9rem]'>
                <div className='bg-gradient-section1-b-t px-5 py-10 lg:p-20 rounded-[1.9rem]'>
                    <button
                        onClick={handleDesactive}
                        className="absolute top-10 right-5 lg:top-11 lg:right-11 mr-auto bg-transparent w-4 h-4"
                    >
                        <img
                            src="/icons/close.svg"
                            alt="Close"
                        />
                    </button>
                    {children}
                </div>
            </div>
        </div>
    </div> 

  )
}
