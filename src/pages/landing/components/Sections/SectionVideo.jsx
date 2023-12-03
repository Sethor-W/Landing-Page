import React from 'react'
import Video from '../Video/Video'
import P from '../Text/P'

export default function SectionVideo({title, description}) {
  return (
    <section className='px-5 md:px-28 xl:px-40 py-60 [bg-section2] bg-section-video-refact flex flex-col gap-10'>
      <div className='flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3  items-start justify-center gap-8 '>
        <h1 className='text-4xl xl:text-5xl normal-case text-left md:col-span-1 xl:col-span-2'>{title}</h1>
        <div className='flex flex-col items-start justify-center gap-8 relative xl:col-span-1'>
          <P>{description}</P>
          {/* <div className="options flex flex-row gap-3">
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
          </div> */}
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
