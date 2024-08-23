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
    <div>
      <Slider {...settings}>
        <div className="relative">
          <img src="https://img.freepik.com/free-photo/depressed-person-standing-stairs_23-2150761508.jpg" alt="Slide 1" className="w-full h-64 object-cover rounded" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold bg-black bg-opacity-50 p-4 rounded">
            Si tu veux faire quelque chose, ou tu trouves un moyen ou tu trouves des excuses
            </h2>
          </div>
        </div>
        <div className="relative">
          <img src="https://img.freepik.com/free-photo/portrait-athletic-male-tennis-player_23-2151190017.jpg" alt="Slide 2" className="w-full h-64 object-cover rounded" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold bg-black bg-opacity-50 p-4 rounded">
            Change ta vie aujourd'hui. Ne parie pas sur le futur, 
            agis maintenant, sur-le-champ."
            Simone de Beauvoir
            </h2>
          </div>
        </div>
        <div className="relative">
          <img src="https://img.freepik.com/free-photo/monochrome-portrait-athlete-competing-paralympic-games-championship_23-2151492775.jpg" alt="Slide 3" className="w-full h-64 object-cover rounded" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold bg-black bg-opacity-50 p-4 rounded">
            "La sueur d’aujourd’hui est le succès de demain."
            </h2>
          </div>
        </div>
      </Slider>
    </div>
  );
}