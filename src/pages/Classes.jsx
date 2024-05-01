import React from 'react';
import img1 from '../assets/img/aerobics.jpg';
import img2 from '../assets/img/barswat.jpg';
import img3 from '../assets/img/crunches.jpg';
import Trainers from '../components/Trainers';
import Timetable from '../components/Timetable';

const Classes = () => {
  return (
    <div className="bg-blue-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-700">Our Classes</h2>
          <p className="mt-2 text-lg text-gray-600">Check out our variety of classes to achieve your fitness goals.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          
          <div className="border border-blue-200 rounded-lg overflow-hidden shadow-md">
            <img src={img1} alt="Class 1" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-700">AEROBICS</h3>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Learn More</button>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg overflow-hidden shadow-md">
            <img src={img2} alt="Class 2" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-700">STRENGHT</h3>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Learn More</button>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg overflow-hidden shadow-md">
            <img src={img3} alt="Class 3" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-700">WEIGHT-LIFTING</h3>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      < Trainers />
      <Timetable />

    </div>
  );
}

export default Classes;
