import React from 'react'
import { useState } from 'react';
import Popup from './landing/components/Popup/Popup';
import Form from './landing/components/Form/Form';
import NavBar from './landing/components/NavBar/NavBar';
import SectionVideo from './landing/components/Sections/SectionVideo';
import Footer from './landing/components/Footer/Footer';
import { Slide2 } from '../../public/data/sections/Sections';
import SectionPrincipal from './landing/components/Sections/SectionPrincipal';
import Link from 'next/link';
import { IoMdArrowRoundUp } from "react-icons/io";

export default function Landing() {

    const [active, setActive] = useState(false);

    const handleActive = () => {
      setActive(true);
    };
    const handleDesactive = () => {
      setActive(false);
    };

  return (
    <>
      <Popup
        active={active}
        handleDesactive={handleDesactive}
      >
        <Form/>
      </Popup>
      <Link 
        href={"#home"}
        smooth={true}
        className='fixed z-[100] bottom-5 right-5 bg-white/[.4] cursor-pointer p-2 rounded-full'>
        <IoMdArrowRoundUp size={24} />
      </Link>
      <main>
        <section id='home' className='bg-[url(/img/Hero-Background.png)] bg-top bg-no-repeat bg-cover'>
          <section className='bg-gradient-section1-bgs'>
            <NavBar handleActivePopup={handleActive}/>
            <SectionPrincipal handleActivePopup={handleActive} />
          </section>
        </section>
        <section className='bg-[url(/img/Secion-3-Background.png)] bg-no-repeat bg-cover'>
          <SectionVideo
            title={Slide2.title}
            description={Slide2.description}
          />
          {/* <section className='px-5 md:px-28 xl:px-40 py-[7.5rem] bg-gradient-section1-bg'>
            <div className='bg-black/50 rounded-[2rem] py-10 px-5 md:p-16 lg:flex lg:flex-row lg:items-center lg:gap-12'>
              <div className='flex flex-col items-start justify-center gap-8 lg:w-[80%] xl:w-[50%]'>
                <h1 className='text-4xl normal-case text-left'>{TEXTS.Slide3.title}</h1>
                <P>{TEXTS.Slide3.description}</P>
                <div className="options flex flex-row gap-3">
                  <ButtonActivePopup
                    onClick={handleActive}
                    text={TEXTS_BUTTONS.Waitlist}
                  />
                  <Link
                      className='text-white text-lg font-bold  py-4 px-7 rounded-2xl'
                      href={'#features'}
                  >
                    {TEXTS_BUTTONS.LearnMore}
                  </Link>
                </div>
              </div>
              <div className='hidden lg:block w-[50%] text-center '>
                <img className='mx-auto xl:h-[50%]' src="/logo/Isotipo.svg" alt="Sethor" />
              </div>
            </div>
          </section> */}
        </section>
      </main>
      <Footer />
    </>
  )
}
