import Link from "next/link";
import React, { useState } from "react";

const links = [
  { label: "Sobre Nosotros", link: "#home" },
  { label: "Características", link: "#features" },
  { label: "Contacto", link: "#contact" },
];

export default function NavBar() {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <>
      <nav class="">
        <div class="p-5 flex flex-wrap md:flex-nowrap md:gap-14 items-center justify-between mx-auto ">
          <Link href={"/"} smooth={true} class="flex items-center">
            <img
              className="w-40"
              src="/logo/Sethor-Logo.svg"
              alt="Sethor"
            />
          </Link>
          <div class="flex md:order-2">
            <Link
              className='text-[var(--background-button-action-rgb)] text-sm font-bold py-2 px-3 rounded-xl border border-[var(--background-button-action-rgb)] text-center mr-3'
              smooth={true}
              href={'#'}
            >
              Join Waitlist
            </Link>
            <button
              onClick={handleActive}
              data-collapse-toggle="navbar-sticky"
              type="button"
              class=""
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <img src="/NavBar/Menu-Icon.svg" alt="" />
            </button>
          </div>
          {active && (
            <ul className="flex flex-col items-center justify-center gap-6 bg-black w-screen h-screen px-5 py-10 fixed top-0 left-0 z-10">
              <img
                onClick={handleActive}
                className="absolute top-10 right-5 cursor-pointer"
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
                    class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#d9eafe] md:p-0 md:dark:hover:text-violet-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <Link
                className='text-[var(--background-button-action-rgb)] text-lg font-bold py-4 px-5 rounded-2xl border border-[var(--background-button-action-rgb)]'
                smooth={true}
                onClick={handleActive}
                href={'#'}
              >
                Join Waitlist
              </Link>
            </ul>
          )}
          
        </div>
      </nav>
    </>
  );
}
