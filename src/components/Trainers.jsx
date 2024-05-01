import React from 'react';

const Trainers = () => {
  return (
    <div className="bg-blue-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-700">Our Trainers</h2>
          <p className="mt-2 text-lg text-gray-600">Meet our experienced and certified trainers.</p>
        </div>

        <div className="mt-10 overflow-x-auto">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          <div className="border border-blue-200 rounded-lg overflow-hidden shadow-md">
              <img src="https://via.placeholder.com/300" alt="Trainer 1" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-700">COACH NDA</h3>
                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>


          <div className="border border-blue-200 rounded-lg overflow-hidden shadow-md">
              <img src="https://via.placeholder.com/300" alt="Trainer 1" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-700">Trainer 2</h3>
                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            




            <div className="border border-blue-200 rounded-lg overflow-hidden shadow-md">
              <img src="https://via.placeholder.com/300" alt="Trainer 1" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-700">Trainer 3</h3>
                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
