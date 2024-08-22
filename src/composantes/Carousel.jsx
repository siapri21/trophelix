// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <Slider {...settings}>
        <div className="relative">
          <img src="/image1.jpg" alt="Slide 1" className="w-full h-64 object-cover rounded" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold bg-black bg-opacity-50 p-4 rounded">
              Titre de l'image 1
            </h2>
          </div>
        </div>
        <div className="relative">
          <img src="/image2.jpg" alt="Slide 2" className="w-full h-64 object-cover rounded" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold bg-black bg-opacity-50 p-4 rounded">
              Titre de l'image 2
            </h2>
          </div>
        </div>
        <div className="relative">
          <img src="/image3.jpg" alt="Slide 3" className="w-full h-64 object-cover rounded" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold bg-black bg-opacity-50 p-4 rounded">
              Titre de l'image 3
            </h2>
          </div>
        </div>
      </Slider>
    </div>
  );
}