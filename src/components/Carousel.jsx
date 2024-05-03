import React, { useState, useEffect } from 'react';
import image1 from '../assets/img/threeadmill.jpg';
import image2 from '../assets/img/swqatboth.jpg';
import image3 from '../assets/img/oldfit.jpg';

const images = [image1, image2, image3];

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-80 sm:h-5/6 md:h-5/6 lg:h-5/6 relative">
      <img
        src={images[currentImageIndex]}
        alt="carousel"
        className="w-full h-80 sm:h-5/6 md:h-5/6 lg:h-5/6 object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white px-6 ">
        <div className="text-first mb-4">
          <h3 className="text-base sm:text-xl lg:text-2xl font-bold mb-2">
            BE AN INSPIRATION
          </h3>
          <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold mb-4">
            GET FIT & GET HEALTHY!
          </h1>
          <h4 className="text-sm sm:text-base lg:text-lg">
            Promoting fitness lifestyle and healthy life has never been easier.
          </h4>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white sm:font-semibold rounded-lg py-2 px-2 m-2">
            View our Sample
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white sm:font-semibold rounded-lg py-2 px-2 m-2">
            Theme Features
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
