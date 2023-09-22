import React, { useState } from 'react'

export default function Popup({children, nameButton}) {

    const [activePopup, setActivePopup] = useState(false);

    const handleActivePopup = ()=>{
        setActivePopup(true)
    }
    const handleDesactivePopup = ()=>{
        setActivePopup(false)
    }

  return (
    <div>
        <button onClick={handleActivePopup} class="block text-white hover:text-violet-700 bg-violet-700 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-violet-g00 dark:hover:bg-white dark:focus:ring-black mx-auto" type="button">
            {nameButton}
        </button>
        <div id="authentication-modal" tabindex="-1" aria-hidden="false" class={`fixed top-0 left-0 right-0 z-50 ${!activePopup && 'hidden'} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full bg-black/[.5]`}>
            <div className="relative max-h-full  w-[calc(100vw-2.45rem)]">
                {/* <!-- Modal content --> */}
                <div className="relative z-40 bg-white rounded-lg shadow dark:bg-gray-700 w-[inherit] bg-[url(/img/bg-video.webp)] bg-fixed bg-no-repeat scale-x-[-1] md:w-[70%] mx-auto">
                    <div className='scale-x-[-1]'>
                        <button onClick={handleDesactivePopup} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-base w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="rgb(75 85 99)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        {children}
                    </div>
                </div>
            </div>
        </div> 

    </div>
  )
}
