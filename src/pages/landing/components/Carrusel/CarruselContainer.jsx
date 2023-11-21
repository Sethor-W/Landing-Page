import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CarruselContainer({children}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            // {
            //     breakpoint: 1024,
            //     settings: {
            //         slidesToShow: 3,
            //     },
            // },
            // {
            //     breakpoint: 1280,
            //     settings: {
            //         slidesToShow: 4,
            //     },
            // },
        ],
    };
    
    return (
        <div className="container mx-auto p-4 :">
          <Slider {...settings}>
            {children}
          </Slider>
        </div>
    );
}
