// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/img/29594.jpg';
import image2 from '../assets/img/portrait-athletic-male-tennis-player.jpg';
import image3 from '../assets/img/portrait-monochrome-joueur-tennis-professionnel_23-2151418442.jpg';

export default function Carousel() {
  const carouselData = [
    {
      image: image1,
      text: "Si tu veux faire quelque chose, ou tu trouves un moyen ou tu trouves des excuses",
      alt: "Slide 1"
    },
    {
      image: image2,
      text: "Change ta vie aujourd'hui. Ne parie pas sur le futur, agis maintenant, sur-le-champ.",
      author: "Simone de Beauvoir",
      alt: "Slide 2"
    },
    {
      image: image3,
      text: "La sueur d'aujourd'hui est le succès de demain.",
      alt: "Slide 3"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className='carousel-container w-full'>
      <Slider {...settings} >
        {carouselData.map((slide, index) => (
          <div key={index} className="relative"> {/* Augmentation de la hauteur */}
            <img 
              className="w-full h-full object-cover" 
              src={slide.image} 
              alt={slide.alt} 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold p-4 md:p-6 rounded text-center max-w-2xl md:max-w-3xl lg:max-w-4xl mx-4">
                {slide.text}
                {slide.author && (
                  <><br /><span className="text-xl md:text-2xl mt-2">{slide.author}</span></>
                )}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}