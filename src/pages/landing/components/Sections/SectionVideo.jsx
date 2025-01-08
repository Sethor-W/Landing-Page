import React from 'react'
import Video from '../Video/Video'
import P from '../Text/P'
import ButtonActivePopup from '../Buttons/ButtonActivePopup/ButtonActivePopup'
import { TEXTS_BUTTONS } from '../../../../../public/data/buttons/TextLanding'
import Link from 'next/link'

export default function SectionVideo({title, description, handleActivePopup}) {
  return (
    <section className='px-5 md:px-28 xl:px-40 py-40 [bg-section2] bg-section-video-refact flex flex-col gap-10'>
      <div className='flex flex-col md:grid lg:grid-cols-2 xl:grid-cols-4  items-start justify-center gap-8 '>
        <h1 className='text-4xl xl:text-5xl normal-case text-left md:col-span-1 xl:col-span-2'>{title}</h1>
        <div className='flex flex-col items-start justify-center gap-8 relative xl:col-span-2'>
          <P>{description}</P>
          <div className="options flex flex-row gap-3">
            <ButtonActivePopup
              onClick={handleActivePopup}
              text={TEXTS_BUTTONS.Waitlist}
            />
            <Link
                className="flex justify-center items-center text-[var(--background-button-action-rgb)] text-lg font-bold py-4 px-7 rounded-2xl border border-[var(--background-button-action-rgb)] bg-transparent"
                href="#features"
            >
                {TEXTS_BUTTONS.LearnMore}
            </Link>

          </div>
        </div>
      </div>
      <div id='features' className='mx-auto w-[80vw] h-[70vh] md:w-[60vw] flex items-center justify-center'>
        <Video />
      </div>
      {/* <video
        id='features'
        className='my-10'
        src="/video/video.mp4"
      > */}
    </section>
  )
}
