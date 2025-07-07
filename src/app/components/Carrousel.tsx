'use client';

import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/800x300/ff0000/ffffff?text=Slide+1',
  'https://via.placeholder.com/800x300/8b0000/ffffff?text=Slide+2',
  'https://via.placeholder.com/800x300/4b0000/ffffff?text=Slide+3'
];

const Carrousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="mx-4 mt-6 rounded-3xl border border-red-700 shadow-[0_0_25px_rgba(255,0,0,0.4)] overflow-hidden backdrop-blur-md">
      <div className="relative w-full h-[300px] bg-black/80 flex items-center justify-center">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />

        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className="absolute left-4 bg-black/50 text-red-500 hover:text-white border border-red-500 hover:border-red-300 rounded-full p-2 shadow-lg transition duration-300"
        >
          ⬅️
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 bg-black/50 text-red-500 hover:text-white border border-red-500 hover:border-red-300 rounded-full p-2 shadow-lg transition duration-300"
        >
          ➡️
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-3 py-4 bg-black/60">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              current === index
                ? 'bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.6)]'
                : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
