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
    autoplay: true
  };

  return (
    <div className='carousel-container'>
      <Slider {...settings} >
        <div className="relative h-screen ">
          <img className="w-full h-full object-cover" src="https://img.freepik.com/free-photo/depressed-person-standing-stairs_23-2150761508.jpg" alt="Slide 1" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold bg-black bg-opacity-50 p-6 rounded text-center max-w-4xl mx-4">
              Si tu veux faire quelque chose, ou tu trouves un moyen ou tu trouves des excuses
            </h2>
          </div>
        </div>
        <div className="relative h-screen">
          <img className="w-full h-full object-cover" src="https://img.freepik.com/free-photo/portrait-athletic-male-tennis-player_23-2151190017.jpg" alt="Slide 2" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold bg-black bg-opacity-50 p-6 rounded text-center max-w-4xl mx-4">
              Change ta vie aujourd'hui. Ne parie pas sur le futur, 
              agis maintenant, sur-le-champ."
              <br />
              <span className="text-2xl">Simone de Beauvoir</span>
            </h2>
          </div>
        </div>
        <div className="relative h-screen">
          <img className="w-full h-full object-cover" src="https://img.freepik.com/free-photo/monochrome-portrait-athlete-competing-paralympic-games-championship_23-2151492775.jpg" alt="Slide 3" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold bg-black bg-opacity-50 p-6 rounded text-center max-w-4xl mx-4">
              "La sueur d'aujourd'hui est le succès de demain."
            </h2>
          </div>
        </div>
      </Slider>
    </div>
  );
}