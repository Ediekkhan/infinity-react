import React from 'react';
import img1 from '../assets/img/personal.jpg';
import img2 from '../assets/img/grouptraining.jpg';
import img3 from '../assets/img/diet1.jpg';

// const services = [
//   {
//     name: 'Personal Training',
//     description: 'Get personalized workout plans tailored to your fitness goals.',
//     image: 'https://via.placeholder.com/300',
//   },
//   {
//     name: 'Group Classes',
//     description: 'Join fun and energetic group fitness classes for all levels.',
//     image: 'https://via.placeholder.com/300',
//   },
//   {
//     name: 'Nutritional Counseling',
//     description: 'Receive expert advice on nutrition to optimize your health and fitness.',
//     image: 'https://via.placeholder.com/300',
//   },
// ];

const ServicesPage = () => {
  return (
    <div className="mx-auto ">

      {/* <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">

            <img src={service.image} alt={service.name} className="h-64 w-full object-cover" />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>

          </div>
        ))}
      </div> */}

      <div className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-800">Our Services</h2>
                <p className="mt-2 text-lg text-gray-600">Discover the range of services we offer.</p>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img src={img1} alt="Service 1" className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">Personal Training</h3>
                    <p className="mt-2 text-gray-600">Get personalized workout plans tailored to your fitness goals.</p>
                  </div>
                </div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img src={img2} alt="Service 2" className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">Group Classes</h3>
                    <p className="mt-2 text-gray-600">Join fun and energetic group fitness classes for all levels.</p>
                  </div>
                </div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img src={img3} alt="Service 3" className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">Nutritional Counseling</h3>
                    <p className="mt-2 text-gray-600">Receive expert advice on nutrition to optimize your health and fitness.</p>
                  </div>
                </div>
               
              </div>
            </div>
      </div>
    </div>
  );
}

export default ServicesPage;
