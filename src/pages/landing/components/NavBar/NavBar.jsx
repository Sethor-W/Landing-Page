import React, { useState } from "react";
import Link from "next/link";
import ButtonActivePopup from "../Buttons/ButtonActivePopup";

const links = [
  { label: "Sobre Nosotros", link: "" },
  { label: "Características", link: "#features" },
  { label: "Contacto", link: "#contact" },
];

const Waitlist = "Unirse a la lista de espera";


export default function NavBar({handleActivePopup}) {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  const handleActivePopupNavBar = () => {
    handleActivePopup();
    setActive(false);
  };
  

  return (
    <>
      <nav class="">
        <div class="p-5 px-5 md:px-28 xl:px-40 flex  md:gap-14 items-center justify-between mx-auto ">
          <Link href={"/"} smooth={true} className="flex items-center mr-2">
            <img
              className="w-40"
              src="/logo/Sethor-Logo.svg"
              alt="Sethor"
            />
          </Link>
          <div class="flex md:order-2 lg:hidden">
            <button
              className='text-[var(--background-button-action-rgb)] text-sm font-bold py-2 px-3 rounded-xl border border-[var(--background-button-action-rgb)] text-center mr-3'
              onClick={handleActivePopup}
            >
              {Waitlist}
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
            {links.map(({ link, label }) => (
              <li key={label}>
                <Link
                  href={link}
                  smooth={true}
                  onClick={handleActive}
                  offset={-100}
                  class="block py-2 pl-3 pr-4 rounded hover:text-violet-500 md:hover:bg-transparent md:p-0 md:text-base"
                >
                  {label}
                </Link>
              </li>
            ))}
            <button
              className='text-[var(--background-button-action-rgb)] text-lg font-bold py-4 px-5 rounded-2xl border border-[var(--background-button-action-rgb)]'
              onClick={handleActivePopupNavBar}
            >
              {Waitlist}
            </button>
          </ul>
          
        </div>
      </nav>
    </>
  );
}
