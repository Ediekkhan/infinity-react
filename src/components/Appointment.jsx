import React from 'react';
import plank from '../assets/img/plankgym.jpg';

function Appointment() {
  return (
    <div className="flex justify-center items-center text-white h-screen" style={{ backgroundImage: `url(${plank})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <div className="text-center">
        <h4 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4">REGISTER NOW TO GET MORE DEALS</h4>
        <h6 className="text-base md:text-lg lg:text-xl font-semibold mb-6">WHERE HEALTH, BEAUTY, AND FITNESS MEET</h6>
        <a href="/#" className="btn btn-primary py-2 px-4 text-white font-semibold rounded-full hover:bg-blue-700">Book an Appointment</a>
      </div>
    </div>
  );
}

export default Appointment;
