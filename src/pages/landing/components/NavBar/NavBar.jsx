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
      <nav class="fixed bg-principals backdrop-blur w-full z-20 top-0 left-0 rounded-2xl mt-0">
        <div class="max-w-screen-xl flex flex-wrap md:flex-nowrap md:gap-14 items-center justify-between mx-auto py-4">
          <Link href={"/"} smooth={true} class="flex items-center">
            <img src="/logo/Isotipo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white tracking-tight">
              Sethor
            </span>
          </Link>
          <div class="flex md:order-2">
            <Link
              href="#form"
              smooth={true}
              type="button"
              class="btn draw-border flex items-center text-white hover:text-gray-100 border-2 bg-[#4c2882]  focus:ring-4 focus:outline-none focus:bg-purple-800  font-medium rounded-lg text-base px-4 py-2 text-center mr-3 md:mr-0 dark:bg-purple-800 dark:hover:bg-[#4c2882] dark:focus:ring-purple-800 "
            >
              Unirse
            </Link>
            <button
              onClick={handleActive}
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-base text-gray-500 rounded-lg md:hidden hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class={`items-center justify-between ${
              !active && "hidden"
            } overflow-hidden transition-all duration-300 basis-full grow w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul class=" flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {links.map(({ link, label }) => (
                <li key={label}>
                  <Link
                    href={link}
                    smooth={true}
                    offset={-100}
                    class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#d9eafe] md:p-0 md:dark:hover:text-violet-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
