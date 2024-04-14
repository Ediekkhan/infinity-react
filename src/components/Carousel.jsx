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
    <div
      className="w-full h-screen bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
       <div class=" text-center d-none d-md-block text-light">
                  
                  <div class="text-first py-4 font-bold ">
                    
                    <h3 class="text-light">BE AN INSPIRATION</h3>
                    <h1 class="text-primary">GET FIT & GET HEALTHY!</h1>
                    <h4 class="text-light">Promoting fitness lifestyle and  <br /> healthy life has never been easier.</h4>
            
                  </div>
            
                  <button type="button" class="btn btn-lg btn-primary mx-3 ">View our Sample </button>
                  <button type="button" class="btn btn-lg btn-secondary  mx-3">Theme Features </button>
            
                
              </div>
    </div>
  );
}

export default Carousel;
