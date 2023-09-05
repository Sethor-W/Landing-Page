import React, { useState } from 'react'

export default function Carousel() {

    // const [currentIndex, setCurrentIndex] = useState(0);
    // const slides = ['Slide 1', 'Slide 2', 'Slide 3']; // Reemplaza con tus contenidos reales

    // const handleNextSlide = () => {
    //     if (currentIndex < slides.length - 1) {
    //         setCurrentIndex(currentIndex + 1);
    //     } else {
    //         setCurrentIndex(0);
    //     }
    // };

    // const handlePrevSlide = () => {
    //     if (currentIndex > 0) {
    //         setCurrentIndex(currentIndex - 1);
    //     } else {
    //         setCurrentIndex(slides.length - 1);
    //     }
    // };

    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = ['Slide 1', 'Slide 2', 'Slide 3']; // Reemplaza con tus contenidos reales

    const handleNextSlide = () => {
        if (currentIndex < slides.length - 1) {
        setCurrentIndex(currentIndex + 1);
        } else {
        setCurrentIndex(0);
        }
    };

    const handlePrevSlide = () => {
        if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        } else {
        setCurrentIndex(slides.length - 1);
        }
    };



  return (
    <>
    
        <div id="carouselExampleControls" class="relative" data-te-carousel-init data-te-ride="carousel">
            {/* <!--Carousel items--> */}
            <div
                class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                {/* <!--First item--> */}
                <div class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-item data-te-carousel-active>
                    <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" class="block w-full" alt="Wild Landscape" />
                </div>
                {/* <!--Second item--> */}
                <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item>
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                    class="block w-full"
                    alt="Camera" />
                </div>
                {/* <!--Third item--> */}
                <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item>
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                    class="block w-full"
                    alt="Exotic Fruits" />
                </div>
            </div>

            {/* <!--Carousel controls - prev item--> */}
            <button class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-te-target="#carouselExampleControls" data-te-slide="prev">
                <span class="inline-block h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                </span>
                <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
            </button>
            {/* <!--Carousel controls - next item--> */}
            <button
                class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleControls"
                data-te-slide="next">
                <span class="inline-block h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </span>
                <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
            </button>
        </div>
    
        <div class="relative w-full">
            {/* <!-- Carousel wrapper --> */}
            <div class="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                {/* <!-- Item 1 --> */}
                <div id="carousel-item-1" class="hidden duration-700 ease-in-out">
                    <img src="https://images.pexels.com/photos/7046704/pexels-photo-7046704.jpeg?auto=compress&cs=tinysrgb&w=600" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* <!-- Item 2 --> */}
                <div id="carousel-item-2" class="hidden duration-700 ease-in-out">
                    <img src="https://images.pexels.com/photos/7046704/pexels-photo-7046704.jpeg?auto=compress&cs=tinysrgb&w=600" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* <!-- Item 3 --> */}
                <div id="carousel-item-3" class="hidden duration-700 ease-in-out">
                    <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* <!-- Item 4 --> */}
                <div id="carousel-item-4" class="hidden duration-700 ease-in-out">
                    <img src="https://images.pexels.com/photos/7046704/pexels-photo-7046704.jpeg?auto=compress&cs=tinysrgb&w=600" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
            </div>
            {/* <!-- Slider indicators --> */}
            <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button id="carousel-indicator-1" type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"></button>
                <button id="carousel-indicator-2" type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"></button>
                <button id="carousel-indicator-3" type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"></button>
                <button id="carousel-indicator-4" type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"></button>
            </div>
            {/* <!-- Slider controls --> */}
            <button id="data-carousel-prev" type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="hidden">Previous</span>
                </span>
            </button>
            <button id="data-carousel-next" type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="hidden">Next</span>
                </span>
            </button>
        </div>

        <div className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        {/* Item 1 */}
        <div id="carousel-item-1" className="hidden duration-700 ease-in-out">
          <img
            src="https://images.pexels.com/photos/7046704/pexels-photo-7046704.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 2 */}
        <div id="carousel-item-2" className="hidden duration-700 ease-in-out">
          <img
            src="https://images.pexels.com/photos/7046704/pexels-photo-7046704.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 3 */}
        <div id="carousel-item-3" className="hidden duration-700 ease-in-out">
          <img
            src="/docs/images/carousel/carousel-3.svg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 4 */}
        <div id="carousel-item-4" className="hidden duration-700 ease-in-out">
          <img
            src="https://images.pexels.com/photos/7046704/pexels-photo-7046704.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button
          id="carousel-indicator-1"
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          id="carousel-indicator-2"
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
        ></button>
        <button
          id="carousel-indicator-3"
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
        ></button>
        <button
          id="carousel-indicator-4"
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
        ></button>
      </div>
      {/* Slider controls */}
      <button
        id="data-carousel-prev"
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      <button
        id="data-carousel-next"
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </div>

        <div className="flex overflow-x-scroll space-x-4">
            <div className="w-64 h-64 bg-gray-300 rounded-lg flex-none">Slide 1</div>
            <div className="w-64 h-64 bg-gray-300 rounded-lg flex-none">Slide 2</div>
            <div className="w-64 h-64 bg-gray-300 rounded-lg flex-none">Slide 3</div>
            {/* Agrega más slides según sea necesario */}
        </div>

        {/* <div className="relative">
            <div className="flex space-x-4 overflow-hidden">
                {slides.map((slide, index) => (
                <div key={index} className={`w-64 h-64 bg-gray-300 rounded-lg flex-none transition-transform transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}>
                    {slide}
                </div>
                ))}
            </div>
            <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-blue-500 px-4 py-2 text-white rounded" onClick={handlePrevSlide}>
                Anterior
            </button>
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-500 px-4 py-2 text-white rounded" onClick={handleNextSlide}>
                Siguiente
            </button>
        </div> */}
    
    </>
  )
}
