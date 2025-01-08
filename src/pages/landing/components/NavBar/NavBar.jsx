import React, { useState } from "react";
import Link from "next/link";
import ButtonActivePopup from "../Buttons/ButtonActivePopup/ButtonActivePopup";
import { TEXTS_BUTTONS } from "../../../../../public/data/buttons/TextLanding";
import { LinksNav } from "../../../../../public/data/links/Nav";


export default function NavBar({handleActivePopupForm, handleActivePopupContact}) {
  
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };
  const handleActivePopupNavBar = () => {
    handleActivePopupForm();
    setActive(false);
  };
  

  return (
    <>
      <nav class="">
        <div class="p-5 px-5 md:px-28 xl:px-40 flex  md:gap-14 items-center justify-between mx-auto ">
          <Link href={"/"} smooth={true} className="flex items-center mr-2">
            <img
              className="w-28"
              src="/logo/Sethor-Logo.svg"
              alt="Sethor"
            />
          </Link>
          <div class="flex md:order-2 lg:hidden">
            <button
              className='text-[var(--background-button-action-rgb)] text-sm font-bold py-2 px-3 rounded-xl border border-[var(--background-button-action-rgb)] text-center mr-3'
              onClick={handleActivePopupForm}
            >
              {TEXTS_BUTTONS.Waitlist}
            </button>
            <button
              onClick={handleActive}
              data-collapse-toggle="navbar-sticky"
              type="button"
              class=""
            >
              <img src="/NavBar/Menu-Icon.svg" alt="" />
            </button>
          </div>
          <ul className={` ${!active ? 'hidden' : 'block'} flex flex-col lg:flex lg:flex-row lg:static lg:w-fit lg:h-fit items-center justify-center gap-6 bg-black lg:bg-transparent w-screen h-screen px-5 py-10 fixed top-0 left-0   z-10`}>
            <img
              onClick={handleActive}
              className="absolute top-10 right-5 cursor-pointer lg:hidden"
              src="/NavBar/Close-Icon.svg"
              alt="Close"
            />
            {LinksNav.map((data, index) => (
              <>
                {!data.activePopup ? 
                  <li key={data.label}>
                    <Link
                      href={data.link}
                      smooth={true}
                      onClick={handleActive}
                      offset={-100}
                      class="block py-2 pl-3 pr-4 rounded hover:text-[#5BEFE6] md:hover:bg-transparent md:p-0 md:text-base"
                    >
                      {data.label}
                    </Link>
                  </li>
                :
                  <li key={data.label}>
                    <Link
                      href={data.link}
                      smooth={true}
                      onClick={handleActivePopupContact}
                      offset={-100}
                      class="block py-2 pl-3 pr-4 rounded hover:text-[#5BEFE6] md:hover:bg-transparent md:p-0 md:text-base"
                    >
                      {data.label}
                    </Link>
                  </li>
                }
              </>
            ))}
            <button
              className='text-[var(--background-button-action-rgb)] text-lg font-bold py-4 px-5 rounded-2xl border border-[var(--background-button-action-rgb)]'
              onClick={handleActivePopupNavBar}
            >
              {TEXTS_BUTTONS.Waitlist}
            </button>
          </ul>
          
        </div>
      </nav>
    </>
  );
}
