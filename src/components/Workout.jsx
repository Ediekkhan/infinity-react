import React from 'react';
import { GoChevronRight } from "react-icons/go";
import img1 from '../assets/img/aerobics.jpg';
import img2 from '../assets/img/barswat.jpg';
import img3 from '../assets/img/crunches.jpg';

const Workout = () => {
  return (
    <div className="bg-gray-600 text-light py-5 text-center">
      <h5 className="text-blue-700 font-bold bg-black py-2">OUR CLASSES</h5>
      <h3>WHAT WE OFFER</h3>

      <div className="flex justify-center gap-8 mt-8">
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden">
            <img src={img1} alt="aerobics" className="w-40 h-40 object-cover" />
          </div>
          <div className="text-start mt-4">
            <p className="font-semibold text-blue-700">WEIGHT-LOSS</p>
            <p>AEROBICS</p>
          </div>
          <a href="/" className="text-blue-300 hover:text-white mt-2"><GoChevronRight size={32} /></a>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden">
            <img src={img2} alt="barswat" className="w-40 h-40 object-cover" />
          </div>
          <div className="text-start mt-4">
            <p className="font-semibold text-blue-700">BODY-SHAPE</p>
            <p>SQUAT</p>
          </div>
          <a href="/" className="text-blue-300 hover:text-white mt-2"><GoChevronRight size={32} /></a>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden">
            <img src={img3} alt="crunches" className="w-40 h-40 object-cover" />
          </div>
          <div className="text-start mt-4">
            <p className="font-semibold text-blue-700">STRENGTH</p>
            <p>WEIGHT-LIFTING</p>
          </div>
          <a href="/" className="text-blue-300 hover:text-white mt-2"><GoChevronRight size={32} /></a>
        </div>
      </div>
    </div>
  );
}

export default Workout;
