import React from 'react';
import { GoChevronRight } from "react-icons/go";
import img1 from '../assets/img/aerobics.jpg';
import img2 from '../assets/img/barswat.jpg';
import img3 from '../assets/img/crunches.jpg';

const Workout = () => {
  return (
    <div className="bg-gray-600 text-light py-5 text-center">
      <h5 className="text-blue-700 font-bold bg-black">OUR CLASSES</h5>
      <h3>WHAT WE CAN OFFER</h3>

      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 px-5 mb-5 md:mb-0">
          <div className="bg-black  overflow-hidden">
            <img src={img1} alt="aerobics" className="w-full" />
          </div>
          <div className="flex justify-between bg-black px-3 py-2">
            <div>
              <p className="font-semibold text-blue-700">WEIGHT-LOSS</p>
              <p>AEROBICS</p>
            </div>
            <a href="/" className="hover:text-white"><GoChevronRight size={32} /></a>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-5 mb-5 md:mb-0">
          <div className="bg-black  overflow-hidden">
            <img src={img2} alt="squats" className="w-full" />
          </div>
          <div className="flex justify-between bg-black px-3 py-2">
            <div>
              <p className="font-semibold text-blue-700">BODY-SHAPE</p>
              <p>SQUATS</p>
            </div>
            <a href="/" className="hover:text-white"><GoChevronRight size={32} /></a>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-5">
          <div className="bg-black  overflow-hidden">
            <img src={img3} alt="weight-lifting" className="w-full" />
          </div>
          <div className="flex justify-between bg-black px-3 py-2">
            <div>
              <p className="font-semibold text-blue-700">STRENGTH</p>
              <p>WEIGHT-LIFTING</p>
            </div>
            <a href="/" className="hover:text-white"><GoChevronRight size={32} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workout;
